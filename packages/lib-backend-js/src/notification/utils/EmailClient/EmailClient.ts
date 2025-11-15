import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { _EmailClient } from '@lib/backend/notification/utils/EmailClient/_EmailClient';
import {
  type EmailClientModel,
  type EmailMessageModel,
} from '@lib/backend/notification/utils/EmailClient/EmailClient.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

@withContainer()
export class EmailClient extends _EmailClient implements EmailClientModel {
  constructor() {
    const environment = Container.get(Environment);
    super({
      host: environment.variables.SERVER_EMAIL_HOST ?? '',
      password: environment.variables.SERVER_EMAIL_PASSWORD ?? '',
      port: environment.variables.SERVER_EMAIL_PORT ?? '',
      templateDir: fromStatic('templates'),
      username: environment.variables.SERVER_EMAIL_USERNAME ?? '',
    });
  }

  async send<TType extends unknown>(params: EmailMessageModel<TType>): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
      return super.send(params);
    }
    logger.info(`email: ${stringify(params)}`);
  }
}
