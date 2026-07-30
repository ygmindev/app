from typing import TypeVar

TType = TypeVar("TType")


class _EntityModel:
    ...
    # def __call__(
    #     self,
    #     is_graphql: bool = True,
    # ) -> Callable[[type[TType]], type[TType]]: ...


class EntityModel(_EntityModel): ...
