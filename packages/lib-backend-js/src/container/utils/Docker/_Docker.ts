import {
  type _DockerModel,
  type _DockerParamsModel,
} from '@lib/backend/container/utils/Docker/_Docker.models';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { globMatch } from '@lib/backend/file/utils/globMatch/globMatch';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import Docker, { type ContainerCreateOptions } from 'dockerode';
import { readFileSync } from 'fs';
import isNil from 'lodash/isNil';
import snakeCase from 'lodash/snakeCase';
import tar from 'tar-fs';

const getBuildArgs = (pathname: string): Array<string> => {
  const content = readFileSync(pathname, 'utf-8');
  const matches = [...content.matchAll(/^\s*ARG\s+([a-zA-Z_][a-zA-Z0-9_]*)(?:=.*)?$/gm)];
  return matches.map((match) => match[1]);
};

export class _Docker implements _DockerModel {
  container: ContainerConfigModel;
  docker: Docker;
  url: string;

  constructor(params: _DockerParamsModel) {
    this.docker = new Docker();
    this.container = params;
    const { image, server, tag } = params;
    this.url = `${filterNil([server, snakeCase(image)]).join('/')}:${tag}`;
    if (params.environment) {
      process.env = { ...process.env, ...params.environment };
    }
  }

  async _handleStream(stream?: NodeJS.ReadableStream): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!stream) {
        return reject(new NotFoundError('Stream missing'));
      }
      this.docker.modem.followProgress(
        stream,
        (err: Error | null, res: Array<{ error?: string; errorDetail?: Error }>) => {
          if (err) {
            return reject(err);
          }
          const error = res?.find((err) => err.error ?? err.errorDetail);
          if (error) {
            logger.error(error);
            reject(new Error(error.error || error.errorDetail?.message));
          }
          logger.success('complete');
          return resolve();
        },
        (event: { error?: string; stream?: string }) => {
          event.stream && process.stdout.write(event.stream);
          event.error && process.stderr.write(event.error);
        },
      );
    });
  }

  async build(): Promise<void> {
    logger.progress(`building container ${this.url}`);
    const { dockerPathname, ignore, platform } = this.container;
    // await this.delete();
    const tarStream = tar.pack(fromRoot(), {
      ignore: (name) =>
        globMatch(
          name,
          (ignore ?? []).map((v) => `**/*/${v}`),
        ),
    });

    try {
      const environment = Container.get(Environment);
      await environment.initialize();
      const stream = await this.docker.buildImage(tarStream, {
        buildargs: { ...environment.variables },
        dockerfile: toRelative({ from: fromRoot(), to: dockerPathname ?? '' }),
        nocache: true,
        platform,
        pull: false,
        t: this.url,
      });
      await this._handleStream(stream);
    } catch (e) {
      logger.error(e as Error);
      await this.delete();
    }
  }

  buildCommand(): string {
    const { dockerPathname, platform } = this.container;
    const buildArgs = getBuildArgs(dockerPathname ?? '');
    return `docker build \
--no-cache \
--file ${toRelative({ from: fromRoot(), to: dockerPathname ?? '' })} \
--tag ${this.url} \
--platform ${platform} \
${buildArgs
  .map((k) => {
    const v = process.env[k as keyof typeof process.env];
    return v ? `--build-arg ${k}=${v}` : undefined;
  })
  .join(' ')} .`;
  }

  async delete(): Promise<void> {
    logger.progress(`deleting container ${this.url}`);
    try {
      await this.docker.getImage(this.url).remove({ force: true });
      const danglingImages = await this.docker.listImages({ filters: { dangling: ['true'] } });
      for (const image of danglingImages) {
        await this.docker.getImage(image.Id).remove({ force: true });
      }
    } catch {}
  }

  async publish(): Promise<void> {
    logger.progress(`publishing container ${this.url}`);
    const { password, server, username } = this.container;
    try {
      const stream = await this.docker.getImage(this.url).push({
        authconfig: {
          password,
          serveraddress: server,
          username,
        },
      });
      await this._handleStream(stream);
    } catch (e) {
      logger.error(e as Error);
    } finally {
      await this.delete();
    }
  }

  publishCommand(): string {
    return `echo "$CONTAINER_PASSWORD" | docker login "$CONTAINER_HOST" -u "$CONTAINER_USERNAME" --password-stdin \
&& docker push "${this.url}"`;
  }

  async run<TType>(
    args: Array<string> = [],
    env?: PartialModel<EnvironmentConfigModel>,
  ): Promise<TType> {
    const { password, server, username } = this.container;
    try {
      await this.docker.getImage(this.url).inspect();
    } catch {
      logger.progress(`pulling image: ${this.url}`);
      const stream = await this.docker.pull(this.url, {
        authconfig: {
          password,
          serveraddress: server,
          username,
        },
      });
      await this._handleStream(stream);
    }

    const environment = Container.get(Environment);
    const port = environment.variables.PORT ?? environment.variables.SERVER_APP_PORT;
    const options: ContainerCreateOptions = {
      AttachStderr: true,
      AttachStdout: true,
      ExposedPorts: { [`${port}/tcp`]: {} },
      HostConfig: { PortBindings: { [`${port}/tcp`]: [{ HostPort: `${port}` }] } },
      Image: this.url,
      name: `container-${uid()}`,
    };
    const envVars = env ?? (environment.variables as Record<string, string>);
    if (env) {
      options.Env = Object.entries(envVars)
        .filter(([_, value]) => !isNil(value))
        .map(([key, value]) => `${key}=${String(value)}`);
    }
    const container = await this.docker.createContainer(options);
    return container.start();
  }
}
