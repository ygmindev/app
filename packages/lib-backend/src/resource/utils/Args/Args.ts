import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import type { ResourceConstructorModel } from '@lib/backend/resource/resource.models';
import type { ArgsParamsModel } from '@lib/backend/resource/utils/Args/Args.models';
import { Filter } from '@lib/backend/resource/utils/Filter/Filter';
import { Form } from '@lib/backend/resource/utils/Form/Form';
import { Pagination } from '@lib/backend/resource/utils/Pagination/Pagination';
import { Root } from '@lib/backend/resource/utils/Root/Root';
import { Update } from '@lib/backend/resource/utils/Update/Update';
import { withCondition } from '@lib/shared/core/decorators/withCondition/withCondition';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { ArgsModel } from '@lib/shared/resource/utils/Args/Args.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import type { PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import type { UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';

export const Args = <TMethod extends ResourceMethodTypeModel, TType, TForm, TRoot = undefined>({
  Resource,
  RootResource,
  method,
  name,
}: ArgsParamsModel<TMethod, TType, TForm, TRoot>): ResourceConstructorModel<
  ArgsModel<TMethod, TType, TForm, TRoot>
> => {
  const _Root = Root({ RootResource, name });
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.REMOVE: {
      @withEntity({ isAbstract: true })
      class _Args
        extends _Root
        implements
          ArgsModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
          ArgsModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
          ArgsModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: Filter({ Resource, name }) }),
        )
        filter!: FilterModel<TType>;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.CREATE: {
      @withEntity({ isAbstract: true })
      class _Args
        extends _Root
        implements ArgsModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: Form({ Resource, name }) }),
        )
        form!: TForm;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.UPDATE: {
      @withEntity({ isAbstract: true })
      class _Args
        extends _Root
        implements ArgsModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: Filter({ Resource, name }) }),
        )
        filter!: FilterModel<TType>;

        @withCondition(Resource !== undefined, () =>
          withField({ Resource: Update({ Resource, name }) }),
        )
        update!: UpdateModel<TType>;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.GET_CONNECTION: {
      @withEntity({ isAbstract: true })
      class _Args
        extends _Root
        implements ArgsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>
      {
        @withCondition(Resource !== undefined, () =>
          withField({ Resource: Filter({ Resource, name }) }),
        )
        filter!: FilterModel<TType>;

        @withCondition(Resource !== undefined, () => withField({ Resource: Pagination }))
        pagination!: PaginationModel;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};
