import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globMatch } from '@lib/backend/file/utils/globMatch/globMatch';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { EXCLUDE_PATTERNS } from '@lib/config/file/file.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type _DockerModel,
  type _DockerParamsModel,
} from '@tool/task/container/utils/Docker/_Docker.models';
import Docker from 'dockerode';
import tar from 'tar-fs';

export class _Docker implements _DockerModel {
  docker: Docker;
  image: string;
  password: string;
  rootDir: string;
  server: string;
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
    this.image = image;
    this.password = password;
    this.rootDir = rootDir;
    this.server = server;
    this.username = username;
    this.workingDir = workingDir;
  }

  async build(): Promise<void> {
    const tarStream = tar.pack(this.rootDir, {
      ignore: (name) =>
        globMatch(
          name,
          EXCLUDE_PATTERNS.map((v) => `**/*/${v}`),
        ),
    });
    return new Promise<void>((resolve, reject) => {
      this.docker.buildImage(
        tarStream,
        {
          dockerfile: toRelative({
            from: this.rootDir,
            to: joinPaths([this.workingDir, 'src', 'Dockerfile']),
          }),
          t: this.image,
        },
        (_, stream) => {
          if (!stream) {
            return reject(new Error('Build stream missing'));
          }
          this.docker.modem.followProgress(
            stream,
            (err: Error | null, res) => {
              if (err) {
                return reject(err);
              }
              const buildError = res?.find((err) => err.error ?? err.errorDetail);
              if (buildError) {
                logger.error('❌ Docker build failed:', buildError);
                return reject(new Error(buildError.error || buildError.errorDetail?.message));
              }
              logger.info('✅ Build complete');
              resolve();
            },
            (event: { error?: string; stream?: string }) => {
              event.stream && process.stdout.write(event.stream);
              event.error && process.stderr.write(event.error);
            },
          );
        },
      );
    });
  }

  async publish(): Promise<void> {
    const image = this.docker.getImage(this.image);
    const stream = await image.push({
      authconfig: { password: this.password, serveraddress: this.server, username: this.username },
    });
    return new Promise<void>((resolve, reject) => {
      this.docker.modem.followProgress(stream, (err) => {
        if (err) {
          console.error('Push failed:', err);
          return reject(err);
        }
        console.log('🚀 Pushed container');
        resolve();
      });
    });
  }
}
