import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { ScratchpadProps } from '@lib/frontend/dev/containers/Scratchpad/Scratchpad.modesl';
import { Root } from '@lib/frontend/root/containers/Root/Root';

export const Scratchpad: SFCModel<ScratchpadProps> = ({ ...props }) => {
  return (
    <Root>
      <Text>hello</Text>
    </Root>
  );
};
