import { Image } from '#lib-frontend/core/components/Image/Image';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type OfficePagePropsModel } from '#lib-frontend/deleteme/pages/OfficePage/OfficePage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const OfficePage: SFCModel<OfficePagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const office = {
    address: '325 Hudson Street 4th Floor',
    city: 'New York',
    id: 'office1',
    img: '/images/deleteme/office1.webp',
    name: 'Soho West',
    state: 'NY',
    zip: 10013,
  };

  return (
    <Wrapper
      p
      s
      style={styles}
      testID={testID}>
      <Text type={FONT_TYPE.HEADLINE}>{office.name}</Text>

      <Text>{`${office.address}, ${office.city}, ${office.state} ${office.zip}`}</Text>

      <Wrapper
        grow
        s>
        <LineGroup title="Plans">
          <LineItem label="Basic - $1,500 / month" />

          <LineItem label="Business - $2,000 / month" />

          <LineItem label="All-inclusive - $5,000 / month" />
        </LineGroup>
      </Wrapper>

      <Wrapper
        border
        isOverflowHidden
        p
        round
        s="s">
        <Text type="title">Location</Text>

        <Image
          height={100}
          isAutoSize
          src="/images/deleteme/office1location.png"
        />
      </Wrapper>
    </Wrapper>
  );
};
