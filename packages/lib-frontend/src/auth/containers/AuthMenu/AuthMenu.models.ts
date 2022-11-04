import type { DividerOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import type { LocationModel } from '@lib/frontend/routing/routing.models';

export interface AuthMenuPropsModel {}

export type AuthMenuOptionModel = (SelectOptionModel & LocationModel) | DividerOptionModel;
