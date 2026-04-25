from typing import Callable, Protocol, TypeVar

TType = TypeVar("TType")


class _EntityModel(Protocol):
    def __call__(
        self,
        name: str,
        is_database: bool = False,
        is_graphql: bool = True,
    ) -> Callable[[type[TType]], type[TType]]: ...


EntityModel = _EntityModel
