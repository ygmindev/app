import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type RouteListPropsModel } from '@lib/frontend/route/components/RouteList/RouteList.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const RouteList: LFCModel<RouteListPropsModel> = ({ root, routes, title, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { push } = useRouter();
  return (
    <ItemList
      {...wrapperProps}
      items={routes?.map(({ description, icon, pathname, title }) => ({
        description,
        icon,
        id: pathname,
        onPress: () => push({ pathname, root }),
        title: title ?? pathname,
      }))}
      pTop
      title={title}
    />
  );
};
