import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';
import { type ResourceServiceModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type ResourceTablePropsModel<TType, TForm = undefined, TRoot = undefined> = Pick<
  ResourceFilterFormPropsModel<TType, TForm, TRoot>,
  'filters'
> & {
  name: string;
  service: ResourceServiceModel<TType, TForm, TRoot>;
};
