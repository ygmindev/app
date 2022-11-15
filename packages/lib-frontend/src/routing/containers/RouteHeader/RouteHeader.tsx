import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { APP_HEADER_HEIGHT } from '@lib/frontend/app/containers/AppHeader/AppHeader.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { FCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import type { RouteHeaderPropsModel } from '@lib/frontend/routing/containers/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { THEME_RELATIVE_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';

export const RouteHeader: FCModel<RouteHeaderPropsModel> = ({ testID }) => {
  const { up } = useRouter();
  const current = useSelector((state) => state.routing.current);

  return current ? (
    <Appear
      backgroundColor={THEME_RELATIVE_COLOR.MAIN}
      height={APP_HEADER_HEIGHT}
      isAbsoluteFill
      isLazy
      isRowAlign
      isScalable={false}
      isVisible={current.isHeader}
      testID={testID}>
      <Icon
        icon={ICON.chevronLeft}
        isTitle
        onPress={up}
      />
    </Appear>
  ) : null;
};
