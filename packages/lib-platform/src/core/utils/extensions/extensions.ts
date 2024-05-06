import { PLATFORM } from '@lib/platform/core/core.constants';
import { EXTENSIONS_BASE } from '@lib/platform/core/utils/extensions/extensions.constants';
import { type ExtensionsModel } from '@lib/platform/core/utils/extensions/extensions.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const extensions = (): ExtensionsModel => {
  const isWeb = process.env.ENV_PLATFORM === 'web';
  const isNative =
    process.env.ENV_PLATFORM === PLATFORM.ANDROID || process.env.ENV_PLATFORM === PLATFORM.IOS;
  const isFrontend = isNative || isWeb;
  return [
    ...permuteString(
      filterNil([
        process.env.ENV_PLATFORM && `.${process.env.ENV_PLATFORM}`,
        isNative && '.native',
        isFrontend && '.frontend',
      ]),
      EXTENSIONS_BASE,
    ),
    ...EXTENSIONS_BASE,
  ];
};
