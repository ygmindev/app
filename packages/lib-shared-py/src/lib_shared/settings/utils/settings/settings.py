from contextvars import ContextVar, Token
from typing import ClassVar, Optional, TypeVar, cast

from pydantic_settings import BaseSettings

TType = TypeVar("TType", bound="_Settings")


class _Settings(BaseSettings):
    _context: ClassVar[ContextVar[Optional["_Settings"]]] = ContextVar(
        "base_context", default=None
    )

    def __init_subclass__(cls, **kwargs) -> None:
        super().__init_subclass__(**kwargs)
        cls._context = ContextVar(f"{cls.__name__}_context", default=None)

    @classmethod
    def get(cls: type[TType]) -> TType:
        instance = cls._context.get()
        if instance is None:
            instance = cls()
            cls._context.set(instance)
        return cast(TType, instance)

    @classmethod
    def set(
        cls: type[TType],
        instance: TType,
    ) -> Token:
        return cls._context.set(instance)

    @classmethod
    def reset(
        cls,
        token: Token,
    ) -> None:
        cls._context.reset(token)


class Settings(_Settings): ...
