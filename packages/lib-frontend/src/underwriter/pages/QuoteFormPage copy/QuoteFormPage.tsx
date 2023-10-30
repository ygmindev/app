import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { RATE_UNIT } from '#lib-frontend/data/data.constants';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { type QuoteFormPagePropsModel } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.models';

export const QuoteFormPage: LFCModel<QuoteFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { format } = useFormatter();
  return (
    <Wrapper
      {...wrapperProps}
      mTop
      s>
      <Table
        columns={[
          {
            id: 'maturity',
            label: t('funding:maturity'),
            renderer: () => (
              <TextField
                rightElement={<Text color={theme.color.border}>{t('core:yrs')}</Text>}
                size="l"
              />
            ),
            width: 100,
          },
          {
            id: 'spread',
            label: t('funding:spread'),
            renderer: () => (
              <TextField
                rightElement={<Text color={theme.color.border}>{t('core:bps')}</Text>}
                size="l"
              />
            ),
            width: 100,
          },
          {
            formatter: ({ value }) => format(value, { precision: 3, unit: RATE_UNIT.YIELD }),
            id: 'yield',
            label: t('funding:yield'),
            width: 80,
          },
          { id: 'benchmark', label: t('funding:benchmark') },
          {
            formatter: ({ value }) => format(value, { unit: RATE_UNIT.SPREAD }),
            id: 'swappedToFloating',
            label: t('funding:swappedToFloating'),
            width: 100,
          },
        ]}
        data={[
          {
            benchmark: 'T 5.09/30/2025',
            maturity: 2,
            spread: 0.01,
            swappedToFloating: 0.01,
            yield: 0.05383,
          },
          {
            benchmark: 'T 4.625 10/15/2026',
            benchmarkyield: 0.01,
            maturity: 3,
            spread: 0.01,
            swappedToFloating: 0.01,
            yield: 0.06267,
          },
          {
            benchmark: 'T 4.625 10/15/2026',
            maturity: 5,
            spread: 0.01,
            swappedToFloating: 0.01,
            yield: 0.07431,
          },
          {
            benchmark: 'T 4.625 10/15/2026',
            maturity: 7,
            spread: 0.01,
            swappedToFloating: 0.01,
            yield: 0.08822,
          },
          {
            benchmark: 'T 4.625 10/15/2026',
            maturity: 10,
            spread: 0.01,
            swappedToFloating: 0.01,
            yield: 0.1034,
          },
          {
            benchmark: 'T 4.625 10/15/2026',
            maturity: 20,
            spread: 0.01,
            swappedToFloating: 0.01,
            yield: 0.1141,
          },
          {
            benchmark: 'T 4.625 10/15/2026',
            maturity: 30,
            spread: 0.01,
            swappedToFloating: 0.01,
            yield: 0.1332,
          },
        ]}
      />

      <Wrapper
        isRowAlign
        // justify={FLEX_JUSTIFY.END}
      >
        <Button
          flex
          icon="chevronLeft"
          type={BUTTON_TYPE.INVISIBLE}>
          {t('core:cancel')}
        </Button>

        <Button
          flex
          icon="chevronRight">
          {t('funding:sendQuote')}
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
