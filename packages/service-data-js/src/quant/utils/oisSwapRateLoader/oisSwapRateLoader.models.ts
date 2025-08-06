import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { type MultiSourceDataLoaderModel } from '@service/data/core/utils/MultiSourceDataLoader/MultiSourceDataLoader.models';

export type OisSwapRateLoaderModel = MultiSourceDataLoaderModel<CurveModel>;
