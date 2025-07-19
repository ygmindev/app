import threading
from functools import wraps
from typing import Any, Callable, Dict, Tuple

from pydantic import BaseModel


class LazyPropertiesMixin:
    """
    Mixin to add lazy property caching with automatic cache invalidation
    when dependent attributes change.
    """

    # Map property name -> tuple of dependency attribute names
    _lazy_properties: Dict[str, Tuple[str, ...]] = {}

    @classmethod
    def lazy_property(cls, *dependencies: str) -> Callable[[Callable[[Any], Any]], property]:
        """
        Decorator to declare a lazy property depending on given attributes.
        """

        def decorator(func: Callable[[Any], Any]) -> property:
            prop_name = func.__name__
            cache_attr = f"_lazy_cache_{prop_name}"

            @property
            @wraps(func)
            def wrapper(self: BaseModel) -> Any:
                if hasattr(self, cache_attr):
                    return getattr(self, cache_attr)
                val = func(self)
                setattr(self, cache_attr, val)
                return val

            cls._lazy_properties[prop_name] = dependencies
            return wrapper

        return decorator

    def __setattr__(self, name: str, value: Any) -> None:
        # Invalidate caches for any lazy property depending on `name`
        for prop_name, deps in self._lazy_properties.items():
            if name in deps:
                cache_attr = f"_lazy_cache_{prop_name}"
                if hasattr(self, cache_attr):
                    delattr(self, cache_attr)
        super().__setattr__(name, value)
