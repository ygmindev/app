export type _JobConfigModel = Array<{
  jobs: {
    'run-container': {
      'runs-on': string;
      steps: Array<{
        env?: Record<string, string>;
        name: string;
        run?: string;
        uses?: string;
        with?: {
          password: string;
          registry: string;
          username: string;
        };
      }>;
    };
  };

  name: string;

  on: {
    schedule: Array<{
      cron: string;
    }>;
  };
}>;
