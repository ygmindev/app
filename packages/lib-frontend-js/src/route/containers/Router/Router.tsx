import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';
import { _Router } from '@lib/frontend/route/containers/Router/_Router';
import { type RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { ROUTE } from '@lib/shared/route/route.constants';

export const Router: LFCModel<RouterPropsModel> = ({ routes, ...props }) => {
  const context = useRootContext();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      backgroundColor={THEME_COLOR_MORE.SURFACE}
      flex
      position={SHAPE_POSITION.RELATIVE}>
      <_Router
        routes={routes}
        value={context?.[ROUTE]}
      />
    </Wrapper>
  );
};
