import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type JobHistoryPropsModel } from '@lib/frontend/orchestrator/components/JobHistory/JobHistory.models';
import { useJobResource } from '@lib/frontend/orchestrator/hooks/useJobResource/useJobResource';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const JobHistory: LFCModel<JobHistoryPropsModel> = ({ workflow, ...props }) => {
  const { t } = useTranslation([ORCHESTRATOR]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useJobResource();
  return (
    <DataBoundary
      {...wrapperProps}
      id={`${workflow._id}-history`}
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
