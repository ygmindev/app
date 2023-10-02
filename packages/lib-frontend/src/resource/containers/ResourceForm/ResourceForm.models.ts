import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type ResourceFormPropsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = Pick<ResourceTablePropsModel<TType, TForm, TRoot>, 'service'> & FormContainerPropsModel<TForm>;
