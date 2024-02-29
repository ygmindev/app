import { type LFCModel } from '@lib/frontend/core/core.models';
import { PRODUCT_TABLE_PROPS } from '@lib/frontend/billing/containers/ProductTable/ProductTable.constants';
import { type ProductTablePropsModel } from '@lib/frontend/billing/containers/ProductTable/ProductTable.models';
import { useProductResource } from '@lib/frontend/billing/hooks/useProductResource/useProductResource';
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
      {...PRODUCT_TABLE_PROPS}
      implementation={implementation}
    />
  );
};
