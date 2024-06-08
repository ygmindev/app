import { type ProductItemFormPropsModel } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { type TableRefModel } from '@lib/frontend/data/components/Table/Table.models';
import { TableInput } from '@lib/frontend/data/components/TableInput/TableInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { useRef } from 'react';

export const ProductItemForm: LFCModel<ProductItemFormPropsModel> = ({
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([COMMERCE]);
  const [items, itemsSet] = useStore('commerce.items');
  const tableRef = useRef<TableRefModel>(null);
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: (
            <TableInput<ProductItemModel>
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
                      field: ({ index, value }) => (
                        <NumberInput
                          defaultValue={1}
                          isNoClear
                          onChange={(v) => !v && tableRef.current?.remove?.(index)}
                          value={value as number}
                        />
                      ),
                      id: 'quantity',
                      label: t('commerce:quantity'),
                    },
                  ]}
                  ref={tableRef}
                />
              }
              onChange={itemsSet}
            />
          ),
          id: 'items',
        },
      ]}
      initialValues={{ items }}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
    />
  );
};
