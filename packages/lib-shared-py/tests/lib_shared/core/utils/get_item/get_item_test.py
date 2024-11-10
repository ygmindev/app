from lib_shared.core.utils.get_item import get_item

VALUE = {
    "k1": "v1",
    "k2": {
        "k21": "v21",
        "k22": "v22",
    },
}


def test_works() -> None:
    assert get_item(VALUE, "k1") == "v1"
    assert get_item(VALUE, ["k1"]) == "v1"
    assert get_item(VALUE, ["k2", "k22"]) == "v22"
