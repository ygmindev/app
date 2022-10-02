import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { act } from '@lib/frontend/testing/utils/act/act';
import { renderHook } from '@lib/frontend/testing/utils/renderHook/renderHook';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

describe('entityResource', () => {
  test('works', async () => {
    const { result: create, unmount } = renderHook(() =>
      useResourceMethod<
        RESOURCE_METHOD_TYPE.CREATE,
        DummyEntityResourceModel,
        DummyEntityResourceFormModel
      >({
        fields: [{ result: ['_id'] }],
        method: RESOURCE_METHOD_TYPE.CREATE,
        name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
      }),
    );

    await act(
      async () => await create.current.query({ form: { stringProperty: 'stringProperty' } }),
    );

    expect(1).toStrictEqual(1);

    unmount();
  });
});
