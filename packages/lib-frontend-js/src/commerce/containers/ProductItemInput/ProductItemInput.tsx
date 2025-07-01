import { PriceTile } from '@lib/frontend/commerce/components/PriceTile/PriceTile';
import {
  type ProductItemInputPropsModel,
  type ProductItemInputRefModel,
} from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { type TableRefModel } from '@lib/frontend/data/components/Table/Table.models';
import { TableInput } from '@lib/frontend/data/components/TableInput/TableInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { useMemo, useRef } from 'react';

export const ProductItemInput: RLFCModel<ProductItemInputRefModel, ProductItemInputPropsModel> = ({
  defaultValue,
  onChange,
  ref,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([COMMERCE]);
  const [items, itemsSet] = useStore('commerce.items');
  const price = useMemo(() => getPrice(items), [items]);
  const tableRef = useRef<TableRefModel<PartialModel<ProductItemModel>>>(null);
  return (
    <Wrapper
      {...wrapperProps}
      s>
      <TableInput<PartialModel<ProductItemModel>>
        defaultValue={defaultValue}
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
                    defaultValue={(value as number) ?? 1}
                    isClearable={false}
                    isTypable={false}
                    onChange={(v) =>
                      v === 0 && (index ?? -1) >= 0 && tableRef.current?.remove?.(index as number)
                    }
                    removeIcon={value === undefined || value === 1 ? 'trash' : undefined}
                    size={THEME_SIZE.SMALL}
                    value={value as number}
                  />
                ),
                id: 'quantity',
                label: t('commerce:quantity'),
              },
            ]}
            idField="name"
            ref={tableRef}
          />
        }
        onChange={onChange ?? itemsSet}
        ref={ref}
        value={value ?? items}
      />

      <PriceTile
        fontStyle={FONT_STYLE.TITLE}
        label={t('commerce:totalPrice')}
        price={price}
      />
    </Wrapper>
  );
};
