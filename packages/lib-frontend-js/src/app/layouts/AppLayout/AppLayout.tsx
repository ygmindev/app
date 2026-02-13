import { AppToolbar } from '@lib/frontend/app/containers/AppToolbar/AppToolbar';
import { type AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppLayout: LFCModel<AppLayoutPropsModel> = ({ children, routes, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isRow
      position={SHAPE_POSITION.RELATIVE}>
      <AppToolbar routes={routes} />

      <Wrapper
        flex
        isVerticalScrollable>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
