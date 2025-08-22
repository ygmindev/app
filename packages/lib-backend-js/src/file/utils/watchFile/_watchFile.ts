import { globMatch } from '@lib/backend/file/utils/globMatch/globMatch';
import {
  type _WatchFileModel,
  type _WatchFileParamsModel,
} from '@lib/backend/file/utils/watchFile/_watchFile.models';
import chokidar from 'chokidar';

export const _watchFile = (...[params, options]: _WatchFileParamsModel): _WatchFileModel => {
  chokidar
    .watch(
      params,
      options?.patterns
        ? { ignored: (v) => !globMatch(v, options.patterns as Array<string>) }
        : undefined,
    )
    .on('add', (pathname) => {
      void options?.onAdd?.(pathname);
    })
    .on('change', (pathname) => {
      void options?.onChange?.(pathname);
    })
    .on('unlink', (pathname) => {
      void options?.onDelete?.(pathname);
    });
};
