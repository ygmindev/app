import { range } from 'lodash';
import round from 'lodash/round';

import { Table } from '#lib-frontend/core/components/Table/Table';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type ComparablesPagePropsModel } from '#lib-frontend/issuer/pages/ComparablesPage/ComparablesPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

const random = (min: number, max: number, digits = 0): number => {
  return round(Math.random() * (max - min + 1) + min, digits);
};

export const ComparablesPage: SFCModel<ComparablesPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      s
      style={styles}
      testID={testID}>
      <Text type={FONT_TYPE.HEADLINE}>Comparables</Text>

      <Wrapper grow>
        <Table
          columns={[
            { id: 'issuer' },
            { id: 'issued' },
            { id: 'maturity' },
            { id: 'coupon' },
            { id: 'ratings' },
            { id: 'amount' },
            { id: 'price' },
            { id: 'yield' },
            { id: 'T +' },
            { id: 'G +' },
          ]}
          data={[
            ...range(0, 8).map(() => ({
              'G +': random(100, 500),
              'T +': random(100, 500),
              amount: `$${random(500, 3000).toLocaleString()}mm`,
              coupon: `${random(1, 10, 3)}%`,
              issued: `${random(1, 12)}/${random(1, 28)}/${random(2010, 2021)}`,
              issuer: 'Apple Inc',
              maturity: `${random(1, 12)}/${random(1, 28)}/${random(2025, 2040)}`,
              price: random(95, 100, 2),
              ratings: 'AAA/AA+',
              yield: `${random(1, 10, 3)}%`,
            })),

            ...range(0, 8).map(() => ({
              'G +': random(100, 500),
              'T +': random(100, 500),
              amount: `$${random(500, 3000).toLocaleString()}mm`,
              coupon: `${random(1, 10, 3)}%`,
              issued: `${random(1, 12)}/${random(1, 28)}/${random(2010, 2021)}`,
              issuer: 'Amazon.com Inc',
              maturity: `${random(1, 12)}/${random(1, 28)}/${random(2025, 2040)}`,
              price: random(95, 100, 2),
              ratings: 'A1/AA',
              yield: `${random(1, 10, 3)}%`,
            })),

            ...range(0, 8).map(() => ({
              'G +': random(100, 500),
              'T +': random(100, 500),
              amount: `$${random(500, 3000).toLocaleString()}mm`,
              coupon: `${random(1, 10, 3)}%`,
              issued: `${random(1, 12)}/${random(1, 28)}/${random(2010, 2021)}`,
              issuer: 'Microsoft Corp',
              maturity: `${random(1, 12)}/${random(1, 28)}/${random(2025, 2040)}`,
              price: random(95, 100, 2),
              ratings: 'AAA/AAA',
              yield: `${random(1, 10, 3)}%`,
            })),

            ...range(0, 8).map(() => ({
              'G +': random(100, 500),
              'T +': random(100, 500),
              amount: `$${random(500, 3000).toLocaleString()}mm`,
              coupon: `${random(1, 10, 3)}%`,
              issued: `${random(1, 12)}/${random(1, 28)}/${random(2010, 2021)}`,
              issuer: 'Walmart Inc',
              maturity: `${random(1, 12)}/${random(1, 28)}/${random(2025, 2040)}`,
              price: random(95, 100, 2),
              ratings: 'Aa2/AA',
              yield: `${random(1, 10, 3)}%`,
            })),
          ]}
        />
      </Wrapper>
    </Wrapper>
  );
};
