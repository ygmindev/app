import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PageInfo } from '@lib/model/resource/PageInfo/PageInfo';
import { type PageInfoModel } from '@lib/model/resource/PageInfo/PageInfo.models';
import {
  PaginatableModel,
  PaginatableParamsModel,
} from '@lib/model/resource/Paginatable/Paginatable.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';

export const Paginatable = <TType extends unknown>({
  Resource,
  name,
}: PaginatableParamsModel<TType>): ResourceClassModel<PaginatableModel<TType>> => {
  @withEntity({ name: `${name}Paginatable` })
  class PaginatableF implements PaginatableModel<TType> {
    @withField({ Resource, isArray: true })
    items!: PartialArrayModel<TType>;

    @withField({ isOptional: true })
    nextCursor?: string;

    @withField({ Resource: () => PageInfo, isOptional: true })
    pageInfo?: PageInfoModel;
  }
  return PaginatableF;
};
