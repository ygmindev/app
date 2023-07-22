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
        height={200}
        slides={[
          {
            element: (
              <Image
                isGrow
                src="/images/brands/visa.png"
              />
            ),
            id: '1',
          },
          {
            element: (
              <Image
                isGrow
                src="/images/brands/amex.png"
              />
            ),
            id: '2',
          },
        ]}
      />
    </Wrapper>
  );
};
