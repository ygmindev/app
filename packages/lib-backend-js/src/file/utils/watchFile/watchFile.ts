import { _watchFile } from '@lib/backend/file/utils/watchFile/_watchFile';
import {
  type WatchFileModel,
  type WatchFileParamsModel,
} from '@lib/backend/file/utils/watchFile/watchFile.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const watchFile = (...[params, options]: WatchFileParamsModel): WatchFileModel =>
  _watchFile(params, {
    ...options,
    onAdd: async (filename) => {
      logger.debug(`added: ${filename}`);
      void options.onAdd?.(filename);
    },
    onChange: async (filename) => {
      logger.debug(`changed: ${filename}`);
      void options.onChange?.(filename);
    },
    onDelete: async (filename) => {
      logger.debug(`deleted: ${filename}`);
      void options.onDelete?.(filename);
    },
  });
