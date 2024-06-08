import { ProductTile } from '@lib/frontend/commerce/components/ProductTile/ProductTile';
import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const ProductsPage: LFCModel<ProductsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  // images: [
  //   await get<unknown, { message: string }>({
  //     url: 'https://dog.ceo/api/breeds/image/random',
  //   }).then((item) => item?.message ?? ''),
  // ],

  const { data } = useQuery<void, Array<ProductModel>>('products', async () =>
    getEntityResourceFixture({
      count: 10,
      data: (i) => ({
        [PRICING_RESOURCE_NAME]: [{ _id: uid(), created: new Date(), price: 10.99 }],
        name: `Item ${i}`,
      }),
    }),
  );

  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <WrappedList
        data={data ?? []}
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
