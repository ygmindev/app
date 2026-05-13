from os import path
from typing import Tuple, Unpack

from lib_shared.path.utils.from_root.from_root_models import (
    FromRootModel,
)

filepath = path.dirname(path.abspath(__file__))


def _from_root(
    *params: Unpack[Tuple[str, ...]],
) -> str:
    params = params or ()
    return path.abspath(path.join(filepath, "../../../../../../../", *params))


from_root: FromRootModel = _from_root
