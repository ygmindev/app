import { _Database } from '@lib/backend/database/utils/Database/_Database';
import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';

export class Database extends _Database implements DatabaseModel {}
