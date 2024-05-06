import { OtpInput } from '@lib/frontend/auth/components/OtpInput/OtpInput';
import { type OtpInputPropsModel } from '@lib/frontend/auth/components/OtpInput/OtpInput.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<OtpInputPropsModel> = {
  Component: OtpInput,
  category: 'form',
  defaultProps: {},
  variants: [
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
    // { props: { isDisabled: true } },
    // { props: { error: true } },
    // { props: { error: 'error' } },
  ],
};
