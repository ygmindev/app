import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useSnapshotResource } from '#lib-frontend/test/hooks/useSnapshotResource/useSnapshotResource';
import { type ReportPagePropsModel } from '#lib-frontend/test/pages/ReportPage/ReportPage.models';

export const ReportPage: SFCModel<ReportPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { getMany } = useSnapshotResource();
  const { data } = useQuery('snapshots', async () => getMany({ filter: {} }));
  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <RouteGroup
        label="tests"
        routes={data?.result?.map(({ name }) => ({
          id: name,
          label: name,
        }))}
      />
    </MainLayout>
  );
};
