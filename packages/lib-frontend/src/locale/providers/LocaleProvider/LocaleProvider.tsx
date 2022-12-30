import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import type { LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider.models';

export const LocaleProvider = composeComponent<LocaleProviderPropsModel, _LocaleProviderPropsModel>(
  {
    getComponent: () => _LocaleProvider,
  },
);
