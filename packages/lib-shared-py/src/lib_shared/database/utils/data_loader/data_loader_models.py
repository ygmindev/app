from abc import ABC, abstractmethod
from typing import Generic, Optional, Type, TypeVar

import attr
from lib_model.models import SourcedEntityResource

from lib_shared.database.utils.database import Database
from lib_shared.database.utils.database import database as db

TType = TypeVar("TType", bound=SourcedEntityResource)


@attr.s(auto_attribs=True, kw_only=True)
class DataLoaderParams(Generic[TType]):
    resource: Type[TType]
    source: Optional[str] = None
    database: Optional[Database] = db


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
