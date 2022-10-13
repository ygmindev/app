import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import type { ResourceConstructorModel } from '@lib/backend/resource/resource.models';
import type { ArgsParamsModel } from '@lib/backend/resource/utils/Args/Args.models';
import { Filter } from '@lib/backend/resource/utils/Filter/Filter';
import { Form } from '@lib/backend/resource/utils/Form/Form';
import { Pagination } from '@lib/backend/resource/utils/Pagination/Pagination';
import { Update } from '@lib/backend/resource/utils/Update/Update';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { ArgsModel } from '@lib/shared/resource/utils/Args/Args.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import type { PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import type { UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';

export const Args = <TMethod extends ResourceMethodTypeModel, TType, TForm>({
  Resource,
  method,
  name,
}: ArgsParamsModel<TMethod, TType, TForm>): ResourceConstructorModel<
  ArgsModel<TMethod, TType, TForm>
> => {
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.REMOVE: {
      @withEntity({ isAbstract: true })
      class _Args
        implements
          ArgsModel<RESOURCE_METHOD_TYPE.GET, TType, TForm>,
          ArgsModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm>,
          ArgsModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm>
      {
        @withField({ Resource: Filter({ Resource, name }) })
        filter!: FilterModel<TType>;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm>>;
    }
    case RESOURCE_METHOD_TYPE.CREATE: {
      const _Form = Form({ Resource, name });

      @withEntity({ isAbstract: true })
      class _Args implements ArgsModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm> {
        @withField({ Resource: _Form })
        form!: TForm;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm>>;
    }
    case RESOURCE_METHOD_TYPE.UPDATE: {
      @withEntity({ isAbstract: true })
      class _Args implements ArgsModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm> {
        @withField({ Resource: Filter({ Resource, name }) })
        filter!: FilterModel<TType>;

        @withField({ Resource: Update({ Resource, name }) })
        update!: UpdateModel<TType>;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm>>;
    }
    case RESOURCE_METHOD_TYPE.GET_CONNECTION: {
      @withEntity({ isAbstract: true })
      class _Args implements ArgsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm> {
        @withField({ Resource: Filter({ Resource, name }) })
        filter!: FilterModel<TType>;

        @withField({ Resource: Pagination })
        pagination!: PaginationModel;
      }
      return _Args as ResourceConstructorModel<ArgsModel<TMethod, TType, TForm>>;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};
