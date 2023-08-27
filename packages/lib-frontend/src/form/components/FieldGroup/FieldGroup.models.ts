import { type ReactElement } from 'react';

import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel } from '#lib-frontend/form/form.models';

export type FieldGroupPropsModel = ChildrenPropsModel<ReactElement<FieldPropsModel<unknown>>>;
