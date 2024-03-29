import { NavigationHeader } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const RouteHeader: LFCModel<RouteHeaderPropsModel> = ({ route, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getPath, location, push } = useRouter();
  const previous = route.header?.previous;
  return (
    <NavigationHeader
      {...wrapperProps}
      border={DIRECTION.BOTTOM}
      elementState={ELEMENT_STATE.ACTIVE}
      onBack={
        previous
          ? async () => {
              const pathnames = location.pathname.split('/');
              pathnames.splice(pathnames.length - previous, previous);
              return push({
                isBack: true,
                pathname: getPath(pathnames.join('/'), location.params),
              });
            }
          : undefined
      }
      title={route.title}
    />
  );
};
