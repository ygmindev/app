export type EntityResourceModel = {
  _id: string;

  created: Date;

  isFixture?: boolean;

  beforeCreate?(): Promise<void>;
};
