import { Container } from '@lib/backend/core/utils/Container/Container';
import { _withContainer } from '@lib/backend/core/utils/withContainer/_withContainer';
import { type WithContainerParamsModel } from '@lib/backend/core/utils/withContainer/withContainer..models';
import { type ClassModel } from '@lib/shared/core/core.models';

export const withContainer =
  ({ name }: WithContainerParamsModel = {}) =>
  <TType extends ClassModel>(target: TType) => {
    _withContainer()(target);
    name && Container.set<TType>(name, target);
    return target;
  };
