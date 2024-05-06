import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import range from 'lodash/range';

const products = range(0, 24).map((i) => ({
  id: `${i}`,
  title: `Title ${i}`,
}));

export const ProductsPage: LFCModel<ProductsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <Text>ProductsPage</Text>

      <Wrapper
        isRow
        isWrap>
        {products.map((product) => (
          <Wrapper
            border
            isWrap
            key={product.id}
            mBottom
            mRight
            p
            round>
            <Text fontStyle={FONT_STYLE.TITLE}>{product.title}</Text>
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
