import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type DateFieldPropsModel,
  type DateFieldRefModel,
} from '@lib/frontend/data/components/DateField/DateField.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { forwardRef } from 'react';

export const DateField: RLFCModel<DateFieldRefModel, DateFieldPropsModel> = forwardRef(
  ({ ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    return <Wrapper {...wrapperProps}></Wrapper>;
  },
);
