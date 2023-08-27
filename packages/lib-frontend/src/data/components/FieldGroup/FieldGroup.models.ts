import { type ReactElement } from 'react';

import { type TextFieldPropsModel } from '#lib-frontend/data/components/TextField/TextField.models';

export type FieldGroupPropsModel = {
  fields: Array<{ element: ReactElement<TextFieldPropsModel>; id: string }>;
};
