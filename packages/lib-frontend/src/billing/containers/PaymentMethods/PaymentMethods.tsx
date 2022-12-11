import { BILLING } from '@lib/frontend/billing/billing.constants';
import type { PaymentMethodsPropsModel } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods.models';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { useEffect } from 'react';

export const PaymentMethods: SFCModel<PaymentMethodsPropsModel> = ({ testID, ...props }) => {
  useTranslation([BILLING]);

  const { styles } = useStyles({ props });
  const { getMany } = useCardResource();
  const user = useCurrentUser();

  useEffect(() => {
    user && getMany({ filter: {}, root: { _id: user._id } });
  }, []);

  return <Wrapper grow style={styles} testID={testID}></Wrapper>;
};
