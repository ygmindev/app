import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useTaskResource } from '@lib/frontend/orchestrator/hooks/useTaskResource/useTaskResource';
import { type OrchestratorPagePropsModel } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const OrchestratorPage: LFCModel<OrchestratorPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useTaskResource();
  return (
    <DataBoundary
      id="tasks"
      query={getMany}
      {...wrapperProps}>
      {(x) => {
        return (
          <Wrapper>
            <Text>{JSON.stringify(x)}</Text>
          </Wrapper>
        );
      }}
    </DataBoundary>
  );
};
