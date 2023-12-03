import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type TablePropsModel } from '#lib-frontend/data/components/Table/Table.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type RootInputModel } from '#lib-shared/resource/utils/Root/Root.models';

export type ResourceFormPropsModel<TType, TForm = EntityResourceDataModel<TType>> = Omit<
  FormContainerPropsModel<TType>,
  'fields' | 'onSubmit'
> &
  Pick<TablePropsModel<TType>, 'columns'> &
  RootInputModel & {
    onSubmit(input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm>): Promise<void>;
  };
