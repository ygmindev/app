import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type OrchestratorTransportParamsModel } from '@lib/config/node/logging/transports/orchestrator/orchestrator.transport.models';
import { Transport } from '@lib/config/node/logging/utils/Transport/Transport';
import { type TransportContextModel } from '@lib/config/node/logging/utils/Transport/Transport.model';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

class OrchestratorTransport extends Transport<OrchestratorTransportParamsModel> {
  handle(params?: OrchestratorTransportParamsModel) {
    const topic = params?.topic;
    return async (context: TransportContextModel) => {
      if (topic && context?.ns) {
        const pubSub = Container.get(PubSub);
        void pubSub.publish(`${topic}.${context.ns}`, context);
      }
    };
  }

  async onInitialize(): Promise<void> {
    await initialize();
  }
}

export default new OrchestratorTransport().handler;
