import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';

export type ResourceFormPropsModel<TType, TForm = undefined, TRoot = undefined> = Pick<
  ResourceTablePropsModel<TType, TForm, TRoot>,
  'service'
> &
  FormContainerPropsModel<TForm>;
