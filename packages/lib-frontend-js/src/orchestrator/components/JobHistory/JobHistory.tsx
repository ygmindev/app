import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type JobHistoryPropsModel } from '@lib/frontend/orchestrator/components/JobHistory/JobHistory.models';
import { useJobResource } from '@lib/frontend/orchestrator/hooks/useJobResource/useJobResource';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { JOB_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Job/Job.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';

export const JobHistory: LFCModel<JobHistoryPropsModel> = ({ status, workflow, ...props }) => {
  const { t } = useTranslation([ORCHESTRATOR]);
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useJobResource();

  if (!workflow) throw new NotFoundError('workflow');

  return (
    <ResourceTable
      {...wrapperProps}
      {...JOB_RESOURCE_PARAMS}
      defaultFilters={{ workflowName: [{ field: 'workflowName', value: workflow.name }] }}
      height={theme.layout.height[THEME_SIZE.SMALL]}
      implementation={implementation}
      isCreatable={false}
    />
  );
};
