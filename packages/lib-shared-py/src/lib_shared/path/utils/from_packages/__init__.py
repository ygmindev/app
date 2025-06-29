from typing import Unpack

from lib_shared.path.utils.from_packages.from_packages_models import (
    FromPackagesModel,
    FromPackagesParamsModel,
)
from lib_shared.path.utils.from_root import from_root


def from_packages(*params: Unpack[FromPackagesParamsModel]) -> FromPackagesModel:
    params = params or ()
    return from_root("packages", *params)
