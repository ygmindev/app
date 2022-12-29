import type { AdminHomePropsModel } from '@lib/frontend/admin/containers/AdminHome/AdminHome.models';
import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

export const AdminHome: SFCModel<AdminHomePropsModel> = ({ testID, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper
      p
      spacing>
      <Tabs tabs={MENU_FIXTURE_OPTIONS} />
    </Wrapper>
  );
};
