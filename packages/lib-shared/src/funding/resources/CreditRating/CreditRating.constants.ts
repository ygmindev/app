import { type CreditRatingStepModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const CREDIT_RATING_RESOURCE_NAME = 'CreditRating';

export enum CREDIT_RATING_STEP {
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

export const CREDIT_RATING_STEP_RANK: Record<CreditRatingStepModel, number> = {
  [CREDIT_RATING_STEP.AAA]: 1,
  [CREDIT_RATING_STEP.AAp]: 2,
  [CREDIT_RATING_STEP.AA]: 3,
  [CREDIT_RATING_STEP.AAm]: 4,
  [CREDIT_RATING_STEP.Ap]: 5,
  [CREDIT_RATING_STEP.A]: 6,
  [CREDIT_RATING_STEP.Am]: 7,
  [CREDIT_RATING_STEP.BBBp]: 8,
  [CREDIT_RATING_STEP.BBB]: 9,
  [CREDIT_RATING_STEP.BBBm]: 10,
  [CREDIT_RATING_STEP.BBp]: 11,
  [CREDIT_RATING_STEP.BB]: 12,
  [CREDIT_RATING_STEP.BBm]: 13,
  [CREDIT_RATING_STEP.Bp]: 14,
  [CREDIT_RATING_STEP.B]: 15,
  [CREDIT_RATING_STEP.Bm]: 16,
  [CREDIT_RATING_STEP.CCCp]: 17,
  [CREDIT_RATING_STEP.CCC]: 18,
  [CREDIT_RATING_STEP.CCCm]: 19,
  [CREDIT_RATING_STEP.D]: 20,
};
