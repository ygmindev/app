import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '#lib-frontend/core/core.models';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { USER_OUTPUT_FIELDS } from '#lib-frontend/user/hooks/useUserResource/useUserResource.constants';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const { query: get } = useResourceMethod({
    fields: USER_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.GET,
    name: USER_RESOURCE_NAME,
  });

  const { data, error, isError, isLoading } = useQuery('a2', async () => {
    await sleep(3);
    return get({ filter: { _id: '64927d6ee1420f18af63a374' } });
  });

  return (
    <Wrapper s>
      <Text>{JSON.stringify(data)}</Text>
    </Wrapper>
  );
};
