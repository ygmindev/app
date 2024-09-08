from {{PATH}}.{{NAME}}(snakeCase)._{{NAME}}(snakeCase) import _{{NAME}}(snakeCase)
from {{PATH}}.{{NAME}}(snakeCase).{{NAME}}(snakeCase)_models import {{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)ParamsModel

def {{NAME}}(snakeCase)(params: {{NAME}}(pascalCase)ParamsModel) -> {{NAME}}(pascalCase)Model:
    return _{{NAME}}(snakeCase)(params)
