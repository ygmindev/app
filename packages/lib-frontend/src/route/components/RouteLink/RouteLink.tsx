import type { ReactElement } from 'react';

import { Link } from '#lib-frontend/core/components/Link/Link';
import type { SFCModel, SFCPropsModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import type { RouteLinkPropsModel } from '#lib-frontend/route/components/RouteLink/RouteLink.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import type { LocationParamsModel } from '#lib-frontend/route/route.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const RouteLink = <TParams extends LocationParamsModel = LocationParamsModel>({
  children,
  pathname,
  testID,
  ...props
}: SFCPropsModel<RouteLinkPropsModel<TParams>>): ReactElement<
  SFCModel<RouteLinkPropsModel<TParams>>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { push } = useRouter();
  return (
    <Link
      onPress={() => push({ pathname })}
      style={styles}
      testID={testID}>
      {t(children)}
    </Link>
  );
};
