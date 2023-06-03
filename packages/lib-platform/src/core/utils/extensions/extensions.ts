import { PLATFORM } from '@lib/platform/core/core.constants';
import { EXTENSIONS_BASE } from '@lib/platform/core/utils/extensions/extensions.constants';
import type { ExtensionsModel } from '@lib/platform/core/utils/extensions/extensions.models';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const extensions = (): ExtensionsModel => {
  const isWeb = process.env.ENV_PLATFORM === 'web';
  const isNative = [PLATFORM.ANDROID, PLATFORM.IOS].includes(process.env.ENV_PLATFORM);
  const isFrontend = isNative || isWeb;
  return [
    ...permuteString(
      [`.${process.env.ENV_PLATFORM}`, isNative && '.native', isFrontend && '.frontend'].filter(
        Boolean,
      ) as Array<string>,
      EXTENSIONS_BASE,
    ),
    ...EXTENSIONS_BASE,
  ];
};
