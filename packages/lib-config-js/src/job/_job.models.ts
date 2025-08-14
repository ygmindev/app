export type _JobConfigModel = Array<{
  jobs: Record<
    string,
    {
      'runs-on': string;
      steps: Array<{
        name: string;
        run?: string;
        uses?: string;
        with?: {
          password: string;
          registry: string;
          username: string;
        };
      }>;
    }
  >;

  name: string;

  on: {
    schedule: Array<{
      cron: string;
    }>;
  };
}>;
