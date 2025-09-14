import { type TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type _TextPropsModel = ChildrenPropsModel<string | Array<string>> & {
  casing?: TEXT_CASING;
  isEllipsis?: boolean;
  onPress?(): void;
};
