import {
  type _DockerModel,
  type _DockerParamsModel,
} from '@lib/backend/container/utils/Docker/_Docker.models';
import { type DockerBuildParamsModel } from '@lib/backend/container/utils/Docker/Docker.models';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globMatch } from '@lib/backend/file/utils/globMatch/globMatch';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
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
import isNil from 'lodash/isNil';
import tar from 'tar-fs';

export class _Docker implements _DockerModel {
  container: ContainerConfigModel;
  docker: Docker;
  url: string;

  constructor({ container }: _DockerParamsModel) {
    this.docker = new Docker();
    this.container = container;

    const { image, server, tag, username } = container;
    this.url = `${filterNil([server, username, image]).join('/')}:${tag}`;
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

  async build(params?: DockerBuildParamsModel): Promise<void> {
    const { dirname = fromWorking(), dockerfilename, ignore, platform } = this.container;
    await this.delete();
    const tarStream = tar.pack(fromRoot(), {
      ignore: (name) =>
        globMatch(
          name,
          (ignore ?? []).map((v) => `**/*/${v}`),
        ),
    });

    try {
      const dockerfilenameF = params?.dockerfilename ?? dockerfilename;
      const environment = Container.get(Environment);
      const pathname = joinPaths([dirname, dockerfilenameF]);
      const stream = await this.docker.buildImage(tarStream, {
        buildargs: { ...environment.variables },
        dockerfile: toRelative({ from: fromRoot(), to: pathname }),
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

  async delete(): Promise<void> {
    try {
      await this.docker.getImage(this.url).remove({ force: true });
      const danglingImages = await this.docker.listImages({ filters: { dangling: ['true'] } });
      for (const image of danglingImages) {
        await this.docker.getImage(image.Id).remove({ force: true });
      }
    } catch (e) {
      logger.error(e as Error);
    }
  }

  async publish(isBuild: boolean = true): Promise<void> {
    const { password, server, username } = this.container;
    try {
      isBuild && (await this.build());
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
      // await this.delete();
    }
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
