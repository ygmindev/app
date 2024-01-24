import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { type SpecificationDetailPropsModel } from '@lib/frontend/openapi/components/SpecificationDetail/SpecificationDetail.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ReactElement } from 'react';

export const SpecificationDetail = <TType,>({
  specification,
  ...props
}: LFCPropsModel<SpecificationDetailPropsModel<TType>>): ReactElement<
  LFCPropsModel<SpecificationDetailPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
    />
  );
};
