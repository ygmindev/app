import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<ActivatablePropsModel> = {
  Component: Activatable,
  defaultProps: {
    children: (isActive) => (
      <Wrapper>
        <Text>{`${isActive}`}</Text>
      </Wrapper>
    ),
  },
  variants: cartesianObject({ trigger: Object.values(ACTIVATABLE_TRIGGER) }).map((props) => ({
    props,
  })),
};
