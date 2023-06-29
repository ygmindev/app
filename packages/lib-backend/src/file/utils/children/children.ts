import { readdirSync, statSync } from 'fs';
import { join, normalize } from 'path';

import {
  type ChildrenModel,
  type ChildrenParamsModel,
} from '#lib-backend/file/utils/children/children.models';

export const children = ({ from, isDirectory }: ChildrenParamsModel): Array<ChildrenModel> => {
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
      ({ isDirectory: _isDirectory, name }) =>
        !name.startsWith('.') && (isDirectory === undefined || isDirectory === _isDirectory),
    );
};
