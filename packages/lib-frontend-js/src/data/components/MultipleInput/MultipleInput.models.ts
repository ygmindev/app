import { type MenuInputPropsModel } from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type MultipleInputPropsModel<TType extends WithIdModel> = InputPropsModel<Array<string>> &
  Pick<MenuInputPropsModel<TType>, 'options'>;

export type MultipleInputRefModle = InputRefModel<Array<string>>;
