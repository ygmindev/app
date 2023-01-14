import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _LocaleProvider as _LocaleProviderClient } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.client';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import { _LocaleProvider as _LocaleProviderServer } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.server';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import type { I18nextProviderProps } from 'react-i18next';

export const _LocaleProvider = composeComponent<_LocaleProviderPropsModel, I18nextProviderProps>({
  getComponent: () => (isSsr ? _LocaleProviderServer : _LocaleProviderClient),
});
