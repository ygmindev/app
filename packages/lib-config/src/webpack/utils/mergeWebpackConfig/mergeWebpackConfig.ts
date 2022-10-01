import { loaderByName, removeLoaders } from '@craco/craco';
import type { PartialDeepModel } from '@lib/shared/core/core.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { cloneDeep, uniq } from 'lodash';
import type { Configuration } from 'webpack';

export const mergeWebpackConfig = (
  target: PartialDeepModel<Configuration>,
  source: PartialDeepModel<Configuration>,
): Configuration => {
  const _source = cloneDeep(source);
  const _loadersToRemove: Array<string> = [
    'css-loader',
    'postcss-loader',
    'sass-loader',
    'style-loader',
  ];
  const _pluginsToRemove: Array<string> = uniq(
    [
      'ModuleScopePlugin',
      ...(target.plugins || []).map((plugin) => plugin?.constructor.name),
      ...(target.resolve?.plugins || []).map((plugin) => plugin?.constructor.name),
    ].filter(Boolean) as Array<string>,
  );

  _loadersToRemove.forEach((loader) => removeLoaders(_source as never, loaderByName(loader)));
  _source.plugins = _source.plugins?.filter(
    (plugin) => !plugin?.constructor.name || !_pluginsToRemove.includes(plugin.constructor.name),
  );
  _source.resolve?.plugins &&
    (_source.resolve.plugins = _source.resolve.plugins.filter(
      (plugin) => !plugin?.constructor.name || !_pluginsToRemove.includes(plugin.constructor.name),
    ));
  if (_source.resolve?.extensions) {
    _source.resolve.extensions = [];
  }

  return merge({ strategy: MERGE_STRATEGY.DEEP_APPEND, values: [target, _source] });
};
