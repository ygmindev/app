import type { TextFieldPropsModel } from '@lib/frontend/core/components/TextField/TextField.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface SearchFieldPropsModel
  extends WithTestIdModel,
    Omit<TextFieldPropsModel, 'defaultValue'> {}
