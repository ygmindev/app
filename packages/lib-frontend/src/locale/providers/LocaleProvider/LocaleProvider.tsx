import type { SFCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { _LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider';
import type { LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider.models';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';

export const LocaleProvider: SFCModel<LocaleProviderPropsModel> = ({ children }) => {
  const actions = useActions();

  useAsync({
    onMount: async (isMounted) => {
      if (!isSsr) {
        const { country } = await import('@lib/frontend/locale/utils/country/country');
        const _country = isMounted() && (await country());
        isMounted() && _country && actions?.locale.countryCodeSet(_country);
      }
    },
  });

  return <_LocaleProvider>{children}</_LocaleProvider>;
};
