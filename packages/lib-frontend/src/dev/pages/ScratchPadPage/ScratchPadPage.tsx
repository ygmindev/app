import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
// import { SpecificationDetail } from '@lib/frontend/openapi/components/SpecificationDetail/SpecificationDetail';
// import { SpecificationForm } from '@lib/frontend/openapi/containers/SpecificationForm/SpecificationForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

const products: Array<ProductModel> = [
  {
    Pricing: [{ _id: '111', created: new Date(), price: 111 }],
    _id: '111',
    created: new Date(),
    name: '111',
  },

  {
    Pricing: [{ _id: '222', created: new Date(), price: 222 }],
    _id: '222',
    created: new Date(),
    name: '222',
  },
];

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p
      s>
      {products.map((product) => (
        <Tile
          key={product._id}
          title={product.name}></Tile>
      ))}
    </Wrapper>
  );
};
