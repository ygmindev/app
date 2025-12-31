import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { AccordionGroup } from '@lib/frontend/animation/components/AccordionGroup/AccordionGroup';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { FORM_SUBMIT_TYPE } from '@lib/frontend/data/components/FormContainer/FormContainer.constants';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { WorkflowButtons } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { type WorkflowPagePropsModel } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export const WorkflowPage: LFCModel<WorkflowPagePropsModel> = ({ pageProps, ...props }) => {
  console.warn(pageProps);

  const { workflow } = pageProps ?? {};
  const { t } = useTranslation([ORCHESTRATOR]);
  const { wrapperProps } = useLayoutStyles({ props });
  // <WorkflowLog
  //                 id={data.result._id}
  //                 onStatusChange={onStatusChange}
  //                 status={status}
  //                 workflow={workflow}
  //               />
  return workflow ? (
    <MainLayout
      {...wrapperProps}
      s>
      <WorkflowButtons
        // onStatusChange={onStatusChange}
        // status={status}
        workflow={workflow}
      />

      <AccordionGroup
        accordions={[
          {
            element: (
              <Accordion
                title={t('orchestrator:parameters')}
                value={workflow.prompts ? undefined : ELEMENT_STATE.DISABLED}>
                {workflow.prompts && (
                  <FormContainer
                    fields={workflow.prompts?.map((v) => {
                      const element = (() => {
                        const defaultValue = v.defaultValue?.[0];
                        switch (v.type) {
                          case PROMPT_TYPE.CONFIRM:
                            return (
                              <CheckboxInput
                                defaultValue={Boolean(defaultValue)}
                                label={v.key}
                              />
                            );
                          case PROMPT_TYPE.LIST:
                            return (
                              <SelectInput
                                defaultValue={defaultValue}
                                label={v.key}
                                options={v.options ?? []}
                              />
                            );
                          case PROMPT_TYPE.MULTIPLE:
                            return (
                              <SelectInput
                                defaultValue={v.defaultValue}
                                isMultiple
                                label={v.key}
                                options={v.options ?? []}
                              />
                            );
                          default:
                            return (
                              <TextInput
                                defaultValue={defaultValue}
                                label={v.key}
                              />
                            );
                        }
                      })();
                      return { element, id: v.key };
                    })}
                    submitType={FORM_SUBMIT_TYPE.NONE}
                  />
                )}
              </Accordion>
            ),
            id: 'prompts',
          },

          {
            element: (
              <Accordion
                title={t('orchestrator:logs')}
                value={workflow.prompts ? undefined : ELEMENT_STATE.DISABLED}>
                {workflow.prompts && (
                  <FormContainer
                    fields={workflow.prompts?.map((v) => {
                      const element = (() => {
                        const defaultValue = v.defaultValue?.[0];
                        switch (v.type) {
                          case PROMPT_TYPE.CONFIRM:
                            return (
                              <CheckboxInput
                                defaultValue={Boolean(defaultValue)}
                                label={v.key}
                              />
                            );
                          case PROMPT_TYPE.LIST:
                            return (
                              <SelectInput
                                defaultValue={defaultValue}
                                label={v.key}
                                options={v.options ?? []}
                              />
                            );
                          case PROMPT_TYPE.MULTIPLE:
                            return (
                              <SelectInput
                                defaultValue={v.defaultValue}
                                isMultiple
                                label={v.key}
                                options={v.options ?? []}
                              />
                            );
                          default:
                            return (
                              <TextInput
                                defaultValue={defaultValue}
                                label={v.key}
                              />
                            );
                        }
                      })();
                      return { element, id: v.key };
                    })}
                    submitType={FORM_SUBMIT_TYPE.NONE}
                  />
                )}
              </Accordion>
            ),
            id: 'logs',
          },
        ]}
      />
    </MainLayout>
  ) : (
    <Wrapper />
  );
};
