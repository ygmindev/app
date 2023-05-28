import { withContainer } from '@lib/backend/core/decorators/withContainer/withContainer';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { error, info, warn } from '@lib/shared/logging/utils/logger/logger';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel, TaskResultModel } from '@tool/task/core/core.models';
import { _TaskRegistry } from '@tool/task/core/utils/TaskRegistry/_TaskRegistry';
import type { TaskRegistryModel } from '@tool/task/core/utils/TaskRegistry/TaskRegistry.models';
import debounce from 'lodash/debounce';
import isString from 'lodash/isString';
import kebabCase from 'lodash/kebabCase';
import reduce from 'lodash/reduce';

@withContainer()
export class TaskRegistry extends _TaskRegistry implements TaskRegistryModel {
  protected _aliases: Record<string, string> = {};

  register = <TType = undefined>({
    environment,
    name,
    onAfter,
    onBefore,
    options,
    overrides,
    root,
    target,
    task,
  }: TaskParamsModel<TType>): void => {
    const _target = target && kebabCase(target);
    const _name = [_target, kebabCase(name)].filter(Boolean).join('-');
    const _alias = kebabCase(_name)
      .split('-')
      .map((p) => p.charAt(0))
      .join('');

    if (this._aliases[_alias]) {
      throw new DuplicateError(`alias ${_alias} (${_name}) exists`);
    }

    this._aliases[_alias] = _name;

    [_name, _alias].forEach((value) => {
      this._register(value, async () => {
        const _root = root ?? (target ? fromPackages(target) : fromRoot());
        process.chdir(_root);
        
        setEnvironment({ environment, overrides });
  
        const _onAfter =
        onAfter &&
        debounce(async () => {
          await sequence(onAfter.map((value) => (isString(value) ? this.get(value) : value)));
        });
  
      _onAfter &&
        ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach((event) =>
          process.on(event, async () => {
            _onAfter && (await _onAfter());
            process.exit();
          }),
        );
  
        onBefore &&
      (await sequence(onBefore.map((value) => (isString(value) ? this.get(value) : value))));
  
      try {
        const {
          error: _error,
          message,
          status,
        } = await task({ name: _name, options, root: _root, target: _target });
    
        _onAfter && (await _onAfter());
    
        switch (status) {
          case TASK_STATUS.SUCCESS: {
            info(`[${_name}] ${message || 'completed'}`);
            break;
          }
          case TASK_STATUS.WARNING: {
            warn(`[${_name}] ${message || 'completed with warnings'}`);
            break;
          }
          default: {
            error(`[${_name}] ${_error?.message || message || 'failed'}`);
            break;
          }
        }
      } catch (e) {
        error(`[${_name}] failed: ${(e as Error).stack}`);
      }
      });
    });
  };

  get registry(): Record<string, CallablePromiseModel<TaskResultModel>> {
    return reduce(
      super.registry,
      (result, v, k) => (k === 'default' ? result : { ...result, [k]: v }),
      {},
    );
  }
}
