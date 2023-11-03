import { useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { Dropdown } from '#lib-frontend/core/components/Dropdown/Dropdown';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const DevPage: SFCModel<DevPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [isOpen, isOpenSet] = useState<boolean | undefined>(false);
  return (
    <Dropdown
      anchor={<Button>test</Button>}
      isOpen={isOpen}
      onToggle={(v) => isOpenSet(v)}>
      <Wrapper>
        <Text>hello</Text>
      </Wrapper>
    </Dropdown>
  );
};
