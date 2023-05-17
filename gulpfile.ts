import { nodeRegister } from './packages/lib-shared/src/core/utils/nodeRegister/nodeRegister';
import { _taskConfig } from './packages/lib-config/src/core/task/_task';

nodeRegister();

export default _taskConfig();
