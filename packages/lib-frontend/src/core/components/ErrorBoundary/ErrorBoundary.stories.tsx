import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import { useEffect } from 'react';

export const _ComponentThrowingError: FCModel = () => {
  const { handleError } = useErrorBoundary();
  useEffect(() => {
    handleError(new Error());
  }, []);
  return null;
};

const { Story, meta } = withStory<ErrorBoundaryPropsModel>({
  defaultProps: { children: <WrapperFixture /> },
  target: ErrorBoundary,
  variants: [{ props: { children: <_ComponentThrowingError /> } }],
});

export { meta as default, Story };
