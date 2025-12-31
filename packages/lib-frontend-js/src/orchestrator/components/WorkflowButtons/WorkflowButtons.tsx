import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ButtonGroup } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup';
import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type WorkflowButtonsPropsModel } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons.models';
import { WorkflowPage } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage';
import { useJobResource } from '@lib/frontend/orchestrator/hooks/useJobResource/useJobResource';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { JOB_STATUS } from '@lib/model/orchestrator/Job/Job.constants';

export const WorkflowButtons: LFCModel<WorkflowButtonsPropsModel> = ({
  onStatusChange,
  status = JOB_STATUS.UNKNOWN,
  workflow,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([ORCHESTRATOR]);
  const { create, remove } = useJobResource();
  return (
    <Wrapper
      {...wrapperProps}
      isAlign
      isRow
      s>
      <ButtonGroup type={BUTTON_TYPE.INVISIBLE}>
        <ModalButton
          color={THEME_COLOR.SUCCESS}
          element={() => <WorkflowPage workflow={workflow} />}
          elementState={
            status === JOB_STATUS.RUNNING || status === JOB_STATUS.STARTED
              ? ELEMENT_STATE.DISABLED
              : undefined
          }
          icon="play"
          isFullSize
          title={workflow.name}
          tooltip={t('orchestrator:start', { value: 'orchestrator:workflow' })}
        />

        <Button
          color={THEME_COLOR.ERROR}
          elementState={
            status == JOB_STATUS.RUNNING || status === JOB_STATUS.STARTED
              ? undefined
              : ELEMENT_STATE.DISABLED
          }
          icon="stop"
          onPress={async () => workflow._id && remove({ id: [workflow._id] })}
          tooltip={t('orchestrator:stop', { value: 'orchestrator:workflow' })}
        />
      </ButtonGroup>

      <Text isBold>{workflow.name}</Text>
      <Chip>{t('orchestrator:workflow')}</Chip>

      <Chip
        color={
          status === JOB_STATUS.SUCCESS
            ? THEME_COLOR.SUCCESS
            : status === JOB_STATUS.FAIL
              ? THEME_COLOR.ERROR
              : status === JOB_STATUS.RUNNING
                ? THEME_COLOR.PRIMARY
                : status === JOB_STATUS.CANCELLED
                  ? THEME_COLOR.WARNING
                  : THEME_COLOR.NEUTRAL
        }
        icon={
          status === JOB_STATUS.SUCCESS
            ? 'checkCircle'
            : status === JOB_STATUS.FAIL
              ? 'timesCircle'
              : status === JOB_STATUS.RUNNING
                ? 'timer'
                : status === JOB_STATUS.CANCELLED
                  ? 'block'
                  : 'question'
        }>
        {`${t('orchestrator:status')}: ${status}`}
      </Chip>
    </Wrapper>
  );
};
