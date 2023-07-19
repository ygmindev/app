import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';
import { build } from '#tool-task/platform/web/templates/build/build';
import { dev } from '#tool-task/platform/web/templates/dev/dev';

const tasks = [...nodeTasks(), dev, build];

export default tasks;
