from pydash import kebab_case, trim_start

from lib_shared.route.utils.trim_pathname_models import (
    TrimPathnameModel,
    TrimPathnameParamsModel,
)


def trim_pathname(params: TrimPathnameParamsModel) -> TrimPathnameModel:
    pathname = trim_start(params, "/")
    pathname = map(kebab_case, pathname.split("/"))
    pathname = "/".join(pathname)
    return f"/{pathname}"
