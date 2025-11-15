import { template } from '@lib/backend/core/utils/template/template';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { _SmsClient } from '@lib/backend/notification/utils/SmsClient/_SmsClient';
import {
  type SmsClientModel,
  type SmsMessageModel,
} from '@lib/backend/notification/utils/SmsClient/SmsClient.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import isString from 'lodash/isString';

@withContainer()
export class SmsClient extends _SmsClient implements SmsClientModel {
  constructor() {
    const environment = Container.get(Environment);
    super({
      id: environment.variables.SERVER_TWILIO_SID ?? '',
      secret: environment.variables.SERVER_TWILIO_TOKEN ?? '',
    });
  }

  async send<TType extends unknown>({ body, from, to }: SmsMessageModel<TType>): Promise<void> {
    const bodyF = isString(body) ? body : await template(body);
    await super.send({ body: bodyF, from, to });
  }
}
