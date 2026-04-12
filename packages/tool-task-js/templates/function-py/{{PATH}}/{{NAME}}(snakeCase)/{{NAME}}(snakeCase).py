from .{{NAME}}(snakeCase).{{NAME}}(pascalCase)_models import {{NAME}}(pascalCase)Model


def _{{NAME}}(snakeCase)(
    params: str,
) -> str:
    return ''


{{NAME}}(snakeCase): {{NAME}}(pascalCase)Model = _{{NAME}}(snakeCase)
