import { type ConfigModel, type ConfigParamsModel } from '@lib/config/utils/Config/Config.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import cloneDeep from 'lodash/cloneDeep';

export class Config<TParams, TType = undefined> implements ConfigModel<TParams, TType> {
  protected _config: (TType extends undefined ? never : (params: TParams) => TType) | undefined;
  protected _params: Array<() => TParams | PartialDeepModel<TParams>> = [];

  constructor({ config, params }: ConfigParamsModel<TParams, TType>) {
    this._params = [params];
    this._config = config;
  }

  config(
    params?: PartialDeepModel<TParams>,
    strategy: MERGE_STRATEGY = MERGE_STRATEGY.DEEP_PREPEND,
  ): TType {
    return (
      this._config?.(merge(filterNil([params, this.params(strategy)]))) ?? (undefined as TType)
    );
  }

  extend(v: () => PartialDeepModel<TParams>): Config<TParams, TType> {
    const config = cloneDeep(this);
    config._params = [...config._params, v];
    return config;
  }

  params(strategy: MERGE_STRATEGY = MERGE_STRATEGY.DEEP_PREPEND): TParams {
    return merge(
      this._params.map((v) => v()),
      strategy,
    );
  }
}
