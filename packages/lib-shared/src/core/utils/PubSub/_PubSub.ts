import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
import mitt, { type Emitter } from 'mitt';

export class _PubSub implements _PubSubModel {
  protected emitter: Emitter<Record<string, unknown>>;

  constructor() {
    this.emitter = mitt();
  }

  clear(): void {
    this.emitter.all.clear();
  }

  publish<TType extends unknown>(name: string, params: TType): void {
    this.emitter.emit(name, params);
  }

  subscribe<TType extends unknown>(name: string, handler: (params: TType) => void): void {
    this.emitter.on(name, handler as (params: unknown) => void);
  }

  unsubscribe<TType extends unknown>(name: string, handler: (params: TType) => void): void {
    this.emitter.off(name, handler as (params: unknown) => void);
  }
}
