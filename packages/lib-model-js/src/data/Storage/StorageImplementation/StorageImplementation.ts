import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { StorageClient } from '@lib/backend/data/utils/StorageClient/StorageClient';
import { StorageClientModel } from '@lib/backend/data/utils/StorageClient/StorageClient.models';
import { RequestContextModel } from '@lib/config/api/api.models';
import { StorageModel } from '@lib/model/data/Storage/Storage.models';
import { type StorageImplementationModel } from '@lib/model/data/Storage/StorageImplementation/StorageImplementation.models';
import { ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
export class StorageImplementation implements StorageImplementationModel {
  @withInject(StorageClient) storageClient!: StorageClientModel;

  async create(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, StorageModel, undefined>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, StorageModel, undefined>> {
    if (!input?.form) throw new NotFoundError('form');
    const { src, uri } = await this.storageClient.signUri(input.form);
    return {
      result: {
        ...input.form,
        src,
        uri,
      },
    };
  }

  async createMany(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, StorageModel, undefined>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, StorageModel, undefined>> {
    if (!input?.form) throw new NotFoundError('form');
    const result = filterNil(
      await mapSequence(
        input.form.map((v) => async () => (await this.create({ form: v }, context)).result),
      ),
    );
    return { result };
  }
}
