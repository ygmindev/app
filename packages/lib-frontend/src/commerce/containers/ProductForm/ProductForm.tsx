import { type ProductFormPropsModel } from '@lib/frontend/commerce/containers/ProductForm/ProductForm.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { TableInput } from '@lib/frontend/data/components/TableInput/TableInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';

export const ProductForm: LFCModel<ProductFormPropsModel> = ({ onSubmit, onSuccess, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([COMMERCE]);
  const [products, productsSet] = useStore('commerce.products');
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: (
            <TableInput
              element={
                <Table
                  columns={[
                    { id: 'name', label: t('core:name') },
                    {
                      formatter: ({ value }) => numberFormat(value as number, { currency: 'usd' }),
                      id: 'price',
                      label: t('commerce:price'),
                    },
                    {
                      field: ({ value }) => (
                        <NumberInput
                          defaultValue={1}
                          isNoClear
                          value={(value as number) ?? 1}
                        />
                      ),
                      id: 'quantity',
                      label: t('commerce:quantity'),
                    },
                  ]}
                />
              }
              onChange={productsSet}
            />
          ),
          id: 'products',
        },
      ]}
      initialValues={{ products }}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
    />
  );
};
