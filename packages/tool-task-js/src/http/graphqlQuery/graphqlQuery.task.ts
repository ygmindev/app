import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type GraphqlQueryParamsModel } from '@tool/task/http/graphqlQuery/graphqlQuery.models';

const graphqlQuery: TaskParamsModel<GraphqlQueryParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'graphql-query',

  task: [
    async ({ options }) => {
      const query = options?.query ?? '123';
      const variables = options?.variables;
      const host = options?.host ?? process.env.SERVER_APP_HOST;
      const port = options?.port ?? process.env.SERVER_APP_PORT;
      const pathname = options?.pathname ?? `api/${GRAPHQL}`;
      if (!query) {
        throw new NotFoundError('query');
      }
      const email = 'x@x.x';
      const result = (await Container.get(HttpImplementation).post({
        params: {
          query:
            'query UserGet($input: UserGetInput) { UserGet(input: $input) { result { _id email } } }',
          variables: { input: { filter: [{ field: 'email', stringValue: email }] } },
        },
        url: uri({ host, pathname, port }),
      })) as { data: { UserGet: ResourceOutputModel<RESOURCE_METHOD_TYPE.GET, UserModel> } };
      if (result.data.UserGet.result?.email !== email) {
        throw new Error(`${result.data.UserGet.result?.email} vs. ${email}`);
      }
      console.warn(result.data.UserGet.result?.email);
      logger.info('Success');
    },
  ],
};

export default graphqlQuery;
