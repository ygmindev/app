import { Fragment } from 'react';

import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type RouteGroupPropsModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const RouteGroup: LFCModel<RouteGroupPropsModel> = ({ root, routes, title, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { location, push } = useRouter();
  return (
    <LineGroup
      {...wrapperProps}
      title={t(title)}>
      {routes?.map(({ icon, id, label }, i) => (
        <Fragment key={id}>
          {i > 0 && <Divider key={`${id}-divider`} />}

          <LineItem
            icon={icon}
            key={`${id}-element`}
            onPress={() =>
              push({ pathname: `${root === true ? location.pathname : root ?? ''}/${id}` })
            }
            pHorizontal
            title={label}
          />
        </Fragment>
      ))}
    </LineGroup>
  );
};
