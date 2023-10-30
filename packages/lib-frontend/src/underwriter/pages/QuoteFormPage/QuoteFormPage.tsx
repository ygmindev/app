import { useRef, useState } from 'react';

import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { ScaledNumberField } from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { type TableRefModel } from '#lib-frontend/data/components/Table/Table.models';
import { type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { QUOTE_FORM_MATURITIES } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.constants';
import {
  type QuoteFormPageParamsModel,
  type QuoteFormPagePropsModel,
} from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { SCALED_NUMBER_UNIT } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.constants';
import { type ScaledNumberModel } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.models';
import { type FundingQuoteFormModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

export const QuoteFormPage: LFCModel<QuoteFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<QuoteFormPageParamsModel>();
  const funding = location.params?.funding;

  const tableRef = useRef<TableRefModel>(null);

  const [errors, errorsSet] =
    useState<
      Record<
        number,
        Record<
          StringKeyModel<ScaledNumberModel<RelativeDateUnitModel>>,
          TranslatableTextModel | undefined
        >
      >
    >();

  const getMaturities = (): Array<ScaledNumberModel<RelativeDateUnitModel>> => {
    const min = funding?.maturity?.min;
    const max = funding?.maturity?.max;
    const unit = funding?.maturity?.unit;
    if (unit) {
      const maturities = QUOTE_FORM_MATURITIES[unit];
      return maturities.filter(
        (maturity) =>
          maturity.value && (!min || min <= maturity.value) && (!max || max >= maturity.value),
      );
    }
    return [];
  };

  const [data, dataSet] = useState<Array<FundingQuoteFormModel>>(
    getMaturities().map(({ unit, value }) => ({
      maturity: { unit, value },
      pricing: undefined,
    })),
  );

  const handleSubmit = async (): Promise<void> => {
    console.warn(data);
  };

  return (
    <Wrapper
      {...wrapperProps}
      mTop
      s>
      <Table
        columns={[
          {
            field: () => <ScaledNumberField type={SCALED_NUMBER_UNIT.RELATIVE_DATE} />,
            id: 'maturity',
            label: t('funding:maturity'),
          },
          {
            field: () => <ScaledNumberField type={SCALED_NUMBER_UNIT.RATE} />,
            id: 'pricing',
            label: t('funding:spread'),
          },
        ]}
        data={data}
        isDeletable
        isHeadless
        onChange={(value) => dataSet(value ?? [])}
        ref={tableRef}
        // validators={{ maturity: validateNotEmpty, spread: validateNotEmpty }}
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
