import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import { Routes } from '@lib/frontend/route/containers/Routes/Routes';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Router: LFCModel<RouterPropsModel> = ({ routes, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  console.warn(routes);
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}>
      <Routes routes={routes} />
    </Wrapper>
  );
};
