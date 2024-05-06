import { Carousel } from '@lib/frontend/animation/components/Carousel/Carousel';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useSnapshotResource } from '@lib/frontend/test/hooks/useSnapshotResource/useSnapshotResource';
import {
  type SnapshotPagearamsModel,
  type SnapshotPagePropsModel,
} from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage.models';

export const SnapshotPage: SFCModel<SnapshotPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location } = useRouter<SnapshotPagearamsModel>();

  const { get } = useSnapshotResource();
  const snapshotid = location.params?.snapshotid;
  const { data } = useQuery('snapshot', async () =>
    snapshotid ? get({ filter: [{ field: 'name', value: snapshotid }] }) : undefined,
  );
  return (
    <Carousel
      p
      slides={data?.result?.images?.map((image) => ({
        element: (
          <Image
            border
            grow
            round
            src={`/_dist/test/snapshots/${snapshotid}/${image}`}
          />
        ),
        id: image,
      }))}
      style={styles}
      testID={testID}
    />
  );
};
