from lib_shared.route.utils.trim_pathname_models import (
    TrimPathnameModel,
    TrimPathnameParamsModel,
)

from pydash import kebab_case, trim_start


def trim_pathname(params: TrimPathnameParamsModel) -> TrimPathnameModel:
    return f"/{kebab_case(trim_start(params, '/'))}"
