from os import getcwd, path


def from_working(*params: str) -> str:
    params = params or ()
    return path.join(getcwd(), *params)
