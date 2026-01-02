import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ButtonGroup } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup';
import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  type WorkflowButtonsPropsModel,
  type WorkflowButtonsRefModel,
} from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons.models';
import { useJobResource } from '@lib/frontend/orchestrator/hooks/useJobResource/useJobResource';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { JOB_STATUS } from '@lib/model/orchestrator/Job/Job.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { useImperativeHandle } from 'react';

export const WorkflowButtons: RLFCModel<WorkflowButtonsRefModel, WorkflowButtonsPropsModel> = ({
  onWorkflowStart,
  ref,
  status,
  workflow,
  ...props
}) => {
  if (!workflow) {
    throw new NotFoundError('workflow');
  }

  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([ORCHESTRATOR]);
  const { create, remove } = useJobResource();

  useImperativeHandle(ref, () => ({
    start: async ({ context, params } = {}) => handleStart({ context, params }),
    stop: async (jobId) => {
      await remove({ id: [jobId] });
    },
  }));

  const handleStart = async ({
    context,
    params,
  }: { context?: ExecutionContextModel; params?: unknown } = {}): Promise<void> => {
    const { result } = await create({
      form: {
        context: { ...workflow.context, ...context },
        params: { ...(workflow.params ?? {}), ...(params ?? {}) },
        workflowName: workflow.name,
      },
    });
    if (result) {
      onWorkflowStart?.(result);
    } else {
      throw new NotFoundError('workflow result');
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      isAlign
      isRow
      s>
      <ButtonGroup type={BUTTON_TYPE.INVISIBLE}>
        <Button
          elementState={
            status === JOB_STATUS.RUNNING || status === JOB_STATUS.STARTED
              ? ELEMENT_STATE.DISABLED
              : undefined
          }
          icon="play"
          onPress={handleStart}
          tooltip={t('orchestrator:start', { value: workflow.name })}
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
