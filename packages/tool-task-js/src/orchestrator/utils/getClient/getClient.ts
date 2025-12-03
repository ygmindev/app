import { Container } from '@lib/shared/core/utils/Container/Container';
import { Client } from '@tool/task/orchestrator/utils/Client/Client';
import { type ClientModel } from '@tool/task/orchestrator/utils/Client/Client.models';
import {
  type GetClientModel,
  type GetClientParamsModel,
} from '@tool/task/orchestrator/utils/getClient/getClient.models';

export const getClient = async ({ id }: GetClientParamsModel = {}): Promise<GetClientModel> => {
  let client: ClientModel;
  try {
    client = Container.get(Client, id);
  } catch {
    client = new Client({ id });
    Container.set(Client, client, id);
  }
  await client?.initialize();
  return client;
};
