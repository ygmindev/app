import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import {
  type CreateArgsModel,
  type CreateArgsParamsModel,
} from '#lib-backend/resource/utils/createArgs/createArgs.models';
import { createFilter } from '#lib-backend/resource/utils/createFilter/createFilter';
import { createForm } from '#lib-backend/resource/utils/createForm/createForm';
import { createRoot } from '#lib-backend/resource/utils/createRoot/createRoot';
import { createUpdate } from '#lib-backend/resource/utils/createUpdate/createUpdate';
import { Pagination } from '#lib-backend/resource/utils/Pagination/Pagination';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { withCondition } from '#lib-shared/core/utils/withCondition/withCondition';
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
          withField({ Resource: createFilter({ Resource, name }) }),
        )
        filter!: FilterModel<TType>;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.CREATE: {
      @withEntity({ isAbstract: true })
      class Args
        extends (Root ?? class {})
        implements ArgsModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: createForm({ Resource, name }) }),
        )
        form!: TForm;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.UPDATE: {
      @withEntity({ isAbstract: true })
      class Args
        extends (Root ?? class {})
        implements ArgsModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: createFilter({ Resource, name }) }),
        )
        filter!: FilterModel<TType>;

        @withCondition(Resource !== undefined, () =>
          withField({ Resource: createUpdate({ Resource, name }) }),
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
          withField({ Resource: createFilter({ Resource, name }) }),
        )
        filter!: FilterModel<TType>;

        @withCondition(Resource !== undefined, () => withField({ Resource: Pagination }))
        pagination!: PaginationModel;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};
