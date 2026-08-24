from lib_shared.path.utils.from_root.from_root import from_root


def from_packages(*params: str) -> str:
    params = params or ()
    return from_root("packages", *params)
