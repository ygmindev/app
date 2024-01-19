import { _DateField } from '@lib-frontend/data/components/DateField/_DateField';
import { type _DateFieldPropsModel } from '@lib-frontend/data/components/DateField/_DateField.models';
import { type DateFieldPropsModel } from '@lib-frontend/data/components/DateField/DateField.models';
import { composeComponent } from '@lib-frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib-shared/core/utils/variableName/variableName';

export const DateField = composeComponent<DateFieldPropsModel, _DateFieldPropsModel>({
  Component: _DateField,

  getProps: ({ children }) => ({
    children,
  }),
});

process.env.APP_IS_DEBUG && (DateField.displayName = variableName({ DateField }));
