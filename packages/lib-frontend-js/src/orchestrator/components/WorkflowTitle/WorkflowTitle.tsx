import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { type FCModel } from '@lib/frontend/core/core.models';
import { WorkflowButtons } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons';
import { type WorkflowTitlePropsModel } from '@lib/frontend/orchestrator/components/WorkflowTitle/WorkflowTitle.models';
import { ORCHESTRATOR, WORKFLOW } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { JOB_STATUS } from '@lib/model/orchestrator/Job/Job.constants';
import { APP } from '@lib/shared/app/app.constants';
import { useState } from 'react';

export const WorkflowTitle: FCModel<WorkflowTitlePropsModel> = ({ workflow, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [status, statusSet] = useState<JOB_STATUS>(JOB_STATUS.UNKNOWN);
  const { push } = useRouter();
  return (
    <PressableTitle
      {...wrapperProps}
      flex
      isTransparent
      onPress={() => push({ pathname: `/${APP}/${ORCHESTRATOR}/${WORKFLOW}` })}
      title={
        <WorkflowButtons
          onStatusChange={statusSet}
          status={status}
          workflow={workflow}
        />
      }
    />
  );
};
