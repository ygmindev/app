import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { PipelineControl } from '@lib/frontend/orchestrator/components/PipelineControl/PipelineControl';
import { usePipelineResource } from '@lib/frontend/orchestrator/hooks/usePipelineResource/usePipelineResource';
import { type OrchestratorPagePropsModel } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const OrchestratorPage: LFCModel<OrchestratorPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = usePipelineResource();
  return (
    <DataBoundary
      {...wrapperProps}
      id="pipelines"
      query={getMany}>
      {(result) => (
        <Wrapper s>
          {result?.data?.result?.items?.map((v) => (
            <PipelineControl
              key={v._id}
              pipeline={v}
            />
          ))}
        </Wrapper>
      )}
    </DataBoundary>
  );
};
