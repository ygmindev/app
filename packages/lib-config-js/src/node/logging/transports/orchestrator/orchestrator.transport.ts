import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type OrchestratorTransportParamsModel } from '@lib/config/node/logging/transports/orchestrator/orchestrator.transport.models';
import { Transport } from '@lib/config/node/logging/utils/Transport/Transport';
import { type TransportContextModel } from '@lib/config/node/logging/utils/Transport/Transport.model';
import {
  LOG_MESSAGE_RESOURCE_NAME,
  type LOG_MESSAGE_TYPE,
} from '@lib/model/logging/LogMessage/LogMessage.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

class OrchestratorTransport extends Transport<OrchestratorTransportParamsModel> {
  handle(params?: OrchestratorTransportParamsModel) {
    return async (context: TransportContextModel) => {
      if (context?.ns) {
        const pubSub = Container.get(PubSub);
        void pubSub.publish(
          LOG_MESSAGE_RESOURCE_NAME,
          {
            _id: `${context.ns}.${uid()}`,
            created: new DateTime(context.time),
            level: context.level,
            message: context.msg,
            type: context.type as LOG_MESSAGE_TYPE,
          },
          [context.ns],
        );
      }
    };
  }

  async onInitialize(): Promise<void> {
    await initialize();
  }
}

export default new OrchestratorTransport().handler;
