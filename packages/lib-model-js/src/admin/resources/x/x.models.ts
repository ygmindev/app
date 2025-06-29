import { type yModel } from '@lib/model/admin/resources/y/y.models';

export type xModel = {
  x1: number;
  x2: yModel;
  y2: Array<yModel>;
};
