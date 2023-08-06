import {
  type WithAuthorizerModel,
  type WithAuthorizerParamsModel,
} from '#lib-backend/resource/utils/withAuthorizer/withAuthorizer.models';
import { UnauthorizedError } from '#lib-shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

export const withAuthorizer =
  <TMethod extends ResourceMethodTypeModel, TType, TForm = undefined, TRoot = undefined>({
    authorizer,
  }: WithAuthorizerParamsModel<TMethod, TType, TForm, TRoot>): WithAuthorizerModel =>
  (target, _propertyKey, descriptor) => {
    if (authorizer) {
      type AuthorizerModel = (
        input: InputModel<TMethod, TType, TForm, TRoot>,
        context?: ContextModel,
      ) => Promise<OutputModel<TMethod, TType, TRoot>>;
      const original = descriptor.value as AuthorizerModel;
      (descriptor as { value: AuthorizerModel }).value = (input, context) => {
        if (authorizer({ context, input })) {
          return original.apply(target, [input, context]);
        }
        throw new UnauthorizedError();
      };
      return descriptor;
    }
    return descriptor;
  };