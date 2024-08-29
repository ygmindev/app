import {
  type ChildrenModel,
  type ChildrenParamsModel,
} from '@lib/backend/file/utils/children/children.models';
import { readdirSync, statSync } from 'fs';
import { join, normalize } from 'path';

export const children = (...[from, options]: ChildrenParamsModel): ChildrenModel => {
  const root = `/${normalize(from)}`;
  return readdirSync(root, { withFileTypes: true })
    .map((directory) => {
      const fullPath = join(root, directory.name);
      const stat = statSync(fullPath);
      return {
        fullPath,
        isDirectory: directory.isDirectory(),
        lastUpdated: new Date(stat.mtime.getTime()),
        name: directory.name,
      };
    })
    .filter(
      ({ isDirectory: isDirectoryF, name }) =>
        !name.startsWith('.') &&
        (options?.isDirectory === undefined || options?.isDirectory === isDirectoryF),
    );
};
