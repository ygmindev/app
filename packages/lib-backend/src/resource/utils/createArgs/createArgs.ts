import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import {
  type CreateArgsModel,
  type CreateArgsParamsModel,
} from '#lib-backend/resource/utils/createArgs/createArgs.models';
import { createForm } from '#lib-backend/resource/utils/createForm/createForm';
import { createRoot } from '#lib-backend/resource/utils/createRoot/createRoot';
import { createUpdate } from '#lib-backend/resource/utils/createUpdate/createUpdate';
import { Filter } from '#lib-backend/resource/utils/Filter/Filter';
import { Pagination } from '#lib-backend/resource/utils/Pagination/Pagination';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { withCondition } from '#lib-shared/core/utils/withCondition/withCondition';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type ArgsModel } from '#lib-shared/resource/utils/Args/Args.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';
import { type PaginationModel } from '#lib-shared/resource/utils/Pagination/Pagination.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

export const createArgs = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
>({
  Resource,
  RootResource,
  method,
  name,
}: CreateArgsParamsModel<TMethod, TType, TForm, TRoot>): CreateArgsModel<
  TMethod,
  TType,
  TForm,
  TRoot
> => {
  const Root = createRoot({ RootResource, name });
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.REMOVE: {
      @withEntity({ isAbstract: true })
      class Args
        extends (Root ?? class {})
        implements
          ArgsModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
          ArgsModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
          ArgsModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: () => Filter<TType>, isArray: true, type: PROPERTY_TYPE.RESOURCE }),
        )
        filter!: Array<FilterModel<TType>>;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.CREATE: {
      const Form = createForm({ Resource, name });

      @withEntity({ isAbstract: true })
      class Args
        extends (Root ?? class {})
        implements ArgsModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({
            Resource: () => Form,
            type: PROPERTY_TYPE.RESOURCE,
          }),
        )
        form!: TForm;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.UPDATE: {
      const Update = createUpdate({ Resource, name });

      @withEntity({ isAbstract: true })
      class Args
        extends (Root ?? class {})
        implements ArgsModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: () => Filter<TType>, isArray: true, type: PROPERTY_TYPE.RESOURCE }),
        )
        filter!: Array<FilterModel<TType>>;

        @withCondition(Resource !== undefined, () =>
          withField({
            Resource: () => Update,
            type: PROPERTY_TYPE.RESOURCE,
          }),
        )
        update!: UpdateModel<TType>;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.GET_CONNECTION: {
      @withEntity({ isAbstract: true })
      class Args
        extends (Root ?? class {})
        implements ArgsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: () => Filter<TType>, isArray: true, type: PROPERTY_TYPE.RESOURCE }),
        )
        filter!: Array<FilterModel<TType>>;

        @withCondition(Resource !== undefined, () =>
          withField({ Resource: () => Pagination, type: PROPERTY_TYPE.RESOURCE }),
        )
        pagination!: PaginationModel;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};
