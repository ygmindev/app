from lib_shared.core.utils.set_item import set_item

VALUE = {
    "k1": "v1",
    "k2": {
        "k21": "v21",
        "k22": "v22",
    },
}


def test_works() -> None:
    result = set_item(VALUE, "k1", "v2")
    assert result == {
        "k1": "v2",
        "k2": {
            "k21": "v21",
            "k22": "v22",
        },
    }

    result = set_item(VALUE, "k3", "v3")
    assert result == {
        "k1": "v2",
        "k2": {
            "k21": "v21",
            "k22": "v22",
        },
        "k3": "v3",
    }
