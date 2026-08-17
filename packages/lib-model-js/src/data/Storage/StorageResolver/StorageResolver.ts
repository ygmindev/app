import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withMutationOutput } from '@lib/backend/resource/utils/withMutationOutput/withMutationOutput';
import { withQueryOutput } from '@lib/backend/resource/utils/withQueryOutput/withQueryOutput';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import {
  PRESIGN,
  PRESIGN_MANY,
  STORAGE_RESOURCE_NAME,
} from '@lib/model/data/Storage/Storage.constants';
import { Storage } from '@lib/model/data/Storage/Storage.entity';
import { StorageModel } from '@lib/model/data/Storage/Storage.models';
import { StorageImplementation } from '@lib/model/data/Storage/StorageImplementation/StorageImplementation';
import { StorageImplementationModel } from '@lib/model/data/Storage/StorageImplementation/StorageImplementation.models';
import { type StorageResolverModel } from '@lib/model/data/Storage/StorageResolver/StorageResolver.models';
import { BooleanValue } from '@lib/model/resource/BooleanValue/BooleanValue';
import { BooleanValueModel } from '@lib/model/resource/BooleanValue/BooleanValue.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
@withResolver()
export class StorageResolver implements StorageResolverModel {
  @withInject(StorageImplementation) storageImplementation!: StorageImplementationModel;

  @withQueryOutput({
    access: ACCESS_LEVEL.PUBLIC,
    name: PRESIGN,
    Resource: () => Storage,
  })
  async presign(
    @withInput({ Resource: () => Storage })
    params: Partial<StorageModel>,
  ): Promise<Partial<StorageModel>> {
    return this.storageImplementation.presign(params);
  }

  @withQueryOutput({
    access: ACCESS_LEVEL.PUBLIC,
    isArray: true,
    name: PRESIGN_MANY,
    Resource: () => Storage,
  })
  async presignMany(
    @withInput({ Resource: () => [Storage] })
    params: Array<Partial<StorageModel>>,
  ): Promise<Array<Partial<StorageModel> | null>> {
    return this.storageImplementation.presignMany(params);
  }

  @withMutationOutput({
    access: ACCESS_LEVEL.PUBLIC,
    name: `${STORAGE_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.REMOVE}`,
    Resource: () => BooleanValue,
  })
  async remove(
    @withInput({ Resource: () => String })
    params: string,
  ): Promise<BooleanValueModel> {
    return this.storageImplementation.remove(params);
  }
}
