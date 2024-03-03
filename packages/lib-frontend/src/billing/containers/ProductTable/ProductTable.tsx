import { type ProductTablePropsModel } from '@lib/frontend/billing/containers/ProductTable/ProductTable.models';
import { useProductResource } from '@lib/frontend/billing/hooks/useProductResource/useProductResource';
import { PRODUCT_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Product/Product.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/billing/resources/Product/Product.models';

export const ProductTable: LFCModel<ProductTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useProductResource();
  return (
    <ResourceTable<ProductModel, ProductFormModel>
      {...wrapperProps}
      {...PRODUCT_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
