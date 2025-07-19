import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { EXTENSIONS_BASE, FILE_CONFIG, PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import { type FileConfigModel } from '@lib/config/file/file.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { existsSync, readdirSync } from 'fs';
import some from 'lodash/some';

export const config = defineConfig<FileConfigModel>({
  params: () => {
    const isWeb = process.env.ENV_PLATFORM === 'web';
    const isNative =
      process.env.ENV_PLATFORM === PLATFORM.ANDROID || process.env.ENV_PLATFORM === PLATFORM.IOS;
    const isFrontend = isNative || isWeb;
    return {
      ...FILE_CONFIG,

      backupPath: fromRoot('../backups'),

      extensions: [
        ...cartesianString(
          filterNil([
            process.env.ENV_PLATFORM && `.${process.env.ENV_PLATFORM}`,
            isNative && '.native',
            isFrontend && '.frontend',
          ]),
          EXTENSIONS_BASE,
        ),
        ...EXTENSIONS_BASE,
      ],

      packageDirs: readdirSync(fromPackages()).filter((pkg) =>
        some(
          PACKAGE_PREFIXES.map(
            (prefix) =>
              pkg.startsWith(prefix) &&
              (pkg.endsWith('-js') || pkg.endsWith('-py')) &&
              existsSync(joinPaths([fromPackages(pkg), 'package.json'])),
          ),
        ),
      ),
    };
  },
});

export default config;
