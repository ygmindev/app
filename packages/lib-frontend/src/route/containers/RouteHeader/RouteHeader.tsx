import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { APP_HEADER_HEIGHT } from '@lib/frontend/app/containers/AppHeader/AppHeader.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { THEME_RELATIVE_COLOR } from '@lib/frontend/style/style.constants';

export const RouteHeader: FCModel<RouteHeaderPropsModel> = ({ testID }) => {
  const { up } = useRouter();
  const current = useStore((state) => state.route.current);

  return current ? (
    <Appearable
      backgroundColor={THEME_RELATIVE_COLOR.MAIN}
      height={APP_HEADER_HEIGHT}
      isAbsoluteFill
      isLazy
      isRowAlign
      isScalable={false}
      isVisible={current.isHeader}
      testID={testID}>
      <Icon
        icon={ICONS.chevronLeft}
        isTitle
        onPress={up}
      />
    </Appearable>
  ) : null;
};
