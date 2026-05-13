from typing import Tuple, Unpack

from lib_shared.path.utils.from_packages import from_packages
from lib_shared.path.utils.from_static.from_static_models import FromStaticModel


def _from_static(
    *params: Unpack[Tuple[str, ...]],
) -> str:
    params = params or ()
    return from_packages("asset-static", *params)


from_static: FromStaticModel = _from_static
