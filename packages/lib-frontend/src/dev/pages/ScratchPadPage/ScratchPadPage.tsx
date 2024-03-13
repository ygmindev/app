import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ChatMessageModel } from '@lib/shared/chat/chat.models';
import { useState } from 'react';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [messages, messagesSet] = useState<Array<ChatMessageModel>>([]);
  const actions = useActions();
  const [items] = useStore('commerce.items');
  const { getMany } = useProductResource();
  return (
    <MainLayout {...wrapperProps}>
      {items?.map((item) => <Text key={item.pricingId}>{item.pricingId}</Text>)}

      <DataBoundary
        id="products"
        query={getMany}>
        {({ data }) => (
          <Wrapper s>
            {data?.result?.map((product) => (
              <Wrapper
                key={product._id}
                s>
                {product.Pricing?.map((pricing) => (
                  <Tile
                    key={pricing._id}
                    rightElement={() => (
                      <Button
                        icon="add"
                        onPress={() =>
                          actions?.commerce.itemsAdd({
                            name: product.name,
                            price: pricing.price,
                            pricingId: pricing._id,
                            productId: product._id ?? '',
                            quantity: 3,
                          })
                        }
                      />
                    )}
                    title={`${pricing.price}`}></Tile>
                ))}
              </Wrapper>
            ))}
          </Wrapper>
        )}
      </DataBoundary>
    </MainLayout>
  );
};
