import { cloneElement } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type GroupFieldPropsModel } from '#lib-frontend/form/components/GroupField/GroupField.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const GroupField: LFCModel<GroupFieldPropsModel> = ({ children, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      border
      isRowAlign
      round>
      {children?.map((child) => cloneElement(child, { isTransparent: true }))}
    </Wrapper>
  );
};
