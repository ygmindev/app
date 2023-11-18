import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { type FormFieldModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type FilterGroupPropsModel<TType> = WithIdModel &
  Pick<LineItemPropsModel, 'icon' | 'label'> & {
    fields?: Array<FormFieldModel<TType>>;
  };
