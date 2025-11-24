import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type PacakgeInfoModel,
  type PackageInfoParamsModel,
} from '@lib/shared/core/utils/packageInfo/packageInfo.models';
import { readFileSync } from 'fs';
import { type PackageJson } from 'type-fest';

export const packageInfo = (dirname?: PackageInfoParamsModel): PacakgeInfoModel => {
  const from = dirname ?? fromWorking();
  return JSON.parse(readFileSync(joinPaths([from, 'package.json'])).toString()) as PackageJson;
};
