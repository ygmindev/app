import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '@lib/frontend/core/core.models';
import { WorkflowButtons } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons';
import { type WorkflowTitlePropsModel } from '@lib/frontend/orchestrator/components/WorkflowTitle/WorkflowTitle.models';
import { ORCHESTRATOR, WORKFLOW } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { APP } from '@lib/shared/app/app.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';

export const WorkflowTitle: FCModel<WorkflowTitlePropsModel> = ({ status, workflow, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { push } = useRouter();
  if (!workflow) throw new NotFoundError('workflow');
  return (
    <PressableTitle
      {...wrapperProps}
      flex
      isTransparent
      onPress={() =>
        push({
          params: { title: workflow.name, workflow },
          pathname: `/${APP}/${ORCHESTRATOR}/${WORKFLOW}/${workflow.name}`,
        })
      }
      title={
        <Wrapper
          isAlign
          isRow>
          <WorkflowButtons
            status={status}
            workflow={workflow}
          />

          <Text family={FONT_FAMILY.CODE}>{workflow.name}</Text>
        </Wrapper>
      }
    />
  );
};
