from os import path

filepath = path.dirname(path.abspath(__file__))


def from_root(*params: str) -> str:
    params = params or ()
    return path.abspath(path.join(filepath, "../../../../../../../", *params))
