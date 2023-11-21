import { type LFCModel } from '#lib-frontend/core/core.models';
import { FilterContainer } from '#lib-frontend/data/components/FilterContainer/FilterContainer';
import { NumberRangeField } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField';
import { NUMBER_RANGE_TYPE } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { rangeToFilter } from '#lib-frontend/data/utils/rangeToFilter/rangeToFilter';
import { type FundingFilterPropsModel } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';

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
                <NumberRangeField
                  label={t('funding:maturity')}
                  rangeType={NUMBER_RANGE_TYPE.RANGE}
                  type={NUMBER_UNIT_TYPE.RELATIVE_DATE}
                />
              ),
              id: 'maturityDays',
              // toFilter: (v?: NumberRangeModel, k?: StringKeyModel<FundingModel>) =>
              //   rangeToFilter<FundingModel, StringKeyModel<FundingModel>>(v, k),
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
