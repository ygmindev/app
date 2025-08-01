from dataclasses import dataclass
from typing import Callable, Generic, Optional, Type, TypeVar

from lib_shared.database.utils.data_loader.data_loader_models import (
    DataLoaderModel,
    TType,
)
from lib_shared.database.utils.database import Database
from lib_shared.database.utils.database import database as db
from lib_shared.http.utils.constants import CONTENT_TYPE, HTTP_METHOD

TResponse = TypeVar("TResponse")


class ApiDataLoaderModel(DataLoaderModel):
    def __init__(
        self,
        uri: str,
        response: Type[TResponse],
        resource: Type[TType],
        transformer: Callable[[TResponse], list[TType]],
        method: Optional[HTTP_METHOD] = HTTP_METHOD.GET,
        content_type: Optional[CONTENT_TYPE] = CONTENT_TYPE.JSON,
        headers: Optional[dict] = None,
        params: Optional[dict] = None,
        database: Optional[Database] = db,
    ) -> None: ...
