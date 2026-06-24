export enum LlmPayloadType {
  END = 'end',
  ERROR = 'error',
  START = 'start',
  UPDATE = 'update',
}

export enum MessageRole {
  ASSISTANT = 'assistant',
  SYSTEM = 'system',
  TOOL = 'tool',
  USER = 'user',
}
