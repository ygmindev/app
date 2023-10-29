import { useState } from 'react';

import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import { Table } from '#lib-frontend/data/components/Table/Table';
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
import { type ScaledNumberModel } from '#lib-shared/data/data.models';

export const QuoteFormPage: LFCModel<QuoteFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<QuoteFormPageParamsModel>();
  const funding = location.params?.funding;

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
        (maturity) => (!min || min <= maturity.value) && (!max || max >= maturity.value),
      );
    }
    return [];
  };

  const [data, dataSet] = useState(
    getMaturities().map(({ unit, value }) => ({
      maturity: value,
      spread: undefined,
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
            field: <NumberField />,
            id: 'maturity',
            label: t('funding:maturity'),
          },
          {
            field: <NumberField />,
            id: 'spread',
            label: t('funding:spread'),
          },
        ]}
        data={data}
        isDeletable
        isHeadless
        onChange={(value) => dataSet(value ?? [])}
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
