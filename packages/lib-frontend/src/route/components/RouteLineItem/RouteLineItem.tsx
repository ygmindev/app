import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type RouteLineItemPropsModel } from '#lib-frontend/route/components/RouteLineItem/RouteLineItem.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';

export const RouteLineItem: LFCModel<RouteLineItemPropsModel> = ({ root, route, ...props }) => {
  const { location, push } = useRouter();
  return (
    <LineItem
      {...props}
      onPress={() =>
        push({
          ...route,
          pathname: `${root === true ? location.pathname : root ?? ''}/${route.pathname}`,
        })
      }
    />
  );
};
