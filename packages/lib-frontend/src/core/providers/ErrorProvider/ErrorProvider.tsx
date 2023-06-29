import noop from 'lodash/noop';
import { createContext, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { ERROR_MODE } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import {
  type ErrorContextModel,
  type ErrorProviderContextModel,
  type ErrorProviderPropsModel,
} from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const ErrorContext = createContext<ErrorProviderContextModel>({
  errorContextSet: noop,
  mode: ERROR_MODE.NOTIFICATION,
});

export const ErrorProvider: SFCModel<ErrorProviderPropsModel> = ({
  children,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const [errorContext, errorContextSet] = useState<ErrorContextModel | undefined>();
  return (
    <ErrorContext.Provider
      value={{
        errorContextGet: value?.errorContextGet,
        errorContextSet,
        mode: value?.mode || ERROR_MODE.NOTIFICATION,
      }}>
      {errorContext ? (
        <Wrapper
          grow
          isCenter
          spacing={THEME_SIZE.SMALL}
          style={styles}
          testID={testID}>
          <Icon
            fontSize={THEME_SIZE_MORE.XLARGE}
            icon={errorContext.icon || 'sad'}
          />

          {errorContext.title && <Text type={FONT_TYPE.HEADLINE}>{errorContext.title}</Text>}

          {errorContext.message && <Text>{errorContext.message || t('core:errorGeneric')}</Text>}

          <Button
            icon="refresh"
            onPress={() => errorContextSet(undefined)}>
            {t('core:tryAgain')}
          </Button>
        </Wrapper>
      ) : (
        children
      )}
    </ErrorContext.Provider>
  );
};
