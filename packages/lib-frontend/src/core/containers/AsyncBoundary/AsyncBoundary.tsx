import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { SkeletonGroup } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import {
  type AsyncBoundaryContextModel,
  type AsyncBoundaryPropsModel,
  type ErrorContextModel,
} from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useQueryContext } from '@lib/frontend/data/hooks/useQueryContext/useQueryContext';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR_MORE, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import noop from 'lodash/noop';
import { createContext, Suspense, useState } from 'react';

export const asyncBoundaryContext = createContext<AsyncBoundaryContextModel>({
  errorContextSet: noop,
  handleRefresh: noop,
});

export const AsyncBoundary: LFCModel<AsyncBoundaryPropsModel> = ({
  children,
  errorContextGet,
  fallback = (
    <Wrapper
      flex
      isCenter>
      <Loading />
    </Wrapper>
  ),
  onRefresh,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [errorContext, errorContextSet] = useState<ErrorContextModel | undefined>();
  const { handleRefresh } = useQueryContext();
  return (
    <asyncBoundaryContext.Provider value={{ errorContextGet, errorContextSet, handleRefresh }}>
      <Wrapper
        {...wrapperProps}
        flex
        position={SHAPE_POSITION.RELATIVE}>
        <Appearable
          backgroundColor={THEME_COLOR_MORE.SURFACE}
          isAbsoluteFill
          isActive={!!errorContext}
          isCenter
          s={THEME_SIZE.SMALL}
          zIndex>
          <Icon
            fontSize={THEME_SIZE_MORE.XLARGE}
            icon={errorContext?.icon ?? 'sad'}
          />

          {errorContext?.title && (
            <AsyncText fontStyle={FONT_STYLE.HEADLINE}>{errorContext.title}</AsyncText>
          )}

          {errorContext?.description && <AsyncText>{errorContext.description}</AsyncText>}

          <Button
            icon="refresh"
            onPress={async () => {
              void (await onRefresh?.());
              handleRefresh();
              await sleep();
              errorContextSet(undefined);
            }}>
            {t('core:tryAgain')}
          </Button>
        </Appearable>

        <Suspense fallback={<SkeletonGroup>{fallback}</SkeletonGroup>}>{children}</Suspense>
      </Wrapper>
    </asyncBoundaryContext.Provider>
  );
};
