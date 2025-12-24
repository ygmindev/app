import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '@lib/frontend/core/core.models';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { WorkflowButtons } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons';
import { type WorkflowControlPropsModel } from '@lib/frontend/orchestrator/components/WorkflowControl/WorkflowControl.models';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { WORKFLOW_STEP_TYPE } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';

export const WorkflowControl: FCModel<WorkflowControlPropsModel> = ({ workflow, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([ORCHESTRATOR]);
  return (
    <Accordion
      {...wrapperProps}
      flex
      rightTooltip={`${t('orchestrator:workflow')} ${t('orchestrator:details')}`}
      title={
        <Wrapper
          isAlign
          isRow>
          <WorkflowButtons workflow={workflow} />

          <Text isBold>{workflow.name}</Text>
          <Chip>{t('orchestrator:workflow')}</Chip>
        </Wrapper>
      }>
      <Wrapper s>
        {(workflow.context || !!workflow.params) && (
          <Wrapper isRow>
            {workflow.context && (
              <Wrapper
                isRow
                s>
                <Chip>{t('orchestrator:context')}</Chip>
                <Text>{stringify(workflow.context)}</Text>
              </Wrapper>
            )}

            {workflow.params ? (
              <Wrapper
                isRow
                s>
                <Chip>{t('orchestrator:params')}</Chip>
                <Text>{stringify(workflow.params)}</Text>
              </Wrapper>
            ) : null}
          </Wrapper>
        )}

        <Table
          columns={[
            {
              defaultValue: WORKFLOW_STEP_TYPE.TASK,
              id: 'type',
              renderer: ({ value }) => (
                <Chip
                  alignSelf={FLEX_ALIGN.START}
                  color={
                    value === WORKFLOW_STEP_TYPE.WORKFLOW
                      ? THEME_COLOR.PRIMARY
                      : THEME_COLOR.SECONDARY
                  }>
                  {value === WORKFLOW_STEP_TYPE.WORKFLOW
                    ? t('orchestrator:workflow')
                    : value === WORKFLOW_STEP_TYPE.TASK
                      ? t('orchestrator:task')
                      : ''}
                </Chip>
              ),
            },
            { id: 'name' },
            {
              id: 'params',
              renderer: ({ value }) => <Text fontSize={THEME_SIZE.SMALL}>{stringify(value)}</Text>,
              width: 300,
            },
            {
              id: 'context',
              renderer: ({ value }) => <Text fontSize={THEME_SIZE.SMALL}>{stringify(value)}</Text>,
              width: 300,
            },
          ]}
          data={workflow.steps}
          idField="name"
          rowHeight={100}
        />
      </Wrapper>
    </Accordion>
  );
};
