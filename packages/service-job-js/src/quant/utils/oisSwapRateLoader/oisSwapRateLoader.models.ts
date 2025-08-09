import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { type MultiSourceDataLoaderModel } from 'packages/service-job-js/src/core/utils/MultiSourceDataLoader/MultiSourceDataLoader.models';

export type OisSwapRateLoaderModel = MultiSourceDataLoaderModel<CurveModel>;
