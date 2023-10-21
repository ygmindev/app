import { type CreditRatingValueModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const CREDIT_RATING_RESOURCE_NAME = 'CreditRating';

export enum CREDIT_RATING_VALUE {
  A = 'A',
  AA = 'AA',
  AAA = 'AAA',
  AAm = 'AA-',
  AAp = 'AA+',
  Am = 'A-',
  Ap = 'A+',
  B = 'B',
  BB = 'BB',
  BBB = 'BBB',
  BBBm = 'BBB-',
  BBBp = 'BBB+',
  BBm = 'BB-',
  BBp = 'BB+',
  Bm = 'B-',
  Bp = 'B+',
  CCC = 'CCC',
  CCCm = 'CCC-',
  CCCp = 'CCC+',
  D = 'D',
}

export enum CREDIT_RATING_WATCH {
  NEGATIVE = 'negative',

  NETURAL = 'neutral',

  POSITIVE = 'positive',
}

export const CREDIT_RATING_VALUE_RANK: Record<CreditRatingValueModel, number> = {
  [CREDIT_RATING_VALUE.AAA]: 1,
  [CREDIT_RATING_VALUE.AAp]: 2,
  [CREDIT_RATING_VALUE.AA]: 3,
  [CREDIT_RATING_VALUE.AAm]: 4,
  [CREDIT_RATING_VALUE.Ap]: 5,
  [CREDIT_RATING_VALUE.A]: 6,
  [CREDIT_RATING_VALUE.Am]: 7,
  [CREDIT_RATING_VALUE.BBBp]: 8,
  [CREDIT_RATING_VALUE.BBB]: 9,
  [CREDIT_RATING_VALUE.BBBm]: 10,
  [CREDIT_RATING_VALUE.BBp]: 11,
  [CREDIT_RATING_VALUE.BB]: 12,
  [CREDIT_RATING_VALUE.BBm]: 13,
  [CREDIT_RATING_VALUE.Bp]: 14,
  [CREDIT_RATING_VALUE.B]: 15,
  [CREDIT_RATING_VALUE.Bm]: 16,
  [CREDIT_RATING_VALUE.CCCp]: 17,
  [CREDIT_RATING_VALUE.CCC]: 18,
  [CREDIT_RATING_VALUE.CCCm]: 19,
  [CREDIT_RATING_VALUE.D]: 20,
};
