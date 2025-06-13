import { type TestScreenModel } from '@lib/backend/test/utils/TestScreen/TestScreen.models';

export type WithTestScreenParamsModel = {
  email?: boolean | string;
  testName: string;
};

export type WithTestScreenModel = {
  screen: TestScreenModel;
};
