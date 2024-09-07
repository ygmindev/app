from typing import Mapping, TypeVar

T = TypeVar("T", bound=dict)


def merge(
    dest: T,
    source: T,
) -> T:
    for k, v in source.items():
        if isinstance(v, dict):
            merge(v, dest.setdefault(k, dict()))
        else:
            dest[k] = v
    return dest
