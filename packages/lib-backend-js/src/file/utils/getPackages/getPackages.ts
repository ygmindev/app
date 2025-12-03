import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type GetPackagesModel } from '@lib/backend/file/utils/getPackages/getPackages.models';
import { PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import some from 'lodash/some';

export const getPackages = async (): Promise<GetPackagesModel> =>
  children(fromPackages(), { isDirectory: true }).reduce(
    (result, { name }) =>
      some(PACKAGE_PREFIXES, (v) => v.startsWith(v)) ? [...result, name] : result,
    [] as Array<string>,
  );
