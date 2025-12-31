import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import {
  type WithDirModel,
  type WithDirParamsModel,
} from '@lib/backend/file/utils/withDir/withDir.models';

export const withDir = async <TType extends unknown>(
  ...[dirname, fn]: WithDirParamsModel<TType>
): Promise<WithDirModel<TType>> => {
  const workingDir = fromWorking();
  process.chdir(dirname);
  const result = await fn();
  process.chdir(workingDir);
  return result;
};
