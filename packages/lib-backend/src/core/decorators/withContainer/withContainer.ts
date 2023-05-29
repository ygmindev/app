import { _withContainer } from '@lib/backend/core/decorators/withContainer/_withContainer';
import type { WithContainerParamsModel } from '@lib/backend/core/decorators/withContainer/withContainer..models';
import { Container } from '@lib/backend/core/utils/Container/Container';
import type { ConstructorModel } from '@lib/shared/core/core.models';

export const withContainer =
  ({ name }: WithContainerParamsModel = {}) =>
  <TType extends ConstructorModel>(target: TType) => {
    _withContainer()(target);
    name && Container.set<TType>(name, target);
    return target;
  };
