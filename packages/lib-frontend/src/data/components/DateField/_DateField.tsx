import { composeComponent } from '@lib-frontend/core/utils/composeComponent/composeComponent';
import { type _DateFieldPropsModel } from '@lib-frontend/data/components/DateField/_DateField.models';
import { type DateFieldProps } from 'DateField';
import { DateField } from 'DateField';

export const _DateField = composeComponent<_DateFieldPropsModel, DateFieldProps>({
  Component: DateField,

  getProps: ({ children }) => ({
    children,
  }),
});
