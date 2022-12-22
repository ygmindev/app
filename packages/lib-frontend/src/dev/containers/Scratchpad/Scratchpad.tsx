import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { ScratchpadProps } from '@lib/frontend/dev/containers/Scratchpad/Scratchpad.modesl';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';

export const Scratchpad: SFCModel<ScratchpadProps> = ({ ...props }) => {
  const { t } = useTranslation();
  return <Text>{t('core:labels.submit')}</Text>;
};
