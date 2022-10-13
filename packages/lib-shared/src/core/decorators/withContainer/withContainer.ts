import type { ConstructorModel } from '@lib/shared/core/core.models';
import { _withContainer } from '@lib/shared/core/decorators/withContainer/_withContainer';
import type { WithContainerParamsModel } from '@lib/shared/core/decorators/withContainer/withContainer..models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const withContainer =
  ({ name }: WithContainerParamsModel = {}) =>
  <TType extends ConstructorModel>(target: TType) => {
    _withContainer()(target);
    name && Container.set<TType>(name, target);
    return target;
  };
