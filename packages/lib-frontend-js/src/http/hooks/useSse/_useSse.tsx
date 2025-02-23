import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import {
  type _UseSseModel,
  type _UseSseParamsModel,
} from '@lib/frontend/http/hooks/useSse/_useSse.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const _useSse = ({
  onError,
  onMessage,
  uri: uriParams,
}: _UseSseParamsModel): _UseSseModel => {
  useAsync(async (isMounted) => {
    if (isMounted()) {
      const uriF = await uriParams();
      const es = new EventSource(uri(uriF));

      onMessage &&
        (es.onmessage = (event) => {
          const data = JSON.parse(event.data as string) as unknown;
          onMessage(data);
        });

      onError &&
        (es.onerror = (e) => {
          onError(e as unknown as Error);
        });

      return () => es.close();
    }
  }, []);
};
