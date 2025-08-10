import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globMatch } from '@lib/backend/file/utils/globMatch/globMatch';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { EXCLUDE_PATTERNS } from '@lib/config/file/file.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type _DockerModel,
  type _DockerParamsModel,
} from '@tool/task/container/utils/Docker/_Docker.models';
import Docker from 'dockerode';
import tar from 'tar-fs';

export class _Docker implements _DockerModel {
  docker: Docker;
  ignore?: Array<string>;
  password: string;
  rootDir: string;
  server: string;
  tag: string;
  username: string;
  workingDir: string;

  constructor({
    ignore = EXCLUDE_PATTERNS,
    image,
    password,
    rootDir = fromRoot(),
    server,
    username,
    workingDir = fromWorking(),
  }: _DockerParamsModel) {
    this.docker = new Docker();
    this.ignore = ignore;
    this.password = password;
    this.rootDir = rootDir;
    this.server = server;
    this.tag = `${this.server}/${process.env.GITHUB_USERNAME}/${image}:latest`;
    this.username = username;
    this.workingDir = workingDir;
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
            logger.error('❌ Error:', error);
            reject(new Error(error.error || error.errorDetail?.message));
          }
          logger.info('✅ Complete');
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
    const tarStream = tar.pack(this.rootDir, {
      ignore: (name) =>
        globMatch(
          name,
          (this.ignore ?? []).map((v) => `**/*/${v}`),
        ),
    });

    try {
      const stream = await this.docker.buildImage(tarStream, {
        buildargs: { ...process.env },
        dockerfile: toRelative({
          from: this.rootDir,
          to: joinPaths([this.workingDir, 'src', 'Dockerfile']),
        }),
        t: this.tag,
      });
      await this._handleStream(stream);
    } catch {
      await this.delete();
    }
  }

  async delete(): Promise<void> {
    try {
      await this.docker.getImage(this.tag).remove({ force: true });
      const danglingImages = await this.docker.listImages({ filters: { dangling: ['true'] } });
      for (const image of danglingImages) {
        await this.docker.getImage(image.Id).remove({ force: true });
      }
    } catch {}
  }

  async publish(isBuild: boolean = true): Promise<void> {
    try {
      isBuild && (await this.build());
      const stream = await this.docker.getImage(this.tag).push({
        authconfig: {
          password: this.password,
          serveraddress: this.server,
          username: this.username,
        },
      });
      await this._handleStream(stream);
    } finally {
      await this.delete();
    }
  }

  async run<TType>(args: Array<string> = []): Promise<TType> {
    try {
      await this.docker.getImage(this.tag).inspect();
    } catch {
      console.log(`📥 Pulling image: ${this.tag}`);
      const stream = await this.docker.pull(this.tag, {
        authconfig: {
          password: this.password,
          serveraddress: this.server,
          username: this.username,
        },
      });
      await this._handleStream(stream);
    }

    const result = (await this.docker.run(this.tag, args, process.stdout)) as TType;
    console.warn(result);
    throw new Error('Method not implemented.');
  }
}
