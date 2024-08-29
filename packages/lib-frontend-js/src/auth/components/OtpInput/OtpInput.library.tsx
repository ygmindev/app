import { OtpInput } from '@lib/frontend/auth/components/OtpInput/OtpInput';
import { type OtpInputPropsModel } from '@lib/frontend/auth/components/OtpInput/OtpInput.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<OtpInputPropsModel> = {
  Component: OtpInput,
  category: 'form',
  defaultProps: {},
  variants: cartesianObject({ elementState: Object.values(ELEMENT_STATE) }).map((props) => ({
    props,
  })),
};
