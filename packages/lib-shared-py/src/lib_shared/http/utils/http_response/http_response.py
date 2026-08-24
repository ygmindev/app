from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.http.utils.http_response.constants import HttpStatusCode


class HttpResponse(BaseModel):
    status_code: HttpStatusCode = HttpStatusCode.OK
    body: dict | None = None
