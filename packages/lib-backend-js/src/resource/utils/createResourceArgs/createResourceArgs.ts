import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { createFilter } from '@lib/backend/resource/utils/createFilter/createFilter';
import { createForm } from '@lib/backend/resource/utils/createForm/createForm';
import {
  type CreateResourceArgsModel,
  type CreateResourceArgsParamsModel,
} from '@lib/backend/resource/utils/createResourceArgs/createResourceArgs.models';
import { createUpdate } from '@lib/backend/resource/utils/createUpdate/createUpdate';
import { Pagination } from '@lib/backend/resource/utils/Pagination/Pagination';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PartialArrayModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { withCondition } from '@lib/shared/core/utils/withCondition/withCondition';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import { type ResourceArgsModel } from '@lib/shared/resource/utils/ResourceArgs/ResourceArgs.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';

@withEntity({ isAbstract: true })
class Root<TRoot = undefined> implements RootInputModel<TRoot> {
  @withField({ isOptional: true })
  root?: TRoot extends undefined ? never : string;
}

export const createResourceArgs = <TMethod extends RESOURCE_METHOD_TYPE, TType, TRoot = undefined>({
  Resource,
  method,
  name,
}: CreateResourceArgsParamsModel<TMethod, TType>): CreateResourceArgsModel<
  TMethod,
  TType,
  TRoot
> => {
  const Filter = Resource && createFilter({ Resource, name });
  const Form = Resource && createForm({ Resource, name });

  switch (method) {
    case RESOURCE_METHOD_TYPE.GET: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () =>
            withField({
              Resource: Filter ? () => Filter : undefined,
              isArray: true,
              isOptional: true,
            }),
        )
        filter?: Array<FilterModel<TType>>;

        @withField({ isOptional: true })
        id?: string;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.GET_MANY: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () =>
            withField({
              Resource: Filter ? () => Filter : undefined,
              isArray: true,
              isOptional: true,
            }),
        )
        filter?: Array<FilterModel<TType>>;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.CREATE: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>
      {
        @withCondition(() => !!Form, () => withField({ Resource: Form ? () => Form : undefined }))
        form!: Partial<TType>;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.CREATE_MANY: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>
      {
        @withCondition(
          () => !!Form,
          () => withField({ Resource: Form ? () => Form : undefined, isArray: true }),
        )
        form!: PartialArrayModel<TType>;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.REMOVE: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () =>
            withField({
              Resource: Filter ? () => Filter : undefined,
              isArray: true,
              isOptional: true,
            }),
        )
        filter?: Array<FilterModel<TType>>;

        @withField({ isArray: true, isOptional: true })
        id?: Array<string>;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.SUBSCRIBE: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () => withField({ Resource: Filter ? () => Filter : undefined, isArray: true }),
        )
        filter!: Array<FilterModel<TType>>;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.UPDATE: {
      const Update = Resource && createUpdate({ Resource, name });
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>
      {
        @withField({ isOptional: true })
        id?: string;

        @withCondition(
          () => !!Update,
          () => withField({ Resource: Update ? () => Update : undefined }),
        )
        update!: UpdateModel<TType>;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.UPDATE_MANY: {
      const Update = Resource && createUpdate({ Resource, name });
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () =>
            withField({
              Resource: Filter ? () => Filter : undefined,
              isArray: true,
              isOptional: true,
            }),
        )
        filter?: Array<FilterModel<TType>>;

        @withField({ isArray: true, isOptional: true })
        id?: Array<string>;

        @withCondition(
          () => !!Update,
          () => withField({ Resource: Update ? () => Update : undefined }),
        )
        update!: UpdateModel<TType>;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.GET_CONNECTION: {
      @withEntity({ isAbstract: true })
      class Args
        extends Root<TRoot>
        implements ResourceArgsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>
      {
        @withCondition(
          () => !!Filter,
          () => withField({ Resource: Filter ? () => Filter : undefined, isArray: true }),
        )
        filter!: Array<FilterModel<TType>>;

        @withField({ Resource: () => Pagination })
        pagination!: PaginationModel;
      }
      return Args as ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
    }
    default:
      throw new InvalidArgumentError('method');
  }
};
