import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type InputRefModel } from '@lib/frontend/data/data.models';
import { type FilterConditionModel } from '@lib/model/resource/Filter/Filter.models';

export type TextFilterInputPropsModel = TextInputPropsModel & {
  condition?: FilterConditionModel;
  defaultCondition?: FilterConditionModel;
  isValueOnly?: boolean;
  onConditionChange?(value: FilterConditionModel): void;
};

export type TextFilterInputRefModel = InputRefModel;
