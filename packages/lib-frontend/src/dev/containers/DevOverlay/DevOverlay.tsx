import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
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
        return setIsRefreshing(true);
      }
      case 'webpackStillOk': {
        return setIsRefreshing(false);
      }
      default: {
        return;
      }
    }
  };

  useMount({
    onMount: () => display.subscribeMessage(_handleMessage),
    onUnmount: () => display.unsubscribeMessage(_handleMessage),
  });

  return (
    <Portal>
      <Wrapper
        bottom={0}
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        testID={testID}
        zIndex={1}>
        <Appear isVisible={isRefreshing}>
          <Wrapper
            border
            isCenter
            isShadow
            m
            p
            round>
            <Loading size={THEME_SIZE.XLARGE} />
          </Wrapper>
        </Appear>
      </Wrapper>
    </Portal>
  );
};
