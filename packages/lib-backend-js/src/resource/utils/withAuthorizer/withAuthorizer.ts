import {
  type WithAuthorizerModel,
  type WithAuthorizerParamsModel,
} from '@lib/backend/resource/utils/withAuthorizer/withAuthorizer.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

export const withAuthorizer =
  <TMethod extends ResourceMethodTypeModel, TType extends EntityResourceModel, TRoot = undefined>({
    authorizer,
  }: WithAuthorizerParamsModel<TMethod, TType, TRoot>): WithAuthorizerModel =>
  (_target, _propertyKey, descriptor) => {
    if (authorizer) {
      type AuthorizerModel = (
        input?: ResourceInputModel<TMethod, TType>,
        context?: RequestContextModel,
      ) => Promise<ResourceOutputModel<TMethod, TType, TRoot>>;
      const original = descriptor.value as AuthorizerModel;
      (descriptor as { value: AuthorizerModel }).value = async function (input, context) {
        if (authorizer({ context, input })) {
          return original.apply(this, [input, context]);
        }
        throw new UnauthorizedError();
      };
      return descriptor;
    }
    return descriptor;
  };
