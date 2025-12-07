import { _Client } from '@tool/task/orchestrator/utils/Client/_Client';
import {
  type ClientModel,
  type ClientParamsModel,
} from '@tool/task/orchestrator/utils/Client/Client.models';

export class Client extends _Client implements ClientModel {
  constructor(params: ClientParamsModel = {}) {
    super(params);
  }
}
