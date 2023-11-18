import { type LFCModel } from '#lib-frontend/core/core.models';
import { FilterContainer } from '#lib-frontend/data/components/FilterContainer/FilterContainer';
import { RangeField } from '#lib-frontend/data/components/RangeField/RangeField';
import { RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { rangeToFilter } from '#lib-frontend/data/utils/rangeToFilter/rangeToFilter';
import { type FundingFilterPropsModel } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FundingFilter: LFCModel<FundingFilterPropsModel> = ({
  onCancel,
  onSubmit,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FilterContainer
      {...wrapperProps}
      fields={[
        {
          fields: [
            {
              element: (
                <RangeField
                  label={t('funding:maturity')}
                  rangeType={RANGE_TYPE.RANGE}
                  type={NUMBER_UNIT_TYPE.RELATIVE_DATE}
                />
              ),
              id: 'maturityDays',
              toFilter: rangeToFilter,
            },
          ],
          id: 'maturityDays',
          label: t('funding:maturity'),
        },
        {
          fields: [
            {
              element: (
                <RangeField
                  label={t('funding:amount')}
                  rangeType={RANGE_TYPE.RANGE}
                  type={NUMBER_UNIT_TYPE.AMOUNT}
                />
              ),
              id: 'amount',
              toFilter: rangeToFilter,
            },
          ],
          id: 'amount',
          label: t('funding:amount'),
        },
      ]}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  );
};
