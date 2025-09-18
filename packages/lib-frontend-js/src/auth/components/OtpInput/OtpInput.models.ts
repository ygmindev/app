import { type TextInputRefModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';

export type OtpInputPropsModel = InputPropsModel & {
  isAutoFocus?: boolean;
  onBack?(): void;
};

export type OtpInputRefModel = TextInputRefModel;
