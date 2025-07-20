import os
import re
from argparse import ArgumentParser
from pathlib import Path

from datamodel_code_generator import DataModelType, PythonVersion
from datamodel_code_generator.model import get_data_model_types
from datamodel_code_generator.parser.jsonschema import JsonSchemaParser
from lib_shared.core.utils.not_found_exception import NotFoundException
from lib_shared.path.utils.from_packages import from_packages

parser = ArgumentParser()
parser.add_argument("-s", "--source", type=str)
args = parser.parse_args()


def main() -> None:
    if not args.source:
        raise NotFoundException("missing source")

    data_model_types = get_data_model_types(
        DataModelType.PydanticV2BaseModel,
        target_python_version=PythonVersion.PY_312,
    )
    sources = list(map(lambda s: Path(s.strip()), args.source.split(",")))
    _parser = JsonSchemaParser(
        sources,
        collapse_root_models=True,
        data_model_type=data_model_types.data_model,
        data_model_root_type=data_model_types.root_model,
        data_model_field_type=data_model_types.field_model,
        data_type_manager_type=data_model_types.data_type_manager,
        dump_resolve_reference_action=data_model_types.dump_resolve_reference_action,
    )

    result = _parser.parse()
    for k, v in result.items():
        pathname = from_packages("lib-model-py", *k)
        dirname, filename = os.path.split(pathname)
        filename, ext = os.path.splitext(filename)
        filename = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", filename)
        filename = re.sub(r"[-\s]+", "_", filename)
        filename = filename.lower()
        pathname = os.path.join(dirname, f"{filename}{ext}")
        Path(pathname).parent.mkdir(parents=True, exist_ok=True)
        Path(pathname).write_text(v.body, "utf-8")


def main() -> None:
    if not args.source:
        raise NotFoundException("missing source")

    data_model_types = get_data_model_types(
        DataModelType.PydanticV2BaseModel,
        target_python_version=PythonVersion.PY_311,
    )
    sources = list(map(lambda s: Path(s.strip()), args.source.split(",")))
    _parser = JsonSchemaParser(
        sources,
        collapse_root_models=True,
        data_model_type=data_model_types.data_model,
        data_model_root_type=data_model_types.root_model,
        data_model_field_type=data_model_types.field_model,
        data_type_manager_type=data_model_types.data_type_manager,
        dump_resolve_reference_action=data_model_types.dump_resolve_reference_action,
    )
    result = _parser.parse()
    for k, v in result.items():
        pathname = from_packages("lib-model-py", *k)
        dirname, filename = os.path.split(pathname)
        filename, ext = os.path.splitext(filename)
        filename = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", filename)
        filename = re.sub(r"[-\s]+", "_", filename)
        filename = filename.lower()
        pathname = os.path.join(dirname, f"{filename}{ext}")
        Path(pathname).parent.mkdir(parents=True, exist_ok=True)
        Path(pathname).write_text(v.body, "utf-8")


if __name__ == "__main__":
    main()
