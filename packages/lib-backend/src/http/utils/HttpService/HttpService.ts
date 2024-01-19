import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { type HttpServiceModel } from '@lib/backend/http/utils/HttpService/HttpService.models';
import { HttpService as HttpServiceBase } from '@lib/shared/http/utils/HttpService/HttpService';

@withContainer()
export class HttpService extends HttpServiceBase implements HttpServiceModel {}
