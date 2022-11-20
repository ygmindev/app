import { BILLING } from '@lib/frontend/billing/billing.constants';
import { CARDS_PROPS } from '@lib/frontend/billing/containers/Cards/Cards.constants';
import type { CardsPropsModel } from '@lib/frontend/billing/containers/Cards/Cards.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { Resources } from '@lib/frontend/resource/components/Resources/Resources';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const Cards: SFCModel<CardsPropsModel> = ({ testID, ...props }) => {
  useTranslation([BILLING]);

  const { styles } = useStyles({ props });
  const user = useCurrentUser();

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      {user && (
        <Resources<CardModel, CardFormModel, UserModel>
          {...CARDS_PROPS}
          root={{ _id: user._id }}
        />
      )}
    </Wrapper>
  );
};
