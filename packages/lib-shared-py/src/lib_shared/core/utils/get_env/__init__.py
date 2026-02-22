import os
from typing import Any, Callable, Optional, Type, TypeVar, Union, overload

from dotenv import load_dotenv

from lib_shared.path.utils.from_working import from_working

NODE_ENV = os.environ.get("NODE_ENV", "development")
load_dotenv(from_working(".env"))
load_dotenv(from_working(f".env.{NODE_ENV}"))

TType = TypeVar("TType")

CastTypeModel = Union[Type[TType], Callable[[str], TType]]


@overload
def get_env(
    key: str,
    *,
    cast: Type[str],
    default: Optional[str] = None,
    required: bool = False,
) -> Optional[str]: ...


@overload
def get_env(
    key: str,
    *,
    cast: Type[int],
    default: Optional[int] = None,
    required: bool = False,
) -> Optional[int]: ...


@overload
def get_env(
    key: str,
    *,
    cast: Type[float],
    default: Optional[float] = None,
    required: bool = False,
) -> Optional[float]: ...


@overload
def get_env(
    key: str,
    *,
    cast: Callable[[str], TType],
    default: Optional[TType] = None,
    required: bool = False,
) -> Optional[TType]: ...


@overload
def get_env(
    key: str,
    *,
    default: Optional[str] = None,
    required: bool = False,
) -> Optional[str]: ...


def get_env(
    key: str,
    *,
    default: Optional[Any] = None,
    cast: Optional[CastTypeModel] = None,
    required: bool = False,
) -> Any:
    value = os.getenv(key)
    if value is None:
        if required:
            raise EnvironmentError(f"Missing required env var: {key}")
        return default
    return cast(value) if cast else value
