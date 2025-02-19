import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import PubSub from 'pubsub-js';

export class _PubSub<TType extends PubSubSchemaModel> implements _PubSubModel<TType> {
  close(): void {
    PubSub.clearAllSubscriptions();
  }

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, ...params: TType[TKey]): void {
    PubSub.publishSync(topic, params);
  }

  subscribeSync<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (params: TType[TKey]) => void,
  ): void {
    PubSub.subscribe(topic, (_, data) => handler(data as TType[TKey]));
  }

  unsubscribe<TKey extends StringKeyModel<TType>>(topic: TKey): void {
    PubSub.unsubscribe(topic);
  }
}

// TODO: run redis in production

// import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
// import { Redis } from 'ioredis';

// export class _PubSub implements _PubSubModel {
//   protected pub: Redis;
//   protected sub: Redis;

//   constructor() {
//     this.pub = new Redis();
//     this.sub = new Redis();
//   }

//   close(): void {
//     void this.pub.unsubscribe();
//     void this.sub.unsubscribe();
//   }

//   publish<TType extends unknown>(topic: string, params?: TType): void {
//     void this.pub.publish(topic, params ? JSON.stringify(params) : '');
//   }

//   subscribe<TType extends unknown>(topic: string, handler: (params?: TType) => void): void {
//     this.sub.on(topic ?? 'message', (data: TType) => {
//       let dataF = data;
//       try {
//         dataF = JSON.parse(dataF as string) as TType;
//       } catch (_) {}
//       void handler(dataF);
//     });
//   }

//   unsubscribe(topic: string): void {
//     void this.pub.unsubscribe(topic);
//     void this.sub.unsubscribe(topic);
//   }
// }
