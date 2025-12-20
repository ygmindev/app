import { Container } from '@lib/shared/core/utils/Container/Container';
import { Client } from '@tool/task/orchestrator/utils/Client/Client';
import { type ClientModel } from '@tool/task/orchestrator/utils/Client/Client.models';
import {
  type GetClientModel,
  type GetClientParamsModel,
} from '@tool/task/orchestrator/utils/getClient/getClient.models';

export const getClient = async ({ id }: GetClientParamsModel = {}): Promise<GetClientModel> => {
  const idF = id ?? 'client';
  let client: ClientModel;
  try {
    client = Container.get(Client, idF);
  } catch {
    client = new Client({ id: idF });
    await client?.initialize();
    Container.set(Client, client, idF);
  }
  return client;
};
