from typing import Optional

from lib_shared.http.utils.uri.uri_models import TType, UriModel


class Uri(UriModel[TType]):
    host: Optional[str] = None
    params: Optional[TType] = None
    pathname: Optional[str] = None
    port: Optional[str | int] = None
