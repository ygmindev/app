import { type PricePropsModel } from '@lib/frontend/commerce/components/Price/Price.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { useMemo } from 'react';

export const Price: LFCModel<PricePropsModel> = ({ currency, price, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [c, a, d] = useMemo(() => {
    const value = numberFormat(price, { currency: currency ?? 'usd' });
    const [amount, decimal] = value?.split('.') ?? [];
    const [currencyF, amountF] = [amount[0], amount.slice(1)];
    return [currencyF, amountF, decimal];
  }, [price, currency]);
  return (
    <Wrapper
      {...wrapperProps}
      isRow>
      {c && <Text>{c}</Text>}

      {a && <Text fontStyle={FONT_STYLE.TITLE}>{a}</Text>}

      {d && <Text>{d ?? 0}</Text>}
    </Wrapper>
  );
};
