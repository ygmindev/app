import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { SwitchInput } from '@lib/frontend/data/components/SwitchInput/SwitchInput';
import { type SwitchInputPropsModel } from '@lib/frontend/data/components/SwitchInput/SwitchInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<SwitchInputPropsModel> = {
  Component: SwitchInput,
  category: 'form',
  defaultProps: {},
  variants: [
    { props: { value: true } },
    { props: { iconActive: 'happy', iconInactive: 'sad' } },
    ...cartesianObject({ elementState: Object.values(ELEMENT_STATE) }).map((props) => ({ props })),
  ],
};
