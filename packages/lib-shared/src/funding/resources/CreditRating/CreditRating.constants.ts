import { type CreditRatingCategoryModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const CREDIT_RATING_RESOURCE_NAME = 'CreditRating';

export enum CREDIT_RATING_CATEGORY {
  A = 'A',
  AA = 'AA',
  AAA = 'AAA',
  AAm = 'AAm',
  AAp = 'AAp',
  Am = 'Am',
  Ap = 'Ap',
  B = 'B',
  BB = 'BB',
  BBB = 'BBB',
  BBBm = 'BBBm',
  BBBp = 'BBBp',
  BBm = 'BBm',
  BBp = 'BBp',
  Bm = 'Bm',
  Bp = 'Bp',
  CCC = 'CCC',
  CCCm = 'CCCm',
  CCCp = 'CCCp',
  D = 'D',
}

export enum CREDIT_RATING_WATCH {
  NEGATIVE = 'negative',

  NETURAL = 'neutral',

  POSITIVE = 'positive',
}

export const CREDIT_RATING_CATEGORY_RANK: Record<CreditRatingCategoryModel, number> = {
  [CREDIT_RATING_CATEGORY.AAA]: 1,
  [CREDIT_RATING_CATEGORY.AAp]: 2,
  [CREDIT_RATING_CATEGORY.AA]: 3,
  [CREDIT_RATING_CATEGORY.AAm]: 4,
  [CREDIT_RATING_CATEGORY.Ap]: 5,
  [CREDIT_RATING_CATEGORY.A]: 6,
  [CREDIT_RATING_CATEGORY.Am]: 7,
  [CREDIT_RATING_CATEGORY.BBBp]: 8,
  [CREDIT_RATING_CATEGORY.BBB]: 9,
  [CREDIT_RATING_CATEGORY.BBBm]: 10,
  [CREDIT_RATING_CATEGORY.BBp]: 11,
  [CREDIT_RATING_CATEGORY.BB]: 12,
  [CREDIT_RATING_CATEGORY.BBm]: 13,
  [CREDIT_RATING_CATEGORY.Bp]: 14,
  [CREDIT_RATING_CATEGORY.B]: 15,
  [CREDIT_RATING_CATEGORY.Bm]: 16,
  [CREDIT_RATING_CATEGORY.CCCp]: 17,
  [CREDIT_RATING_CATEGORY.CCC]: 18,
  [CREDIT_RATING_CATEGORY.CCCm]: 19,
  [CREDIT_RATING_CATEGORY.D]: 20,
};
