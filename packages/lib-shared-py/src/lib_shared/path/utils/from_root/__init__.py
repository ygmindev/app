from os import path
from typing import Unpack

from lib_shared.path.utils.from_root.from_root_models import FromRootModel, FromRootParamsModel

filepath = path.dirname(path.abspath(__file__))


def from_root(*params: Unpack[FromRootParamsModel]) -> FromRootModel:
    params = params or ()
    return path.abspath(path.join(filepath, "../../../../../../../", *params))
