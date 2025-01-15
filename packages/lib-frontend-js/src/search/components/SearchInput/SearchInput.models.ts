import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import {
  type MenuInputPropsModel,
  type MenuInputRefModel,
} from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type SearchInputPropsModel<TType extends MenuOptionModel = MenuOptionModel> = Omit<
  MenuInputPropsModel<TType>,
  'onSearch' | 'options' | 'value' | 'onChange' | 'defaultValue'
> &
  ValuePropsModel<TType> & {
    onSearch(query?: string): Promise<Array<TType>>;
  };

export type SearchInputRefModel = MenuInputRefModel;
