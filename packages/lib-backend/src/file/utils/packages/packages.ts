import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { config } from '#lib-config/core/file/file';
import { readdirSync } from 'fs';
import some from 'lodash/some';

export const packages = readdirSync(fromPackages()).filter((pkg) =>
  some(config.packagePrefixes.map((prefix) => pkg.startsWith(prefix))),
);
