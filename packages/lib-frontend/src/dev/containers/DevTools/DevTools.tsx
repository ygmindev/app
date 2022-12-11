import type { FCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { display } from '@lib/frontend/core/utils/display/display';
import type { DevToolsPropsModel } from '@lib/frontend/dev/containers/DevTools/DevTools.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { THEME_COLOR } from '@lib/frontend/style/utils/theme/theme.constants';
import { CORE } from '@lib/shared/core/core.constants';

const DEV_TOOLS_NOTIFICATION = 'DEV_TOOLS_NOTIFICATION';

export const DevTools: FCModel<DevToolsPropsModel> = () => {
  const { add, remove } = useNotification();
  const { t } = useTranslation([CORE]);

  const _handleMessage = (event: MessageEvent): void => {
    switch (event.data.type) {
      case 'webpackInvalid': {
        return add({
          color: THEME_COLOR.PRIMARY,
          icon: ICON.code,
          id: DEV_TOOLS_NOTIFICATION,
          isInfinite: true,
          message: t('core:labels.loading'),
        });
      }
      case 'webpackStillOk': {
        return remove(DEV_TOOLS_NOTIFICATION);
      }
      default: {
        return;
      }
    }
  };

  useMount({
    onMount: () => display.subscribeMessage(_handleMessage),
    onUnmount: () => display.unsubscribeMessage(_handleMessage),
  });

  return null;
};
