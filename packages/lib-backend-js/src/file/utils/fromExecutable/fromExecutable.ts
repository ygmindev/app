import {
  type FromExecutableModel,
  type FromExecutableParamsModel,
} from '@lib/backend/file/utils/fromExecutable/fromExecutable.models';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { execSync } from 'child_process';

const resolveCommand = (value: string): string | null => {
  try {
    execSync(`command -v ${value}`).toString().trim();
    return value;
  } catch (_) {
    return null;
  }
};

export const fromExecutable = (...paths: FromExecutableParamsModel): FromExecutableModel => {
  const [command, ...rest] = joinPaths(filterNil(paths)).split(' ');
  const options: Array<() => string> = [
    () => execSync(`zsh -l -c "which ${command}"`).toString().trim(),
    () => fromModules('.bin', command),
  ];
  for (const option of options) {
    const v = resolveCommand(option());
    if (v) {
      return `${v} ${rest.join(' ')}`;
    }
  }
  throw new NotFoundError(command);
};
