import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import {
  type MenuInputPropsModel,
  type MenuInputRefModel,
} from '@lib/frontend/data/components/MenuInput/MenuInput.models';

export type SearchInputPropsModel<TType extends MenuOptionModel = MenuOptionModel> = Omit<
  MenuInputPropsModel<TType>,
  'onSearch' | 'options'
> & {
  onSearch(query?: string): Promise<Array<TType>>;
};

export type SearchInputRefModel = MenuInputRefModel;
