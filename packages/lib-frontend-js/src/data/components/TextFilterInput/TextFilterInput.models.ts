import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type InputRefModel } from '@lib/frontend/data/data.models';
import { type FilterConditionModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type TextFilterInputPropsModel = TextInputPropsModel & {
  condition?: FilterConditionModel;
  defaultCondition?: FilterConditionModel;
  isContainsOnly?: boolean;
  onConditionChange?(value: FilterConditionModel): void;
};

export type TextFilterInputRefModel = InputRefModel;
