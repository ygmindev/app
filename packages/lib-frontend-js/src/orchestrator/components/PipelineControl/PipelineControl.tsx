import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type PipelineControlPropsModel } from '@lib/frontend/orchestrator/components/PipelineControl/PipelineControl.models';
import { WorkflowControl } from '@lib/frontend/orchestrator/components/WorkflowControl/WorkflowControl';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const PipelineControl: FCModel<PipelineControlPropsModel> = ({ pipeline, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Accordion
      {...wrapperProps}
      defaultValue={ELEMENT_STATE.ACTIVE}
      title={pipeline.name}>
      {pipeline.workflows?.map((v) => (
        <WorkflowControl
          key={v._id}
          workflow={v}
        />
      ))}
    </Accordion>
  );
};
