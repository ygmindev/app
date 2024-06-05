import { Product } from '@lib/frontend/commerce/components/Product/Product';
import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import range from 'lodash/range';

export const ProductsPage: LFCModel<ProductsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  const { get } = useHttp();
  const { data } = useQuery<void, Array<ProductItemModel & WithIdModel>>('products', async () =>
    mapParallel(
      range(0, 12).map((i) => async () => ({
        id: `${i}`,
        imageSrc: await get<unknown, { message: string }>({
          url: 'https://dog.ceo/api/breeds/image/random',
        }).then((item) => item?.message ?? ''),
        name: `Item ${i}`,
        price: 10,
        pricingId: uid(),
        productId: uid(),
      })),
    ),
  );
  console.warn(data);
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <WrappedList
        data={data ?? []}
        element={(item) => (
          <Product
            images={filterNil([item.imageSrc])}
            key={item.id}
            title={item.name}
          />
        )}
        flex
        isVerticalScrollable
      />
    </Wrapper>
  );
};
