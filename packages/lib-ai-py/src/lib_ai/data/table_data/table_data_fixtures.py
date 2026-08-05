from lib_ai.data.table_data import TableData

TABULAR_DATA_FIXTURE_1 = TableData.from_dict(
    {
        "int": [0, 1, 2, 3, 4],
        "str": ["a", "b", "c", "d", "e"],
    }
)

TABULAR_DATA_FIXTURE_2 = TableData.from_dict(
    {
        "int": [5, 6, 7, 8, 9],
        "str": ["f", "g", "h", "i", "j"],
    }
)
