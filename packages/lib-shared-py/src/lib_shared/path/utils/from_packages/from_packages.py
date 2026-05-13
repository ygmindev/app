from typing import Tuple, Unpack

from lib_shared.path.utils.from_packages.from_packages_models import FromPackagesModel
from lib_shared.path.utils.from_root import from_root


def _from_packages(
    *params: Unpack[Tuple[str, ...]],
) -> str:
    params = params or ()
    return from_root("packages", *params)


from_packages: FromPackagesModel = _from_packages
