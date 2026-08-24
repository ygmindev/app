from os import path
from pathlib import Path

from lib_shared.path.utils.from_working import from_working


def to_relative(
    source: str,
    target: str,
) -> str:
    src = Path(source or from_working())
    tgt = Path(target)
    try:
        return str(tgt.relative_to(src))
    except ValueError:
        return str(Path(path.relpath(tgt, src)))
