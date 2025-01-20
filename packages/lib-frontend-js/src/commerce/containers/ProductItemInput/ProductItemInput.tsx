import { PriceTile } from '@lib/frontend/commerce/components/PriceTile/PriceTile';
import {
  type ProductItemInputPropsModel,
  type ProductItemInputRefModel,
} from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { TableInput } from '@lib/frontend/data/components/TableInput/TableInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { forwardRef, useMemo } from 'react';

export const ProductItemInput: RLFCModel<ProductItemInputRefModel, ProductItemInputPropsModel> =
  forwardRef(({ defaultValue, onChange, value, ...props }, ref) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation([COMMERCE]);
    const [items, itemsSet] = useStore('commerce.items');
    const price = useMemo(() => getPrice(items), [items]);
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
                  field: ({ value }) => (
                    <NumberInput
                      defaultValue={1}
                      isNoClear
                      min={1}
                      size={THEME_SIZE.SMALL}
                      value={value as number}
                    />
                  ),
                  id: 'quantity',
                  label: t('commerce:quantity'),
                },
              ]}
              idField="name"
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
  });
