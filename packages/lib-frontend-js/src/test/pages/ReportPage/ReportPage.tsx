import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useSnapshotResource } from '@lib/frontend/test/hooks/useSnapshotResource/useSnapshotResource';
import { type ReportPagePropsModel } from '@lib/frontend/test/pages/ReportPage/ReportPage.models';

export const ReportPage: LFCModel<ReportPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useSnapshotResource();
  const { data } = useQuery('snapshots', async () => getMany({ filter: [] }));
  return (
    <MainLayout {...wrapperProps}>
      <RouteList
        routes={data?.result?.map(({ name }) => ({ pathname: name ?? '', title: name }))}
        title="tests"
      />
    </MainLayout>
  );
};
