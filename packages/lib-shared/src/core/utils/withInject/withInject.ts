import { type ClassModel } from '#lib-shared/core/core.models';
import { _withInject } from '#lib-shared/core/utils/withInject/_withInject';
import { type WithInjectModel } from '#lib-shared/core/utils/withInject/withInject.models';

export const withInject = <TType extends ClassModel>(value: TType): WithInjectModel =>
  _withInject(value);
