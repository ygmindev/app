import { Button } from '@lib/frontend/core/components/Button/Button';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
// import { SpecificationDetail } from '@lib/frontend/openapi/components/SpecificationDetail/SpecificationDetail';
// import { SpecificationForm } from '@lib/frontend/openapi/containers/SpecificationForm/SpecificationForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ChatMessageModel } from '@lib/shared/chat/chat.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { useState } from 'react';

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
  const [messages, messagesSet] = useState<Array<ChatMessageModel>>([]);
  const actions = useActions();
  const [cart] = useStore('commerce.cart');
  return (
    <MainLayout {...wrapperProps}>
      {cart?.map((item) => <Text key={item.pricingId}>{item.pricingId}</Text>)}

      {products.map((product) => (
        <Tile
          key={product._id}
          rightElement={() => (
            <Button
              icon="add"
              onPress={() =>
                actions?.commerce.cartAdd({
                  pricingId: product._id,
                  productId: product._id,
                  quantity: 3,
                })
              }
            />
          )}
          title={product.name}></Tile>
      ))}
    </MainLayout>
  );
};
