import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface ResourcePropsModel extends WithTestIdModel {}

export interface ResourceParamsModel {
  name: string;
}

export interface EntityResourceTableConfigModel<TType extends EntityResourceModel, TForm>
  extends Omit<EntityResourceTablePropsModel<TType, TForm>, 'name'> {}
