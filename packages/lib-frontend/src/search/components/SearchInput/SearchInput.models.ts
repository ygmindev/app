import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import {
  type MenuInputPropsModel,
  type MenuInputRefModel,
} from '@lib/frontend/data/components/MenuInput/MenuInput.models';

export type SearchInputPropsModel<TType extends MenuOptionModel = MenuOptionModel> =
  MenuInputPropsModel<TType>;

export type SearchInputRefModel = MenuInputRefModel;
