import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { AccordionGroup } from '@lib/frontend/animation/components/AccordionGroup/AccordionGroup';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { JobLogs } from '@lib/frontend/orchestrator/components/JobLogs/JobLogs';
import { WorkflowButtons } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons';
import { type WorkflowButtonsRefModel } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons.models';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { type WorkflowPagePropsModel } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { LOG_MESSAGE_TYPE } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { JOB_STATUS } from '@lib/model/orchestrator/Job/Job.constants';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { useRef, useState } from 'react';

export const WorkflowPage: LFCModel<WorkflowPagePropsModel> = ({ ...props }) => {
  const { location } = useRouter<WorkflowPagePropsModel>();
  const { workflow } = location.params ?? {};
  const { t } = useTranslation([ORCHESTRATOR]);
  const [status, statusSet] = useState<JOB_STATUS>(JOB_STATUS.UNKNOWN);
  const [jobId, jobIdSet] = useState<string>();
  const [accordion, accordionSet] = useState<string>('configuration');
  const buttonRef = useRef<WorkflowButtonsRefModel>(null);

  const { wrapperProps } = useLayoutStyles({ props });

  const handleJobStart = async (job: Partial<JobModel>): Promise<void> => {
    statusSet(JOB_STATUS.STARTED);
    jobIdSet(job._id);
    accordionSet('logs');
  };

  const handleSubmit = async (data?: unknown): Promise<void> => {
    await buttonRef.current?.start({ params: data });
  };

  return workflow ? (
    <MainLayout
      {...wrapperProps}
      s>
      <WorkflowButtons
        onWorkflowStart={handleJobStart}
        ref={buttonRef}
        status={status}
        workflow={workflow}
      />

      <AccordionGroup
        accordions={[
          {
            element: (
              <Accordion
                title={t('orchestrator:configuration')}
                value={workflow.prompts ? undefined : ELEMENT_STATE.DISABLED}>
                {workflow.prompts && (
                  <FormContainer
                    fields={workflow.prompts?.map((v) => {
                      const element = (() => {
                        const defaultValue = v.defaultValue?.[0];
                        let label = v.message ?? v.key;
                        v.isOptional && (label = `${label} (${t('core:optional')})`);
                        switch (v.type) {
                          case PROMPT_TYPE.CONFIRM:
                            return (
                              <CheckboxInput
                                defaultValue={Boolean(defaultValue)}
                                label={label}
                              />
                            );
                          case PROMPT_TYPE.LIST:
                            return (
                              <SelectInput
                                defaultValue={defaultValue}
                                label={label}
                                options={v.options ?? []}
                              />
                            );
                          case PROMPT_TYPE.MULTIPLE:
                            return (
                              <SelectInput
                                defaultValue={v.defaultValue}
                                isMultiple
                                label={label}
                                options={v.options ?? []}
                              />
                            );
                          default:
                            return (
                              <TextInput
                                defaultValue={defaultValue}
                                label={label}
                              />
                            );
                        }
                      })();
                      return { element, id: v.key };
                    })}
                    onSubmit={handleSubmit}
                    submitIcon="play"
                    submitLabel={t('orchestrator:start', { value: workflow.name })}
                  />
                )}
              </Accordion>
            ),
            id: 'configuration',
          },

          {
            element: (
              <Accordion
                title={t('orchestrator:logs')}
                value={workflow.prompts ? undefined : ELEMENT_STATE.DISABLED}>
                {jobId ? (
                  <JobLogs
                    jobId={jobId}
                    onData={(data, onClose) => {
                      if (
                        jobId === data.result?.process &&
                        [LOG_MESSAGE_TYPE.SUCCESS, LOG_MESSAGE_TYPE.FAIL].includes(
                          data.result?.type as LOG_MESSAGE_TYPE,
                        )
                      ) {
                        onClose();
                        switch (data.result.type) {
                          case LOG_MESSAGE_TYPE.SUCCESS: {
                            statusSet(JOB_STATUS.SUCCESS);
                            break;
                          }
                          case LOG_MESSAGE_TYPE.FAIL: {
                            statusSet(JOB_STATUS.FAIL);
                            break;
                          }
                        }
                      } else {
                        status !== JOB_STATUS.RUNNING && statusSet(JOB_STATUS.RUNNING);
                      }
                    }}
                    status={status}
                  />
                ) : (
                  <NotFoundPage />
                )}
              </Accordion>
            ),
            id: 'logs',
          },
        ]}
        onChange={accordionSet}
        value={accordion}
      />
    </MainLayout>
  ) : (
    <Wrapper />
  );
};
