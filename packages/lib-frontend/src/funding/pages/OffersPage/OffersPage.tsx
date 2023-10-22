import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { type OffersPagePropsModel } from '#lib-frontend/funding/pages/OffersPage/OffersPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

const SIZE = 80;

const FUNDINGS = [
  {
    icon: 'bank',
    id: 'gs',
    logo: 'https://design.gs.com/downloads/Goldman_Sachs_Blue_Box.png',
    products: ['Bond', 'Loan', 'Revolving Credit'],
    rate: '4.250% - 5.250%',
    tags: ['US', 'Bulge Bracket'],
    title: 'Goldman Sachs',
  },

  {
    icon: 'bank',
    id: 'jpm',
    logo: 'https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg',
    products: ['Bond', 'Loan', 'Revolving Credit'],
    rate: '4.750% - 5.2500%',
    tags: ['US', 'Bulge Bracket'],
    title: 'J.P. Morgan',
  },

  {
    icon: 'bank',
    id: 'woori',
    logo: 'https://companieslogo.com/img/orig/WF-f6e6a56c.png?t=1660034230',
    products: ['Loan', 'Revolving Credit'],
    rate: '4.500% - 5.500%',
    tags: ['Republic of Korea', 'Bulge Bracket'],
    title: 'Woori Bank',
  },

  {
    icon: 'bank',
    id: 'nycb',
    logo: 'https://media.licdn.com/dms/image/C560BAQGrW1LPgE5zBg/company-logo_200_200/0/1558629289814?e=2147483647&v=beta&t=-4DIGHg9bph1EiAHJ7qt_qslVOkPriV2OkxDFk_vNmk',
    products: ['Loan', 'Revolving Credit'],
    rate: '3.500% - 4.750%',
    tags: ['US', 'Regional Bank'],
    title: 'New York Community Bank',
  },

  {
    icon: 'bank',
    id: 'bofa',
    logo: 'https://freelogopng.com/images/all_img/1658985797bank-of-america-logo.png',
    products: ['Loan', 'Revolving Credit'],
    rate: '3.750% - 5.000%',
    tags: ['US', 'Bulge Bracket'],
    title: 'Bank of America',
  },

  {
    icon: 'bank',
    id: 'ms',
    logo: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/334271731_562433455663663_7385988108907043037_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=kMG1bsjJdEsAX-xDazi&_nc_ht=scontent-lga3-2.xx&oh=00_AfCW5CxDXmNIBYCl6dPWkWSwPe82Vy43zxac9S25vO0eUw&oe=64DDCED2',
    products: ['Bond', 'Loan', 'Revolving Credit'],
    rate: '3.500% - 4.750%',
    tags: ['US', 'Bulge Bracket'],
    title: 'Morgan Stanley',
  },
];

export const OffersPage: SFCModel<OffersPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      s
      style={styles}
      testID={testID}>
      <Text type={FONT_TYPE.HEADLINE}>Offers</Text>

      <Wrapper
        isVerticalScrollable
        s>
        {FUNDINGS.map(({ icon, id, logo, products, rate, tags, title }) => (
          <Tile
            description={
              <Wrapper s="s">
                <Text
                  color="primary"
                  isBold>
                  {rate}
                </Text>

                <Wrapper isRowAlign>
                  {products.map((product) => (
                    <Chip
                      color="secondary"
                      key={product}>
                      {product}
                    </Chip>
                  ))}
                </Wrapper>
              </Wrapper>
            }
            icon={icon as IconPropsModel['icon']}
            image={logo}
            key={id}
            onPress={() => null}
            title={title}>
            <Wrapper isRowAlign>{tags?.map((tag) => <Chip key={tag}>{tag}</Chip>)}</Wrapper>
          </Tile>
        ))}
      </Wrapper>
    </MainLayout>
  );
};
