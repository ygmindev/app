from abc import ABC, abstractmethod
from typing import Generic, TypeVar

import attr
from lib_model.models import SourcedEntityResource
from lib_shared.database.utils.database2 import Database
from lib_shared.database.utils.database2 import database as db

TType = TypeVar("TType", bound=SourcedEntityResource)


@attr.s(auto_attribs=True, kw_only=True)
class DataLoaderParams(Generic[TType]):
    resource: type[TType]
    source: str | None = None
    database: Database | None = db


class DataLoaderModel(ABC, Generic[TType]):
    def __init__(
        self,
        params: DataLoaderParams,
    ) -> None: ...

    @abstractmethod
    async def load(
        self,
    ) -> list[TType]: ...

    @abstractmethod
    async def upload(
        self,
    ) -> list[TType]: ...
