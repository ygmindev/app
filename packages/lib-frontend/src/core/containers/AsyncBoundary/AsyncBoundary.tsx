import noop from 'lodash/noop';
import { createContext, Suspense, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Loading } from '#lib-frontend/core/components/Loading/Loading';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import {
  type AsyncBoundaryContextModel,
  type AsyncBoundaryPropsModel,
  type ErrorContextModel,
} from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useQueryContext } from '#lib-frontend/data/hooks/useQueryContext/useQueryContext';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR_MORE, THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const asyncBoundaryContext = createContext<AsyncBoundaryContextModel>({
  errorContextSet: noop,
  handleRefresh: noop,
});

export const AsyncBoundary: LFCModel<AsyncBoundaryPropsModel> = ({
  children,
  errorContextGet,
  fallback,
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
        {errorContext && (
          <Portal>
            <Wrapper
              backgroundColor={THEME_COLOR_MORE.SURFACE}
              isAbsoluteFill
              isCenter
              s={THEME_SIZE.SMALL}
              zIndex>
              <Icon
                fontSize={THEME_SIZE_MORE.XLARGE}
                icon={errorContext.icon ?? 'sad'}
              />

              {errorContext.title && (
                <TranslatableText type={FONT_TYPE.HEADLINE}>{errorContext.title}</TranslatableText>
              )}

              {errorContext.description && (
                <TranslatableText>{errorContext.description}</TranslatableText>
              )}

              <Button
                icon="refresh"
                onPress={() => {
                  errorContextSet(undefined);
                  handleRefresh();
                  onRefresh && void onRefresh();
                }}>
                {t('core:tryAgain')}
              </Button>
            </Wrapper>
          </Portal>
        )}

        <Suspense
          fallback={
            fallback ?? (
              <Wrapper
                flex
                isCenter>
                <Loading />
              </Wrapper>
            )
          }>
          {children}
        </Suspense>
      </Wrapper>
    </asyncBoundaryContext.Provider>
  );
};
