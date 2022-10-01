import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { ScratchpadProps } from '@lib/frontend/dev/containers/Scratchpad/Scratchpad.modesl';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';

export const Scratchpad: SFCModel<ScratchpadProps> = ({ ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const user = useCurrentUser();
  return (
    <Wrapper
      p
      style={styles}>
      <Text>Scratchpad</Text>
    </Wrapper>
  );
};
