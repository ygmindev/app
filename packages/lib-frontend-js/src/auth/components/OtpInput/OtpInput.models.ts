import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';

export type OtpInputPropsModel = InputPropsModel & {
  isAutoFocus?: boolean;
  onBack?(): void;
};

export type OtpInputRefModel = InputRefModel;
