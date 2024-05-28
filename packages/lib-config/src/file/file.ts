import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { EXTENSIONS_BASE, FILE_CONFIG, PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import { type FileConfigModel } from '@lib/config/file/file.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { readdirSync } from 'fs';
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
        ...permuteString(
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
        some(PACKAGE_PREFIXES.map((prefix) => pkg.startsWith(prefix))),
      ),
    };
  },
});

export default config;
