import { ProductTile } from '@lib/frontend/commerce/components/ProductTile/ProductTile';
import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ConnectionBoundary } from '@lib/frontend/data/components/ConnectionBoundary/ConnectionBoundary';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { uid } from '@lib/shared/core/utils/uid/uid';
import range from 'lodash/range';

export const ProductsPage: LFCModel<ProductsPagePropsModel> = ({ pageProps, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getConnection } = useProductResource();
  return (
    <ConnectionBoundary
      {...wrapperProps}
      fallbackData={{
        result: {
          edges: range(5).map((i) => ({ cursor: `${i}`, node: { _id: uid() } })),
          pageInfo: { endCursor: '', hasNextPage: false, hasPreviousPage: false, startCursor: '' },
        },
      }}
      flex
      id="products"
      p
      query={getConnection}
      s>
      {({ data, elementState, reset }) => (
        <WrappedList
          data={data?.result?.edges.map(({ node }) => node)}
          element={(product) => (
            <ProductTile
              key={product._id}
              product={product}
            />
          )}
          flex
          isVerticalScrollable
        />
      )}
    </ConnectionBoundary>
  );
};
