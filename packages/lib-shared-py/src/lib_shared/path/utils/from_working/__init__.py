from os import getcwd, path
from typing import Unpack

from lib_shared.path.utils.from_working.from_working_models import (
    FromWorkingModel,
    FromWorkingParamsModel,
)


def from_working(*params: Unpack[FromWorkingParamsModel]) -> FromWorkingModel:
    params = params or ()
    return path.join(getcwd(), *params)
