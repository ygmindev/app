import {
  type GetConnectionModel,
  type GetConnectionParamsModel,
} from '@lib/backend/database/utils/getConnection/getConnection.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { getOffsetWithDefault, offsetToCursor } from 'graphql-relay';

export const getConnection = async <TType, TRoot = undefined>(
  { count, getMany, input = {}, pagination = {} }: GetConnectionParamsModel<TType, TRoot>,
  context?: RequestContextModel,
): Promise<GetConnectionModel<TType, TRoot>> => {
  const { after, before, first, last } = pagination;
  const beforeOffset = getOffsetWithDefault(before, count);
  const afterOffset = getOffsetWithDefault(after, -1);
  let startOffset = Math.max(-1, afterOffset) + 1;
  let endOffset = Math.min(beforeOffset, count);
  first && (endOffset = Math.min(endOffset, startOffset + first));
  last && (startOffset = Math.max(startOffset, endOffset - last));
  const skip = Math.max(startOffset, 0);
  const take = Math.max(endOffset - startOffset, 1);
  const { result, root } = await getMany({ ...input, options: { skip, take } }, context);
  if (result && result.length) {
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
    return { result: { edges, pageInfo }, root };
  }
  return {
    result: {
      edges: [],
      pageInfo: { endCursor: '', hasNextPage: false, hasPreviousPage: false, startCursor: '' },
    },
    root,
  };
};
