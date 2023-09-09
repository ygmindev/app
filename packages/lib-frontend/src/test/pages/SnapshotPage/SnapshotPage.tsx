import { Carousel } from '#lib-frontend/animation/components/Carousel/Carousel';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useSnapshotResource } from '#lib-frontend/test/hooks/useSnapshotResource/useSnapshotResource';
import {
  type SnapshotPagearamsModel,
  type SnapshotPagePropsModel,
} from '#lib-frontend/test/pages/SnapshotPage/SnapshotPage.models';

export const SnapshotPage: SFCModel<SnapshotPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location } = useRouter<SnapshotPagearamsModel>();

  const { get } = useSnapshotResource();
  const name = location.params?._id;
  const { data } = useQuery('snapshot', async () =>
    name ? get({ filter: [{ field: 'name', value: name }] }) : undefined,
  );
  return (
    <Carousel
      p
      slides={data?.result?.images?.map((image) => ({
        _id: image,
        element: (
          <Image
            border
            grow
            round
            src={`/.dist/test/snapshots/${name}/${image}`}
          />
        ),
      }))}
      style={styles}
      testID={testID}
    />
  );
};
