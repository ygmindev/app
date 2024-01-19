import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type DateInputPropsModel,
  type DateInputRefModel,
} from '@lib/frontend/data/components/DateInput/DateInput.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { forwardRef } from 'react';

export const DateInput: RLFCModel<DateInputRefModel, DateInputPropsModel> = forwardRef(
  ({ ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    return <Wrapper {...wrapperProps}></Wrapper>;
  },
);
