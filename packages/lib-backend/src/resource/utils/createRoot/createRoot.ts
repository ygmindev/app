import {
  type CreateRootModel,
  type CreateRootParamsModel,
} from '#lib-backend/resource/utils/createRoot/createRoot.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type ClassModel, type PartialModel } from '#lib-shared/core/core.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';

export const createRoot = <TRoot = undefined>({
  RootResource,
  name,
}: CreateRootParamsModel<TRoot>): CreateRootModel<TRoot> => {
  if (RootResource) {
    const nameF = `${name}Root`;

    @withEntity({ name: nameF })
    class RootResourceF extends (RootResource as ClassModel) {}

    @withEntity({ isAbstract: true, name: `${nameF}Root` })
    class Root implements RootModel<TRoot> {
      @withField({ Resource: RootResourceF })
      root?: PartialModel<TRoot>;
    }

    return Root as CreateRootModel<TRoot>;
  }
  return undefined as unknown as CreateRootModel<TRoot>;
};
