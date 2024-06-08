import { type ProductItemFormPropsModel } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm.models';
import { ProductItemInput } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ProductItemForm: LFCModel<ProductItemFormPropsModel> = ({
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [items, itemsSet] = useStore('commerce.items');
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: <ProductItemInput onChange={itemsSet} />,
          id: 'items',
        },
      ]}
      initialValues={{ items }}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
    />
  );
};
