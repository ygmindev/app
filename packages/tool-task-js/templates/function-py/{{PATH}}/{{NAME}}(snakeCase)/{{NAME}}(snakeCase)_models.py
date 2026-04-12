from typing import Protocol


class _{{NAME}}(pascalCase)Model(Protocol):
    def __call__(
        self,
        params: str
    ) -> str: ...


{{NAME}}(pascalCase)Model = _{{NAME}}(pascalCase)Model
