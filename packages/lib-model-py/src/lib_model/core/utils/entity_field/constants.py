from enum import StrEnum


class FieldRelation(StrEnum):
    EMBEDDED = "embedded"
    MANY_TO_MANY = "manyToMany"
    MANY_TO_ONE = "manyToOne"
    ONE_TO_MANY = "oneToMany"
    ONE_TO_ONE = "oneToOne"


class PropertyType(StrEnum):
    ID = "ID"
    PRIMARY_KEY = "PRIMARY_KEY"
