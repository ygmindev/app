import { relative } from 'path';

export const toRelative = (from: string, to: string): string => relative(from, to);
