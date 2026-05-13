from os import getcwd, path
from typing import Tuple, Unpack

from lib_shared.path.utils.from_working.from_working_models import FromWorkingModel


def _from_working(
    *params: Unpack[Tuple[str, ...]],
) -> str:
    params = params or ()
    return path.join(getcwd(), *params)


from_working: FromWorkingModel = _from_working
