import { type FCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { _LocaleProvider } from '@lib/frontend/locale/containers/LocaleProvider/_LocaleProvider';
import { type LocaleProviderPropsModel } from '@lib/frontend/locale/containers/LocaleProvider/LocaleProvider.models';
import { currentCountry } from '@lib/frontend/locale/utils/currentCountry/currentCountry';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const LocaleProvider: FCModel<LocaleProviderPropsModel> = ({ children, value }) => {
  const [, countryCodeSet] = useStore('locale.countryCode');
  useAsync(async (isMounted) => {
    const country = await currentCountry();
    isMounted() && countryCodeSet(country);
  });
  return <_LocaleProvider value={value}>{children}</_LocaleProvider>;
};
