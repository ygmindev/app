from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Generic, Optional, Type, TypeVar

from lib_model.resource.entity_resource import EntityResource

from lib_shared.database.utils.database import Database
from lib_shared.database.utils.database import database as db

TType = TypeVar("TType", bound=EntityResource)


@dataclass
class DataLoaderParams(Generic[TType]):
    resource: Type[TType]
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
