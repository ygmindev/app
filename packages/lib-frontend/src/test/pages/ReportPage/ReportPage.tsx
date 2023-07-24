import { Carousel } from '#lib-frontend/animation/components/Carousel/Carousel';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { type ReportPagePropsModel } from '#lib-frontend/test/pages/ReportPage/ReportPage.models';

export const ReportPage: SFCModel<ReportPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      p
      s
      style={styles}
      testID={testID}>
      <Carousel
        slides={[
          {
            element: (
              <Image
                border
                grow
                round
                src="/.dist/test/snapshots/sign-in-works/snapshot-1.png"
              />
            ),
            id: '1',
          },
          {
            element: (
              <Image
                border
                grow
                round
                src="/.dist/test/snapshots/sign-in-works/snapshot-2.png"
              />
            ),
            id: '2',
          },
        ]}
      />
    </Wrapper>
  );
};
