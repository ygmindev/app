import {
  type WithAuthorizerModel,
  type WithAuthorizerParamsModel,
} from '@lib/backend/resource/utils/withAuthorizer/withAuthorizer.models';
import { type ContextModel } from '@lib/platform/core/core.models';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export const withAuthorizer =
  <
    TMethod extends ResourceMethodTypeModel,
    TType,
    TForm = EntityResourceDataModel<TType>,
    TRoot = undefined,
  >({
    authorizer,
  }: WithAuthorizerParamsModel<TMethod, TType, TForm, TRoot>): WithAuthorizerModel =>
  (_target, _propertyKey, descriptor) => {
    if (authorizer) {
      type AuthorizerModel = (
        input?: InputModel<TMethod, TType, TForm>,
        context?: ContextModel,
      ) => Promise<OutputModel<TMethod, TType, TRoot>>;
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
