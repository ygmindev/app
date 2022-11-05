import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useIsMounted } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted';
import { display } from '@lib/frontend/core/utils/display/display';
import type { DevOverlayPropsModel } from '@lib/frontend/dev/containers/DevOverlay/DevOverlay.models';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import { useState } from 'react';

export const DevOverlay: FCModel<DevOverlayPropsModel> = ({ testID }) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>();

  const _handleMessage = (event: MessageEvent): void => {
    switch (event.data.type) {
      case 'webpackInvalid': {
        setIsRefreshing(true);
        break;
      }
      default: {
        setIsRefreshing(false);
        break;
      }
    }
  };

  useIsMounted({
    onMount: () => display.subscribeMessage(_handleMessage),
    onUnmount: () => display.unsubscribeMessage(_handleMessage),
  });

  return (
    <Portal>
      <Appear isVisible={isRefreshing}>
        <Wrapper
          border
          bottom={0}
          isCenter
          isShadow
          m
          p
          position={SHAPE_POSITION.ABSOLUTE}
          right={0}
          round
          testID={testID}>
          <Loading size={THEME_SIZE.XLARGE} />
        </Wrapper>
      </Appear>
    </Portal>
  );
};
