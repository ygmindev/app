import { _withContainer } from '@lib/backend/core/utils/withContainer/_withContainer';
import {
  type WithContainerModel,
  type WithContainerParamsModel,
} from '@lib/backend/core/utils/withContainer/withContainer.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const withContainer =
  ({ name }: WithContainerParamsModel = {}): WithContainerModel =>
  (target) => {
    _withContainer()(target);
    Container.set(target as unknown as ClassModel, name);
    return target;
  };
