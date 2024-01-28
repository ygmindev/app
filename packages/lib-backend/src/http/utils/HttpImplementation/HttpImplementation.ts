import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { type HttpImplementationModel } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation.models';
import { HttpImplementation as HttpImplementationBase } from '@lib/shared/http/utils/HttpImplementation/HttpImplementation';

@withContainer()
export class HttpImplementation extends HttpImplementationBase implements HttpImplementationModel {}
