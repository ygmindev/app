import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { type EdgeParamsModel } from '#lib-backend/resource/utils/Edge/Edge.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { type EdgeModel } from '#lib-shared/resource/utils/Edge/Edge.models';

export const Edge = <TType extends unknown>({
  Resource,
  name,
}: EdgeParamsModel<TType>): ClassModel<EdgeModel<TType>> => {
  const nameF = `${name}Edge`;

  @withEntity({ name: nameF })
  class EdgeF implements EdgeModel<TType> {
    @withField({ Resource })
    node!: TType;

    @withField()
    cursor!: string;
  }

  return EdgeF;
};
