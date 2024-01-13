import { ItemList } from '@lib-frontend/core/components/ItemList/ItemList';
import { type LFCModel } from '@lib-frontend/core/core.models';
import { type RouteListPropsModel } from '@lib-frontend/route/components/RouteList/RouteList.models';
import { useRouter } from '@lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib-shared/core/utils/filterNil/filterNil';

export const RouteList: LFCModel<RouteListPropsModel> = ({ route, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { push } = useRouter();
  return (
    <ItemList
      {...wrapperProps}
      items={filterNil(
        route?.routes?.map(
          ({ description, icon, isNavigatable = true, params, pathname, title }) =>
            isNavigatable && {
              description,
              icon,
              id: pathname,
              onPress: () => push({ pathname, root: true }),
              params,
              title,
            },
        ),
      )}
      pTop
      title={route?.title}
    />
  );
};
