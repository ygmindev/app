import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
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
      flex>
      <WrappedList
        data={products}
        element={(product) => (
          <Wrapper
            border
            height={randomInt(200, 300)}
            isWrap
            key={product.id}
            mBottom
            mRight
            p
            round
            width={180}>
            <Text fontStyle={FONT_STYLE.TITLE}>{product.title}</Text>
          </Wrapper>
        )}
        flex
        isVerticalScrollable
      />

      {/* <Wrapper
        isRow
        isVerticalScrollable
        isWrap
        justify={FLEX_JUSTIFY.CENTER}>
        {products.map((product) => (
          <Wrapper
            border
            height={randomInt(200, 300)}
            isWrap
            key={product.id}
            mBottom
            mRight
            p
            round
            width={180}>
            <Text fontStyle={FONT_STYLE.TITLE}>{product.title}</Text>
          </Wrapper>
        ))}
      </Wrapper> */}
    </Wrapper>
  );
};
