import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type PipelineControlPropsModel } from '@lib/frontend/orchestrator/components/PipelineControl/PipelineControl.models';
import { WorkflowTitle } from '@lib/frontend/orchestrator/components/WorkflowTitle/WorkflowTitle';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const PipelineControl: FCModel<PipelineControlPropsModel> = ({ pipeline, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Tile
      {...wrapperProps}
      title={pipeline.name}>
      {pipeline.workflows?.map((v) => (
        <WorkflowTitle
          key={v._id}
          workflow={v}
        />
      ))}
    </Tile>
  );
};
