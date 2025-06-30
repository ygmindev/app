import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type ResourceFormPropsModel<TType extends EntityResourceModel, TRoot = undefined> = Omit<
  FormContainerPropsModel<TType>,
  'fields' | 'onSubmit'
> &
  ResourceParamsModel<TType, TRoot> & {
    data?: PartialModel<TType>;
    onSubmit(values: TType, root?: TRoot extends undefined ? never : string): Promise<void>;
  };
