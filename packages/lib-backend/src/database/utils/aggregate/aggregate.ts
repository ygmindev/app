import {
  type AggregateModel,
  type AggregateParamsModel,
} from '@lib/backend/database/utils/aggregate/aggregate.models';
import { getFilter } from '@lib/backend/database/utils/Database/_Database';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { flattenObject } from '@lib/shared/core/utils/flattenObject/flattenObject';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const aggregate = <
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
>({
  filter,
  name,
  options,
}: AggregateParamsModel<TType, TForm, TRoot>): AggregateModel => {
  const nameF = `$${name}`;
  return filterNil([
    { $unwind: nameF },
    { $match: getFilter(filter, name) },
    options?.project && { $project: flattenObject({ [name]: options.project }) },
    { $group: { _id: '$_id', [name]: { $push: nameF } } },
  ]);
};
