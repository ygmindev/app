import { type AppTaskParamsModel } from '@tool/task/core/core.models';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export type ServerDevParamsModel = NodeDevParamsModel & AppTaskParamsModel;

export type ServerDevModel = NodeDevModel;
