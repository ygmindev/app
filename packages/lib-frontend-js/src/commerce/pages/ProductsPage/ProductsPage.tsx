import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ProductsPage: LFCModel<ProductsPagePropsModel> = ({ pageProps, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useProductResource();
  return (
    <></>
    // <ConnectionBoundary
    //   {...wrapperProps}
    //   fallbackData={{
    //     result: {
    //       edges: range(5).map((i) => ({ cursor: `${i}`, node: { _id: uid() } })),
    //       pageInfo: { endCursor: '', hasNextPage: false, hasPreviousPage: false, startCursor: '' },
    //     },
    //   }}
    //   flex
    //   id="products"
    //   p
    //   query={getMany}
    //   s>
    //   {({ data, elementState, reset }) => (
    //     <WrappedList
    //       data={data?.result?.edges.map(({ node }) => node)}
    //       element={(product) => (
    //         <ProductTile
    //           key={product._id}
    //           product={product}
    //         />
    //       )}
    //       flex
    //       isVerticalScrollable
    //     />
    //   )}
    // </ConnectionBoundary>
  );
};
