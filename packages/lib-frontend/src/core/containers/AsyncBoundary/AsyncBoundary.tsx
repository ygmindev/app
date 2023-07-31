import noop from 'lodash/noop';
import { createContext, Suspense, useState } from 'react';

import { ERROR_MODE } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.constants';
import {
  type AsyncBoundaryContextModel,
  type AsyncBoundaryPropsModel,
  type ErrorContextModel,
} from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useQueryContext } from '#lib-frontend/data/hooks/useQueryContext/useQueryContext';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const AsyncBoundaryContext = createContext<AsyncBoundaryContextModel>({
  errorContextSet: noop,
  errorMode: ERROR_MODE.NOTIFICATION,
  handleRefresh: noop,
});

export const AsyncBoundary: SFCModel<AsyncBoundaryPropsModel> = ({
  children,
  errorContextGet,
  errorMode = ERROR_MODE.NOTIFICATION,
  fallback,
  onRefresh,
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const [errorContext, errorContextSet] = useState<ErrorContextModel | undefined>();
  const { reset } = useQueryContext();

  return (
    <AsyncBoundaryContext.Provider
      value={{ errorContextGet, errorContextSet, errorMode, handleRefresh: reset }}>
      {errorContext ? (
        <Wrapper
          grow
          isCenter
          s={THEME_SIZE.SMALL}
          style={styles}
          testID={testID}>
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
        <Suspense fallback={fallback ?? null}>{children}</Suspense>
      )}
    </AsyncBoundaryContext.Provider>
  );
};
