export enum WORKFLOW_EXECUTION {
  PARALLEL = 'parallel',
  SEQUENTIAL = 'sequential',
}

export const WORKFLOW_RETRY_DEFAULT = 3;

export const WORKFLOW_INTERVAL_DEFAULT = 1000;

export const WORKFLOW_DURATION_DEFAULT = 60 * 60e3;
