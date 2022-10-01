import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { PACKAGE_PREFIXES } from '@lib/shared/file/file.constants';
import { readdirSync } from 'fs';
import { some } from 'lodash';

export const packages = readdirSync(fromPackages()).filter((pkg) =>
  some(PACKAGE_PREFIXES.map((prefix) => pkg.startsWith(prefix))),
);
