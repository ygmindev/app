import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ButtonGroup } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type WorkflowButtonsPropsModel } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons.models';
import { WorkflowLog } from '@lib/frontend/orchestrator/components/WorkflowLog/WorkflowLog';
import { useJobResource } from '@lib/frontend/orchestrator/hooks/useJobResource/useJobResource';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';

export const WorkflowButtons: LFCModel<WorkflowButtonsPropsModel> = ({ workflow, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([ORCHESTRATOR]);
  const { create, remove } = useJobResource();
  return (
    <ButtonGroup
      {...wrapperProps}
      type={BUTTON_TYPE.INVISIBLE}>
      <ModalButton
        color={THEME_COLOR.SUCCESS}
        element={({ data }) =>
          data?.result?._id ? (
            <WorkflowLog
              id={data.result._id}
              workflow={workflow}
            />
          ) : (
            <></>
          )
        }
        icon="play"
        isFullSize
        onPress={async () =>
          create({
            form: {
              context: workflow.context,
              params: workflow.params,
              workflow: workflow._id,
            },
          })
        }
        tooltip={t('orchestrator:start', { value: 'orchestrator:workflow' })}
      />

      <Button
        color={THEME_COLOR.ERROR}
        icon="stop"
        onPress={async () => workflow._id && remove({ id: [workflow._id] })}
        tooltip={t('orchestrator:stop', { value: 'orchestrator:workflow' })}
      />
    </ButtonGroup>
  );
};
