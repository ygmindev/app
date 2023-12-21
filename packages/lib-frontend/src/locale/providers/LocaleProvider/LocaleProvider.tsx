import { type FCModel } from '#lib-frontend/core/core.models';
import { _LocaleProvider } from '#lib-frontend/locale/providers/LocaleProvider/_LocaleProvider';
import { type LocaleProviderPropsModel } from '#lib-frontend/locale/providers/LocaleProvider/LocaleProvider.models';

export const LocaleProvider: FCModel<LocaleProviderPropsModel> = ({ children, value }) => {
  return <_LocaleProvider value={value}>{children}</_LocaleProvider>;
};
