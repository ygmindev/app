import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import { type OtpFieldPropsModel } from '@lib/frontend/auth/components/OtpField/OtpField.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<OtpFieldPropsModel> = {
  Component: OtpField,
  category: 'form',
  defaultProps: {},
  variants: [
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
    // { props: { isAutoFocus: true } },
    // { props: { isDisabled: true } },
    // { props: { error: true } },
    // { props: { error: 'error' } },
  ],
};
