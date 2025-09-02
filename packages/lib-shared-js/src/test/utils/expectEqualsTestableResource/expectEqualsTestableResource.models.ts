import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';
import {
  type ExpectEqualsModel,
  type ExpectEqualsParamsModel,
} from '@lib/shared/test/utils/expectEquals/expectEquals.models';

export type ExpectEqualsTestableResourceParamsModel<TType extends TestableResourceModel> =
  ExpectEqualsParamsModel<Partial<TType> | PartialArrayModel<TType>>;

export type ExpectEqualsTestableResourceModel = ExpectEqualsModel;
