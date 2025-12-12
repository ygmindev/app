import { type OrchestratorTransportParamsModel } from '@lib/config/node/logging/transports/orchestratorTransport/orchestratorTransport.models';
import { buildTransport } from '@lib/config/node/logging/utils/buildTransport/buildTransport';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

export default buildTransport<OrchestratorTransportParamsModel>({
  handler: (params) => {
    const topic = params?.topic;
    return async (context) => {
      if (context?.ns) {
        void Container.get(PubSub).publish(`${topic}:${context.ns}`, context);
      }
    };
  },
});
