import { ProductTile } from '@lib/frontend/commerce/components/ProductTile/ProductTile';
import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PRODUCT_FIXTURES } from '@lib/shared/commerce/resources/Product/Product.fixtures';

export const ProductsPage: LFCModel<ProductsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <WrappedList
        data={PRODUCT_FIXTURES}
        element={(product) => (
          <ProductTile
            key={product._id}
            product={product}
          />
        )}
        flex
        isVerticalScrollable
      />
    </Wrapper>
  );
};
