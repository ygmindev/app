import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { useEffect } from 'react';

export const _ComponentThrowingError: FCModel = () => {
  const { handleError } = useErrorBoundary();
  useEffect(() => {
    handleError(new Error('error'));
  }, []);
  return null;
};

export const props: LibraryPropsModel<ErrorBoundaryPropsModel> = {
  Component: ErrorBoundary,
  defaultProps: { children: <_ComponentThrowingError /> },
  variants: [
    {
      props: {
        Fallback: ({ error }) => <WrapperFixture>{error?.message}</WrapperFixture>,
      },
    },
  ],
};
