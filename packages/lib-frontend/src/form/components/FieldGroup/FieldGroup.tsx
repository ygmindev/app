import { Children, cloneElement, type ReactElement } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type FieldGroupPropsModel } from '#lib-frontend/form/components/FieldGroup/FieldGroup.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FieldGroup: LFCModel<FieldGroupPropsModel> = ({ children, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      border
      isRowAlign
      round>
      {Children.toArray(children).map((child) =>
        cloneElement(child as ReactElement, { isTransparent: true }),
      )}
    </Wrapper>
  );
};
