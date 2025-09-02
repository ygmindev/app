export type EntityResourceModel = {
  _id: string;

  created: Date;

  id?: string;

  isFixture?: boolean;

  beforeCreate?(): Promise<void>;
};
