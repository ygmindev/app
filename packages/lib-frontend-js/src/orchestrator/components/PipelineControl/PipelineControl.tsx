import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type PipelineControlPropsModel } from '@lib/frontend/orchestrator/components/PipelineControl/PipelineControl.models';
import { WorkflowControl } from '@lib/frontend/orchestrator/components/WorkflowControl/WorkflowControl';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const PipelineControl: FCModel<PipelineControlPropsModel> = ({ pipeline, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Tile
      {...wrapperProps}
      title={pipeline.name}>
      {pipeline.workflows?.map((v) => (
        <WorkflowControl
          key={v._id}
          workflow={v}
        />
      ))}
    </Tile>
  );
};
