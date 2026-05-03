from datetime import datetime
from typing import Annotated, Callable, Protocol, TypeVar

from lib_shared.core.utils.dataclass.dataclass import Dataclass
from lib_shared.core.utils.field.field import Field


@Dataclass()
class EntityModelType:
    created: Annotated[datetime, Field(default_value=datetime.now)]


TType = TypeVar("TType")


class _EntityModel(Protocol):
    def __call__(
        self,
        name: str,
        is_database: bool = False,
        is_graphql: bool = True,
    ) -> Callable[[type[TType]], type[TType]]: ...


EntityModel = _EntityModel
