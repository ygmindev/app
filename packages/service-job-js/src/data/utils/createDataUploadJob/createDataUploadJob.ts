import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { createJob } from '@service/job/core/utils/createJob/createJob';
import {
  type CreateDataUploadJobModel,
  type CreateDataUploadJobParamsModel,
} from '@service/job/data/utils/createDataUploadJob/createDataUploadJob.models';

export const createDataUploadJob = async <TType extends SourcedEntityResourceModel>({
  loaders,
  ...params
}: CreateDataUploadJobParamsModel<TType>): Promise<CreateDataUploadJobModel> =>
  createJob({
    ...params,
    job: async () => {
      const { cleanUp } = await initialize();
      for (const loader of loaders) {
        try {
          await loader.upload();
          logger.success(`Upload complete: ${loader.name}`);
        } catch (e) {
          logger.fail(`Upload failed: ${loader.name}`, e);
        }
      }
      await cleanUp?.();
    },
  });
