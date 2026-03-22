# template version: 1.0.0

from .{{NAME}}(snakeCase)_models import {{NAME}}(pascalCase)Model, _{{NAME}}(pascalCase)Model


class _{{NAME}}(pascalCase)(_{{NAME}}(pascalCase)Model):
    ...


class {{NAME}}(pascalCase)(_{{NAME}}(pascalCase), {{NAME}}(pascalCase)Model): ...
