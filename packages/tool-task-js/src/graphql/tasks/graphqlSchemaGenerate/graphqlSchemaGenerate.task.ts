import { children } from '@lib/backend/file/utils/children/children';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type Config } from '@lib/config/utils/Config/Config';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import {
  type GraphqlSchemaGenerateModel,
  type GraphqlSchemaGenerateParamsModel,
} from '@tool/task/graphql/tasks/graphqlSchemaGenerate/graphqlSchemaGenerate.models';
import { type GraphQLSchema } from 'graphql';

export const graphqlSchemaGenerate = buildTask<
  GraphqlSchemaGenerateParamsModel,
  GraphqlSchemaGenerateModel
>({
  prompts: [
    {
      isAll: true,
      key: 'names',
      options: filterNil(
        children(fromConfig('graphql')).map((v) => {
          const matched = v.name.match(/(?<=graphql\.)(?!base\.|models\.)(.*?)(?=\.ts)/);
          if (matched) {
            return { id: matched[0] };
          }
          return null;
        }),
      ),
      type: PROMPT_TYPE.MULTIPLE,
    },
  ],

  task: async ({ names }) => {
    await Promise.all(
      names.map(async (v) => {
        const { graphqlConfig } = (await import(fromConfig('graphql', `graphql.${v}.ts`))) as {
          graphqlConfig: Config<GraphqlConfigModel, GraphQLSchema>;
        };
        graphqlConfig.config();
      }),
    );
  },
});
