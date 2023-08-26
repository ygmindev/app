import { type ValuePropsModel } from '#lib-frontend/core/core.models';
import { type FIELD_TYPE, type FIELD_TYPE_MORE } from '#lib-shared/form/form.constants';
import { type RangeModel, type RelativeDateModel } from '#lib-shared/form/form.models';

export type RangeFieldPropsModel =
  | ({ type: FIELD_TYPE.DATE } & ValuePropsModel<RangeModel<Date>>)
  | ({ type: FIELD_TYPE.NUMBER } & ValuePropsModel<RangeModel<number>>)
  | ({ type: FIELD_TYPE_MORE.RELATIVE_DATE } & ValuePropsModel<RangeModel<RelativeDateModel>>);
