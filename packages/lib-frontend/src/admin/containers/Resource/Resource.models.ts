import type { ResourcesPropsModel } from '@lib/frontend/resource/containers/Resources/Resources.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface ResourcePropsModel extends WithTestIdModel {}

export interface ResourceParamsModel {
  name: string;
}

export interface ResourcesConfigModel<TType extends EntityResourceModel, TForm>
  extends Omit<ResourcesPropsModel<TType, TForm>, 'name'> {}
