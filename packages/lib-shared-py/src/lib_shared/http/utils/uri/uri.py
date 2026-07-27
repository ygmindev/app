from lib_shared.http.utils.uri.uri_models import TType, UriModel


class Uri(UriModel[TType]):
    host: str | None = None
    params: TType | None = None
    pathname: str | None = None
    port: str | int | None = None
