import { type SkeletonGroupPropsModel } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type ElementStatePropsModel, type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { createContext } from 'react';

export const SkeletonContext = createContext<ElementStatePropsModel>({
  elementState: ELEMENT_STATE.INACTIVE,
});

export const SkeletonGroup: LFCModel<SkeletonGroupPropsModel> = ({
  children,
  elementState,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <SkeletonContext.Provider value={{ elementState }}>
      <Wrapper {...wrapperProps}>{children}</Wrapper>
    </SkeletonContext.Provider>
  );
};
