import { _ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary';
import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';

export const ErrorBoundary: SFCModel<ErrorBoundaryPropsModel> = ({ Fallback, ...props }) => (
  <_ErrorBoundary
    Fallback={
      Fallback ||
      (({ error, handleReset }) => (
        <Wrapper
          grow
          isCenter>
          <Icon
            icon={ICON.exclamationCircle}
            size={THEME_SIZE.LARGE}
          />
        </Wrapper>
      ))
    }
    {...props}
  />
);
