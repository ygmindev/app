from lib_shared.path.utils.from_packages.from_packages import from_packages


def from_static(*params: str) -> str:
    params = params or ()
    return from_packages("asset-static", *params)
