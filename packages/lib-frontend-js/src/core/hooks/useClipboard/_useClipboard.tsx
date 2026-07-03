import { type _UseClipboardModel } from '@lib/frontend/core/hooks/useClipboard/_useClipboard.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';

export const _useClipboard = (): _UseClipboardModel => {
  const { success } = useNotification();
  const { t } = useTranslation();
  return {
    copy: async (params: string) => {
      await navigator.clipboard.writeText(params);
      await success({ description: t('core:copiedToClipboard') });
    },
  };
};
