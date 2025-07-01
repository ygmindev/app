from __future__ import annotations

from typing import Any

from pydantic import RootModel


class CollectionModelUserModel(RootModel[Any]):
    root: Any


class Model(RootModel[Any]):
    root: Any
