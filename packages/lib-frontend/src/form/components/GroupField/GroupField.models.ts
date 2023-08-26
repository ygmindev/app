import { type ReactElement } from 'react';

import { type FieldPropsModel } from '#lib-frontend/form/form.models';

export type GroupFieldPropsModel = {
  children?: Array<ReactElement<FieldPropsModel<unknown>>>;
};
