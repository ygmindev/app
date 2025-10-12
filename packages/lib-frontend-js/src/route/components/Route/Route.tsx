import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueDelayed } from '@lib/frontend/core/hooks/useValueDelayed/useValueDelayed';
import { type RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { cloneElement, useMemo } from 'react';

export const Route: LFCModel<RoutePropsModel> = ({ children, route, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { isMounted } = useRouter();
  const isMountedF = useValueDelayed(isMounted);

  const element = useMemo(() => {
    let elementF = route?.element ?? (
      <Wrapper
        flex
        position={SHAPE_POSITION.RELATIVE}
      />
    );
    children && (elementF = cloneElement(elementF, { children }));

    switch (route?.transition) {
      // case ROUTE_TRANSITION.SLIDE:
      default:
        return (
          <Appearable
            defaultState={ELEMENT_STATE.ACTIVE}
            isAbsoluteFill
            isActive={isMounted}
            zIndex={isMounted ? true : undefined}>
            {elementF}
          </Appearable>
        );
    }
    return elementF;
  }, [route, children, isMounted]);

  return (
    (isMountedF || isMounted) && (
      <Wrapper
        {...wrapperProps}
        backgroundColor={THEME_COLOR_MORE.SURFACE}
        isAbsoluteFill
        isVerticalScrollable
        zIndex>
        {element}
      </Wrapper>
    )
  );
};
