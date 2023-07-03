import { useState } from 'react';

import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type MeasureModel, type SFCModel } from '#lib-frontend/core/core.models';
import { type HomePagePropsModel } from '#lib-frontend/deleteme/pages/HomePage/HomePage.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { BORDER_DIRECTION } from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const HomePage: SFCModel<HomePagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, measureSet] = useState<MeasureModel>();
  const { push } = useRouter();

  const offices = [
    {
      address: '325 Hudson Street 4th Floor',
      city: 'New York',
      id: 'office1',
      img: '/images/deleteme/office1.webp',
      name: 'Soho West',
      state: 'NY',
      zip: 10013,
    },

    {
      address: '41 E 11th Street 11th Floor',
      city: 'New York',
      id: 'office2',
      img: '/images/deleteme/office2.webp',
      name: 'University Place',
      state: 'NY',
      zip: 10003,
    },
  ];

  return (
    <Wrapper
      grow
      p
      s
      shrink
      style={styles}
      testID={testID}>
      <Text type={FONT_TYPE.HEADLINE}>Workspaces</Text>

      <Wrapper
        grow
        isVerticalScrollable
        s
        shrink>
        {offices.map((office) => (
          <Wrapper
            border
            height={300}
            isFullWidth
            isOverflowHidden
            key={office.id}
            onMeasure={measureSet}
            onPress={() => push({ pathname: `office/${office.id}` })}
            round>
            <Wrapper
              border={BORDER_DIRECTION.BOTTOM}
              height={190}
              isOverflowHidden>
              <Image
                isAutoSize
                src={office.img}
                width={measure?.width}
              />
            </Wrapper>

            <Wrapper
              isRowAlign
              p>
              <Wrapper
                grow
                s={THEME_SIZE.SMALL}>
                <Text type={FONT_TYPE.TITLE}>{office.name}</Text>

                <Text>{office.address}</Text>

                <Text>{`${office.city}, ${office.state} ${office.zip}`}</Text>
              </Wrapper>

              <Icon icon="chevronRight" />
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
