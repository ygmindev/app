import { PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { useProductResource } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource';
import {
  type ProductPageParamsModle,
  type ProductPagePropsModel,
} from '@lib/frontend/commerce/pages/ProductPage/ProductPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ProductPage: LFCModel<ProductPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<ProductPageParamsModle>();
  const { get } = useProductResource();
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>{location.params?.id}</Text>

      <DataBoundary
        id={PRODUCT}
        params={{ filter: [{ field: '_id', value: location.params?.id }] }}
        query={get}>
        {({ data }) => (
          <Wrapper s>
            <Text>{data?.result?.name}</Text>

            <Text>{data?.result?.name}</Text>
          </Wrapper>
        )}
      </DataBoundary>
    </Wrapper>
  );
};
