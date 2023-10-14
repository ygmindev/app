import noop from 'lodash/noop';
import { createContext, Suspense, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Loading } from '#lib-frontend/core/components/Loading/Loading';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ERROR_MODE } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.constants';
import {
  type AsyncBoundaryContextModel,
  type AsyncBoundaryPropsModel,
  type ErrorContextModel,
} from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useQueryContext } from '#lib-frontend/data/hooks/useQueryContext/useQueryContext';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const asyncBoundaryContext = createContext<AsyncBoundaryContextModel>({
  errorContextSet: noop,
  errorMode: ERROR_MODE.NOTIFICATION,
  handleRefresh: noop,
});

export const AsyncBoundary: LFCModel<AsyncBoundaryPropsModel> = ({
  children,
  errorContextGet,
  errorMode = ERROR_MODE.NOTIFICATION,
  fallback,
  onRefresh,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [errorContext, errorContextSet] = useState<ErrorContextModel | undefined>();

  const { reset } = useQueryContext();
  return (
    <asyncBoundaryContext.Provider
      value={{ errorContextGet, errorContextSet, errorMode, handleRefresh: reset }}>
      {errorContext ? (
        <Wrapper
          flex
          isCenter
          s={THEME_SIZE.SMALL}>
          <Icon
            fontSize={THEME_SIZE_MORE.XLARGE}
            icon={errorContext.icon ?? 'sad'}
          />

          {errorContext.title && <Text type={FONT_TYPE.HEADLINE}>{errorContext.title}</Text>}

          {errorContext.message && <Text>{errorContext.message ?? t('core:errorGeneric')}</Text>}

          <Button
            icon="refresh"
            onPress={() => {
              errorContextSet(undefined);
              reset();
              onRefresh && void onRefresh();
            }}>
            {t('core:tryAgain')}
          </Button>
        </Wrapper>
      ) : (
        <Suspense
          fallback={
            fallback ?? (
              <Wrapper
                {...wrapperProps}
                flex
                isCenter>
                <Loading />
              </Wrapper>
            )
          }>
          <Wrapper
            {...wrapperProps}
            flex>
            {children}
          </Wrapper>
        </Suspense>
      )}
    </asyncBoundaryContext.Provider>
  );
};
