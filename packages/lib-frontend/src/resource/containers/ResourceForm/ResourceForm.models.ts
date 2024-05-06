import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';

export type ResourceFormPropsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = Omit<FormContainerPropsModel<TType>, 'fields' | 'onSubmit'> &
  ResourceParamsModel<TType, TRoot> & {
    onSubmit(input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>): Promise<void>;
  };
