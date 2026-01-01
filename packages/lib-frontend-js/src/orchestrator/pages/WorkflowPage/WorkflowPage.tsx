import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { AccordionGroup } from '@lib/frontend/animation/components/AccordionGroup/AccordionGroup';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { WorkflowButtons } from '@lib/frontend/orchestrator/components/WorkflowButtons/WorkflowButtons';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { type WorkflowPagePropsModel } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export const WorkflowPage: LFCModel<WorkflowPagePropsModel> = ({ ...props }) => {
  const { location } = useRouter<WorkflowPagePropsModel>();
  const { workflow } = location.params ?? {};
  const { t } = useTranslation([ORCHESTRATOR]);
  const { wrapperProps } = useLayoutStyles({ props });
  return workflow ? (
    <MainLayout
      {...wrapperProps}
      s>
      <WorkflowButtons workflow={workflow} />

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
                    submitColor={THEME_COLOR.SUCCESS}
                    submitIcon="play"
                    submitLabel={t('orchestrator:run')}
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
                <Wrapper>
                  <Text>logs</Text>
                </Wrapper>
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
