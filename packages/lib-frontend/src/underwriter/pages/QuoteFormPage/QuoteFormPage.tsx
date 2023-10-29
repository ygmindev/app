import { useState } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { QUOTE_FORM_MATURITIES } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.constants';
import {
  type QuoteFormPageParamsModel,
  type QuoteFormPagePropsModel,
} from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.models';
import { type ScaledNumberModel } from '#lib-shared/data/data.models';

export const QuoteFormPage: LFCModel<QuoteFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<QuoteFormPageParamsModel>();
  const funding = location.params?.funding;

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

  const [maturities, maturitiesSet] = useState(getMaturities());
  const [data, dataSet] = useState(
    maturities.map(({ unit, value }) => ({
      maturity: value,
      spread: undefined,
    })),
  );

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
    </Wrapper>
  );
};
