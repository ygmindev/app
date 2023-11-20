import { useRef, useState } from 'react';

import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { ScaledNumberField } from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { type TableRefModel } from '#lib-frontend/data/components/Table/Table.models';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { validateNotEmpty } from '#lib-frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useFundingQuoteResource } from '#lib-frontend/funding/hooks/useFundingQuoteResource/useFundingQuoteResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type QuoteFormPageParamsModel,
  type QuoteFormPagePropsModel,
} from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.models';
import { NotFoundError } from '#lib-shared/core/errors/NotFoundError/NotFoundError';
import { type NumberRangeModel } from '#lib-shared/data/resources/NumberRange/NumberRange.models';
import { type FundingQuoteFormModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

export const QuoteFormPage: LFCModel<QuoteFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<QuoteFormPageParamsModel>();
  const funding = location.params?.funding;
  const { createMany } = useFundingQuoteResource();

  const tableRef = useRef<TableRefModel>(null);

  const getMaturities = (): Array<NumberRangeModel> => {
    const min = funding?.maturityDays?.min;
    const max = funding?.maturityDays?.max;
    // const unit = funding?.maturityDays?.unit;
    // if (unit) {
    //   const maturities = QUOTE_FORM_MATURITIES[unit];
    //   return maturities.filter(
    //     (maturity) =>
    //       maturity.value && (!min || min <= maturity.value) && (!max || max >= maturity.value),
    //   );
    // }
    return [];
  };

  const [data, dataSet] = useState<Array<FundingQuoteFormModel>>(
    getMaturities().map(() => ({
      // maturityDays: value,
      pricing: undefined,
    })),
  );

  const handleSubmit = async (): Promise<void> => {
    if (funding?._id) {
      if (tableRef?.current?.validate()) {
        const result = await createMany({ form: data, root: funding?._id });
        console.warn(result);
      }
    }
    throw new NotFoundError('root');
  };

  return (
    <Wrapper
      {...wrapperProps}
      mTop
      s>
      <Table
        columns={[
          {
            field: () => <ScaledNumberField type={NUMBER_UNIT_TYPE.RELATIVE_DATE} />,
            id: 'maturityDays',
            label: t('funding:maturity'),
          },
          {
            field: () => <ScaledNumberField type={NUMBER_UNIT_TYPE.RATE} />,
            id: 'pricing',
            label: t('funding:spread'),
          },
        ]}
        data={data}
        isAddable
        isDeletable
        isHeadless
        onChange={(value) => dataSet(value ?? [])}
        ref={tableRef}
        validators={{
          maturityDays: ({ value }) => validateNotEmpty({ value }),
          pricing: ({ value }) => validateNotEmpty({ value }),
        }}
      />

      <FloatingFooter>
        <Button
          icon="send"
          onPress={handleSubmit}>
          {t('funding:sendQuote')}
        </Button>
      </FloatingFooter>
    </Wrapper>
  );
};
