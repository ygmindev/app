import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type JobHistoryPropsModel } from '@lib/frontend/orchestrator/components/JobHistory/JobHistory.models';
import { useJobResource } from '@lib/frontend/orchestrator/hooks/useJobResource/useJobResource';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';

export const JobHistory: LFCModel<JobHistoryPropsModel> = ({ status, workflow, ...props }) => {
  const { t } = useTranslation([ORCHESTRATOR]);
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useJobResource();

  if (!workflow) throw new NotFoundError('workflow');

  return (
    <DataBoundary
      {...wrapperProps}
      height={theme.layout.height[THEME_SIZE.SMALL]}
      id={`${workflow._id}-history`}
      params={{ filter: [{ field: 'workflowName', value: workflow.name }], options: { limit: 10 } }}
      query={getMany}>
      {({ data }) => (
        <Table
          columns={[]}
          data={data?.result?.items}
          idField="_id"
        />
      )}
    </DataBoundary>
  );
};
