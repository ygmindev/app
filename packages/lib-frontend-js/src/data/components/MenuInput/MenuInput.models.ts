import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import {
  type MenuOptionModel,
  type MenuPropsModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { type ElementStateModel } from '@lib/frontend/core/core.models';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type UseSearchParamsModel } from '@lib/frontend/search/hooks/useSearch/useSearch.models';
import { type ReactElement } from 'react';

export type MenuInputPropsModel<TType extends MenuOptionModel = MenuOptionModel> = Omit<
  TextInputPropsModel,
  'rightElement' | 'value' | 'defaultValue' | 'onChange'
> &
  Pick<MenuPropsModel<TType>, 'renderOption'> &
  Pick<UseSearchParamsModel<TType>, 'options'> &
  Omit<InputPropsModel<TType>, 'label' | 'error'> & {
    textDefaultValue?: string;
    renderValue?(value: TType): AsyncTextModel | undefined;
    rightElement?(elementState?: ElementStateModel): ReactElement | null;
  };

export type MenuInputRefModel = InputRefModel;
