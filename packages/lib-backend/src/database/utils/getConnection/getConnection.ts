import type { GetConnectionParamsModel } from '@lib/backend/database/utils/getConnection/getConnection.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { getOffsetWithDefault, offsetToCursor } from 'graphql-relay';

export const getConnection = async <TType, TRoot = undefined>({
  count,
  filter,
  getMany,
  pagination,
}: GetConnectionParamsModel<TType, TRoot>): Promise<ConnectionModel<TType> | undefined> => {
  const { after, before, first, last } = pagination;
  const beforeOffset = getOffsetWithDefault(before, count);
  const afterOffset = getOffsetWithDefault(after, -1);
  let startOffset = Math.max(-1, afterOffset) + 1;
  let endOffset = Math.min(beforeOffset, count);
  if (first) {
    endOffset = Math.min(endOffset, startOffset + first);
  }
  if (last) {
    startOffset = Math.max(startOffset, endOffset - last);
  }
  const skip = Math.max(startOffset, 0);
  const take = Math.max(endOffset - startOffset, 1);
  const { result } = await getMany({ filter, options: { skip, take } });
  if (result) {
    const edges = result.map((node, index) => ({
      cursor: offsetToCursor(startOffset + index),
      node,
    }));
    const { 0: firstEdge, length, [length - 1]: lastEdge } = edges;
    const lowerBound = after ? afterOffset + 1 : 0;
    const upperBound = before ? Math.min(beforeOffset, count) : count;
    const pageInfo = {
      endCursor: lastEdge.cursor,
      hasNextPage: first ? endOffset < upperBound : false,
      hasPreviousPage: last ? startOffset > lowerBound : false,
      startCursor: firstEdge.cursor,
    };
    return { edges, pageInfo };
  }
  return undefined;
};
