import { type AccordionGroupPropsModel } from '@lib/frontend/animation/components/AccordionGroup/AccordionGroup.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { cloneElement } from 'react';

export const AccordionGroup: LFCModel<AccordionGroupPropsModel> = ({
  accordions,
  defaultValue,
  onChange,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue: defaultValue ?? accordions?.[0]?.id,
    onChange,
    value,
  });
  return (
    <Wrapper
      {...wrapperProps}
      s>
      {accordions?.map(({ element, id }) =>
        cloneElement(element, {
          isExpandable: valueControlled === id ? false : undefined,
          key: id,
          onChange: (v) => valueControlledSet(v ? id : undefined),
          value: element.props.value ?? (valueControlled === id ? ELEMENT_STATE.ACTIVE : undefined),
        }),
      )}
    </Wrapper>
  );
};
