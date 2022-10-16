import { Button } from '@lib/frontend/core/components/Button/Button';
import { _ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary';
import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { CORE } from '@lib/shared/core/core.constants';

export const ErrorBoundary: FCModel<ErrorBoundaryPropsModel> = ({
  Fallback,
  children,
  icon,
  message,
  onError,
}) => {
  const { t } = useTranslation([CORE]);
  return (
    <_ErrorBoundary
      Fallback={
        Fallback ||
        (({ handleReset }) => (
          <Wrapper
            grow
            isCenter
            spacing>
            <IconText icon={ICON.sad || icon}>
              {message || t('core:messages.errorGeneric')}
            </IconText>

            <Button
              icon={ICON.refresh}
              onPress={handleReset}>
              {t('core:labels.retry')}
            </Button>
          </Wrapper>
        ))
      }
      onError={onError}>
      {children}
    </_ErrorBoundary>
  );
};
