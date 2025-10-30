import { Link } from '@lib/frontend/core/components/Link/Link';
import { type SFCModel, type SFCPropsModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type RouteLinkPropsModel } from '@lib/frontend/route/components/RouteLink/RouteLink.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type ReactElement } from 'react';

export const RouteLink = <TType = object,>({
  children,
  pathname,
  testID,
  ...props
}: SFCPropsModel<RouteLinkPropsModel<TType>>): ReactElement<
  SFCModel<RouteLinkPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { push } = useRouter();
  return children ? (
    <Link
      onPress={() => {
        void push({ pathname });
      }}
      style={styles}
      testID={testID}>
      {t(children)}
    </Link>
  ) : (
    <></>
  );
};
