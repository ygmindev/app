import { Link } from '@lib/frontend/core/components/Link/Link';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { RouteLinkPropsModel } from '@lib/frontend/route/components/RouteLink/RouteLink.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const RouteLink: SFCModel<RouteLinkPropsModel> = ({
  children,
  pathname,
  testID,
  ...props
}) => {
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
