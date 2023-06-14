import type { SFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { _LocaleProvider } from '#lib-frontend/locale/providers/LocaleProvider/_LocaleProvider';
import type { LocaleProviderPropsModel } from '#lib-frontend/locale/providers/LocaleProvider/LocaleProvider.models';
import { currentTimezone } from '#lib-frontend/locale/utils/currentTimezone/currentTimezone';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';

export const LocaleProvider: SFCModel<LocaleProviderPropsModel> = ({ children, value }) => {
  const actions = useActions();
  const isTimezoneAutomatic = useStore((state) => state.locale.isTimezoneAutomatic);
  useAsync(
    async (isMounted) => {
      isMounted() && isTimezoneAutomatic && actions?.locale.timezoneSet(currentTimezone());
    },
    [isTimezoneAutomatic],
  );
  return <_LocaleProvider value={value}>{children}</_LocaleProvider>;
};
