import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import {
  type TableInputPropsModel,
  type TableInputRefModel,
} from '@lib/frontend/data/components/TableInput/TableInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { cloneElement, type ForwardedRef, forwardRef, type ReactElement } from 'react';

export const TableInput = forwardRef(
  <TType,>(
    {
      defaultValue,
      element,
      onChange,
      value,
      ...props
    }: RLFCPropsModel<TableInputRefModel<TType>, TableInputPropsModel<TType>>,
    _: ForwardedRef<TableInputRefModel<TType>>,
  ): ReactElement<RLFCPropsModel<TableInputRefModel<TType>, TableInputPropsModel<TType>>> => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled<Array<TType>>({
      defaultValue,
      onChange,
      value,
    });
    return (
      <Wrapper {...wrapperProps}>
        {cloneElement(element, {
          data: valueControlled,
          isDeletable: true,
          onChange: valueControlledSet,
        })}
      </Wrapper>
    );
  },
) as <TType>(
  props: RLFCPropsModel<TableInputRefModel<TType>, TableInputPropsModel<TType>>,
) => ReactElement<RLFCPropsModel<TableInputRefModel<TType>, TableInputPropsModel<TType>>>;
