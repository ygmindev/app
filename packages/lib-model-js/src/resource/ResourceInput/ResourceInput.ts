import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { Filter } from '@lib/model/resource/Filter/Filter';
import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';
import { GetManyOptions } from '@lib/model/resource/GetManyOptions/GetManyOptions';
import { GetManyOptionsModel } from '@lib/model/resource/GetManyOptions/GetManyOptions.models';
import { Inputtable } from '@lib/model/resource/Inputtable/Inputtable';
import { InputtableModel } from '@lib/model/resource/Inputtable/Inputtable.models';
import {
  type ResourceInputModel,
  ResourceInputParamsModel,
} from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type RootInputModel } from '@lib/model/resource/Root/Root.models';
import { SearchOptionsModel } from '@lib/model/resource/SearchOptions/SearchOptions.models';
import { PartialArrayModel, StringKeyModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withEntity({ isAbstract: true })
class Root<TRoot = undefined> implements RootInputModel<TRoot> {
  @withField({ isOptional: true })
  root?: TRoot extends undefined ? never : string;
}

export const ResourceInput = <TMethod extends RESOURCE_METHOD_TYPE, TType, TRoot = undefined>({
  Resource,
  method,
  name,
}: ResourceInputParamsModel<TMethod, TType>): ResourceClassModel<
  ResourceInputModel<TMethod, TType, TRoot>
> => {
  const InputtableF = Inputtable({ Resource, name: `${name}Input` });

  switch (method) {
    case RESOURCE_METHOD_TYPE.GET: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>
      {
        @withField({
          Resource: () => Filter as ResourceClassModel<FilterModel<TType>>,
          isArray: true,
          isOptional: true,
        })
        filter?: Array<FilterModel<TType>>;

        @withField({ isOptional: true })
        id?: string;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.GET_MANY: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>
      {
        @withField({
          Resource: () => Filter as ResourceClassModel<FilterModel<TType>>,
          isArray: true,
          isOptional: true,
        })
        filter?: Array<FilterModel<TType>>;

        @withField({ isArray: true, isOptional: true })
        id?: Array<string>;

        @withField({
          Resource: () => GetManyOptions as ResourceClassModel<GetManyOptionsModel<TType>>,
          isOptional: true,
        })
        options?: GetManyOptionsModel<TType>;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.CREATE: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>
      {
        @withField({ Resource: () => InputtableF })
        form!: Partial<TType>;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }
    case RESOURCE_METHOD_TYPE.CREATE_MANY: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>
      {
        @withField({ Resource: () => InputtableF, isArray: true })
        form!: PartialArrayModel<TType>;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.REMOVE: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>
      {
        @withField({
          Resource: () => Filter as ResourceClassModel<FilterModel<TType>>,
          isArray: true,
          isOptional: true,
        })
        filter?: Array<FilterModel<TType>>;

        @withField({ isArray: true, isOptional: true })
        id?: Array<string>;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.SEARCH: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>
      {
        @withField({ isArray: true })
        fields!: Array<StringKeyModel<TType>>;

        @withField()
        options?: SearchOptionsModel<TType>;

        @withField()
        query!: string;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.SUBSCRIBE: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>
      {
        @withField()
        id!: string;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.UPDATE: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>
      {
        @withField({ isOptional: true })
        id?: string;

        @withField({ Resource: () => InputtableF })
        update!: InputtableModel<TType>;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }

    case RESOURCE_METHOD_TYPE.UPDATE_MANY: {
      @withEntity({ name, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      class Input
        extends Root<TRoot>
        implements ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot>
      {
        @withField({
          Resource: () => Filter as ResourceClassModel<FilterModel<TType>>,
          isArray: true,
          isOptional: true,
        })
        filter?: Array<FilterModel<TType>>;

        @withField({ isArray: true, isOptional: true })
        id?: Array<string>;

        @withField({ Resource: () => InputtableF })
        update!: InputtableModel<TType>;
      }
      return Input as ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
    }
    default:
      throw new InvalidArgumentError('method');
  }
};
