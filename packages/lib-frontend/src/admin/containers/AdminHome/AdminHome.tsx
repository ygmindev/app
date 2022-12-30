import type { AdminHomePropsModel } from '@lib/frontend/admin/containers/AdminHome/AdminHome.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import { useState } from 'react';

export const AdminHome: SFCModel<AdminHomePropsModel> = ({ testID, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleError } = useErrorBoundary();
  return (
    <Wrapper
      p
      spacing>
      <Button
        onPress={() => {
          handleError(new Error());
        }}>
        test
      </Button>
    </Wrapper>
  );
};
