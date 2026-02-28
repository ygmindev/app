export type _JobConfigModel = {
  jobs: Record<
    string,
    {
      docker?: {
        auth: {
          password: string;
          username: string;
        };
        image: string;
      };

      environment?: Record<string, string>;

      steps: Array<{ command: string; name: string }>;
    }
  >;

  version: number;

  workflows: {
    build?: {
      jobs:
        | string
        | Array<
            Record<
              string,
              {
                filters: {
                  branches: {
                    only: string;
                  };
                };
              }
            >
          >;
    };
    scheduled?: {
      jobs: Array<string>;
      triggers: Array<{
        schedule: {
          cron: string;
          filters?: {
            branches: {
              only: string;
            };
          };
        };
      }>;
    };
  };
};
