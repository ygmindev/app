from os import getcwd, path
from pathlib import Path
from typing import Unpack

from lib_shared.core.utils.get_item import get_item
from lib_shared.path.utils.from_working import from_working
from lib_shared.path.utils.to_relative.to_relative_models import (
    ToRelativeModel,
    ToRelativeParamsModel,
)


def to_relative(params: ToRelativeParamsModel) -> ToRelativeModel:
    source = Path(get_item(params, "source", from_working()))
    target = Path(get_item(params, "target"))
    try:
        return str(target.relative_to(source))
    except ValueError:
        return str(Path(path.relpath(target, source)))
