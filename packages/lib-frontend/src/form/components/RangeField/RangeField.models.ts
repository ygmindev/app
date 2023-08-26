import { type FieldPropsModel } from '#lib-frontend/form/form.models';
import { type FIELD_TYPE, type FIELD_TYPE_MORE } from '#lib-shared/form/form.constants';
import { type RangeModel, type RelativeDateModel } from '#lib-shared/form/form.models';

export type RangeFieldPropsModel =
  | ({ type: FIELD_TYPE.DATE } & FieldPropsModel<RangeModel<Date>>)
  | ({ type: FIELD_TYPE.NUMBER | FIELD_TYPE_MORE.NUMBER_POSITIVE } & FieldPropsModel<
      RangeModel<number>
    >)
  | ({ type: FIELD_TYPE_MORE.RELATIVE_DATE } & FieldPropsModel<RangeModel<RelativeDateModel>>);
