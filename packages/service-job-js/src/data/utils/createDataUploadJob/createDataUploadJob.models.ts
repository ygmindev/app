import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import {
  type CreateJobModel,
  type CreateJobParamsModel,
} from '@service/job/core/utils/createJob/createJob.models';
import { type DataLoaderModel } from '@service/job/data/utils/DataLoader/DataLoader.models';

export type CreateDataUploadJobParamsModel<TType extends SourcedEntityResourceModel> = Omit<
  CreateJobParamsModel,
  'job'
> & {
  loaders: Array<DataLoaderModel<TType>>;
};

export type CreateDataUploadJobModel = CreateJobModel;
