import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import {
  type CreateArgsModel,
  type CreateArgsParamsModel,
} from '@lib/backend/resource/utils/createArgs/createArgs.models';
import { createFilter } from '@lib/backend/resource/utils/createFilter/createFilter';
import { createForm } from '@lib/backend/resource/utils/createForm/createForm';
import { createUpdate } from '@lib/backend/resource/utils/createUpdate/createUpdate';
import { Pagination } from '@lib/backend/resource/utils/Pagination/Pagination';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { StringKeyModel } from '@lib/shared/core/core.models';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { withCondition } from '@lib/shared/core/utils/withCondition/withCondition';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type ArgsModel } from '@lib/shared/resource/utils/Args/Args.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';

@withEntity({ isAbstract: true })
class Root<TRoot = undefined> implements RootInputModel<TRoot> {
  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  root?: TRoot extends undefined ? never : string;
}

export const createArgs = <TMethod extends ResourceMethodTypeModel, TType, TForm, TRoot>({
  Resource,
  method,
  name,
}: CreateArgsParamsModel<TMethod, TType, TForm>): CreateArgsModel<TMethod, TType, TForm, TRoot> => {
  const Filter = Resource && createFilter({ Resource, name });
  const Form = Resource && createForm({ Resource, name });

  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.REMOVE: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements
          ArgsModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
          ArgsModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
          ArgsModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () =>
            withField({
              Resource: Filter ? () => Filter : undefined,
              isArray: true,
              type: PROPERTY_TYPE.RESOURCE,
            }),
        )
        filter!: Array<FilterModel<TType>>;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.CREATE: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ArgsModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>
      {
        @withCondition(
          () => !!Form,
          () =>
            withField({
              Resource: Form ? () => Form : undefined,
              type: PROPERTY_TYPE.RESOURCE,
            }),
        )
        form!: TForm;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.CREATE_MANY: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ArgsModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TForm, TRoot>
      {
        @withCondition(
          () => !!Form,
          () =>
            withField({
              Resource: Form ? () => Form : undefined,
              isArray: true,
              type: PROPERTY_TYPE.RESOURCE,
            }),
        )
        form!: Array<TForm>;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.SEARCH: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ArgsModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TForm, TRoot>
      {
        @withField({ isArray: true, isOptional: true, type: DATA_TYPE.STRING })
        keys?: Array<StringKeyModel<TType>>;

        @withField({ isOptional: true, type: DATA_TYPE.STRING })
        query?: string;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.UPDATE: {
      const Update = Resource && createUpdate({ Resource, name });
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ArgsModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () =>
            withField({
              Resource: Filter ? () => Filter : undefined,
              isArray: true,
              type: PROPERTY_TYPE.RESOURCE,
            }),
        )
        filter!: Array<FilterModel<TType>>;

        @withCondition(
          () => !!Update,
          () =>
            withField({
              Resource: Update ? () => Update : undefined,
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
        extends Root<TRoot>
        implements ArgsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () =>
            withField({
              Resource: Filter ? () => Filter : undefined,
              isArray: true,
              type: PROPERTY_TYPE.RESOURCE,
            }),
        )
        filter!: Array<FilterModel<TType>>;

        @withField({ Resource: () => Pagination, type: PROPERTY_TYPE.RESOURCE })
        pagination!: PaginationModel;
      }
      return Args as ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};
