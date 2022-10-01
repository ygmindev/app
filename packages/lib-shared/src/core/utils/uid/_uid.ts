import { uniqueId } from 'lodash';

export const _uid = (prefix?: string): string => `${prefix || 'uid'}-${uniqueId()}`;
