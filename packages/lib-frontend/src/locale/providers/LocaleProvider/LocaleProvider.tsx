import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import type { LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const LocaleProvider = composeComponent<LocaleProviderPropsModel, _LocaleProviderPropsModel>(
  {
    Component: _LocaleProvider,
  },
);

process.env.APP_DEBUG && (LocaleProvider.displayName = variableName(() => LocaleProvider));
