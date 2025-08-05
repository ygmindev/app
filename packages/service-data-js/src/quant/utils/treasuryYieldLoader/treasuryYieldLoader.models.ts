import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';
import { type MultiDataLoaderModel } from '@service/data/core/utils/MultiDataLoader/MultiDataLoader.models';

export type TreasuryYieldLoaderModel = MultiDataLoaderModel<TreasuryRateModel>;
