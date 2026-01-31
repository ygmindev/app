import { databaseConfig as configBase } from '@lib/config/database/database.mongo';
import { Event } from '@lib/model/kfn/Event/Event.entity';

export const databaseConfig = configBase.extend(() => ({
  entities: [Event],
}));
