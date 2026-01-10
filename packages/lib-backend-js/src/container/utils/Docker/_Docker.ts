import {
  type _DockerModel,
  type _DockerParamsModel,
} from '@lib/backend/container/utils/Docker/_Docker.models';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { globMatch } from '@lib/backend/file/utils/globMatch/globMatch';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import Docker from 'dockerode';
import tar from 'tar-fs';

export class _Docker implements _DockerModel {
  container: ContainerConfigModel;
  docker: Docker;
  url: string;

  constructor({ container }: _DockerParamsModel) {
    this.docker = new Docker();
    this.container = container;
    const { image, server, tag, username } = container;
    this.url = `${server}/${username}/${image}:${tag}`;
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
    const { dirname, ignore, image, platform, tag } = this.container;

    const tarStream = tar.pack(dirname, {
      ignore: (name) =>
        globMatch(
          name,
          (ignore ?? []).map((v) => `**/*/${v}`),
        ),
    });

    try {
      const environment = Container.get(Environment);
      const stream = await this.docker.buildImage(tarStream, {
        buildargs: { ...environment.variables },
        dockerfile: joinPaths([dirname, 'Dockerfile']),
        nocache: true,
        platform,
        pull: false,
        t: `${image}:${tag}`,
      });
      await this._handleStream(stream);
    } catch {
      await this.delete();
    }
  }

  async delete(): Promise<void> {
    const { image, tag } = this.container;

    try {
      await this.docker.getImage(`${image}:${tag}`).remove({ force: true });
      const danglingImages = await this.docker.listImages({ filters: { dangling: ['true'] } });
      for (const image of danglingImages) {
        await this.docker.getImage(image.Id).remove({ force: true });
      }
    } catch {}
  }

  async publish(isBuild: boolean = true): Promise<void> {
    const { image, password, server, tag, username } = this.container;

    try {
      isBuild && (await this.build());
      const img = this.docker.getImage(`${image}:${tag}`);
      await img.tag({
        repo: `${server}/${username}/${image}`,
        tag,
      });
      const stream = await this.docker.getImage(this.url).push({
        authconfig: {
          password,
          serveraddress: server,
          username,
        },
      });
      await this._handleStream(stream);
    } finally {
      await this.delete();
    }
  }

  async run<TType>(args: Array<string> = []): Promise<TType> {
    const { password, server, username } = this.container;

    try {
      await this.docker.getImage(this.url).inspect();
    } catch {
      logger.info(`📥 Pulling image: ${this.url}`);
      const stream = await this.docker.pull(this.url, {
        authconfig: {
          password,
          serveraddress: server,
          username,
        },
      });
      await this._handleStream(stream);
    }

    return (await this.docker.run(this.url, args, process.stdout)) as TType;
  }
}
