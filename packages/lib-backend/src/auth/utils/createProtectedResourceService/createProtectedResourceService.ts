import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import {
  type CreateProtectedResoureServiceModel,
  type CreateProtectedResoureServiceParamsModel,
} from '#lib-backend/auth/utils/createProtectedResourceService/createProtectedResourceService.models';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { UnauthenticatedError } from '#lib-shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const createProtectedResoureService = <
  TType extends ProtectedResourceModel,
  TForm extends EntityResourceDataModel<TType> = EntityResourceDataModel<TType>,
>({
  ...params
}: CreateProtectedResoureServiceParamsModel<TType, TForm>): CreateProtectedResoureServiceModel<
  TType,
  TForm
> => {
  return createEntityResourceService<TType, TForm>({
    ...params,
    beforeGet: async ({ input }, context) => {
      const userId = context?.user?._id;
      if (userId) {
        const accessAll = Container.get(AccessService).getMany({
          filter: [{ field: USER_RESOURCE_NAME, value: { _id: userId } }],
        });
        return input;
      }
      throw new UnauthenticatedError();
    },
  });
};
