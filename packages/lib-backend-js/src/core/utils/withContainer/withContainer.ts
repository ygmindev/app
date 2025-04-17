import { _withContainer } from '@lib/backend/core/utils/withContainer/_withContainer';
import { type WithContainerParamsModel } from '@lib/backend/core/utils/withContainer/withContainer..models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const withContainer =
  ({ name }: WithContainerParamsModel = {}) =>
  <TType extends ClassModel>(target: TType) => {
    _withContainer()(target);
    name && Container.set<TType>(name, target);
    return target;
  };
