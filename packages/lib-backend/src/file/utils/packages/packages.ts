import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type PackagesModel } from '@lib/backend/file/utils/packages/packages.models';
import { config } from '@lib/config/core/file/file';
import { readdirSync } from 'fs';
import some from 'lodash/some';

export const packages: PackagesModel = readdirSync(fromPackages()).filter((pkg) =>
  some(config.packagePrefixes.map((prefix) => pkg.startsWith(prefix))),
);
