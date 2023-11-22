import { RadioField } from '#lib-frontend/core/components/RadioField/RadioField';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FilterContainer } from '#lib-frontend/data/components/FilterContainer/FilterContainer';
import { NumberRangeField } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField';
import { NUMBER_RANGE_TYPE } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { rangeToFilter } from '#lib-frontend/data/utils/rangeToFilter/rangeToFilter';
import { type FundingFilterPropsModel } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export const FundingFilter: LFCModel<FundingFilterPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <FilterContainer
      {...props}
      fields={[
        {
          fields: [
            {
              element: (
                <RadioField<Array<string>>
                  isHorizontal
                  isMultiple
                  // TODO: From API
                  options={[
                    { id: 'USD', label: 'USD' },
                    { id: 'EUR', label: 'EUR' },
                  ]}
                />
              ),
              id: 'currency',
              toFilter: () => FILTER_CONDITION.IN,
            },
          ],
          id: 'currency',
          label: t('funding:currency'),
        },
        {
          fields: [
            {
              element: (
                <NumberRangeField
                  label={t('funding:maturity')}
                  rangeType={NUMBER_RANGE_TYPE.RANGE}
                  type={NUMBER_UNIT_TYPE.RELATIVE_DATE}
                />
              ),
              id: 'maturityDays',
              toFilter: rangeToFilter(NUMBER_RANGE_TYPE.RANGE),
            },
          ],
          id: 'maturityDays',
          label: t('funding:maturity'),
        },
        {
          fields: [
            {
              element: (
                <NumberRangeField
                  label={t('funding:amount')}
                  rangeType={NUMBER_RANGE_TYPE.RANGE}
                  type={NUMBER_UNIT_TYPE.AMOUNT}
                />
              ),
              id: 'amount',
              toFilter: rangeToFilter(NUMBER_RANGE_TYPE.RANGE),
            },
          ],
          id: 'amount',
          label: t('funding:amount'),
        },
      ]}
    />
  );
};
