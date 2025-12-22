import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type OrchestratorTransportParamsModel } from '@lib/config/node/logging/transports/orchestrator/orchestrator.transport.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import build from 'pino-abstract-transport';

let initPromise: Promise<void> | null = null;

const ensureInitialized = async () => {
  if (!initPromise) {
    console.warn('\n@@@ ORCEHSTRATOR INIT\n');
    initPromise = initialize();
  }
  return initPromise;
};

export default async function (params: OrchestratorTransportParamsModel) {
  // 2. This runs once when the worker thread starts
  await ensureInitialized();

  return build(async function (source) {
    // 3. This loop runs for every log entry
    for await (const context of source) {
      const topic = params?.topic;
      if (topic && context?.ns) {
        const pubSub = Container.get(PubSub);
        // Using void to fire-and-forget
        void pubSub.publish(`${topic}.${context.ns}`, context);
      }
    }
  });
}
// import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
// import { type OrchestratorTransportParamsModel } from '@lib/config/node/logging/transports/orchestrator/orchestrator.transport.models';
// import { Transport } from '@lib/config/node/logging/utils/Transport/Transport';
// import { type TransportContextModel } from '@lib/config/node/logging/utils/Transport/Transport.model';
// import { Container } from '@lib/shared/core/utils/Container/Container';
// import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

// class OrchestratorTransport extends Transport<OrchestratorTransportParamsModel> {
//   handle(params?: OrchestratorTransportParamsModel) {
//     const topic = params?.topic;
//     return async (context: TransportContextModel) => {
//       if (topic && context?.ns) {
//         const pubSub = Container.get(PubSub);
//         void pubSub.publish(`${topic}.${context.ns}`, context);
//       }
//     };
//   }

//   async onInitialize(): Promise<void> {
//     console.warn('@@@ ORCEHSTRATOR INIT');
//     await initialize();
//   }
// }

// export default new OrchestratorTransport().handler;
