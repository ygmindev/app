import { NavigationHeader } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const RouteHeader: LFCModel<RouteHeaderPropsModel> = ({ route, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { back, location, push } = useRouter();
  return (
    <NavigationHeader
      {...wrapperProps}
      elementState={ELEMENT_STATE.ACTIVE}
      onBack={async () => (route?.previous ? push({ pathname: route.previous }) : back())}
      title={location.params?.title ?? route?.title}
    />
  );
};
