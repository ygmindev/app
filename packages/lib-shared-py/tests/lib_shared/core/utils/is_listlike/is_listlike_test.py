import numpy as np
from lib_shared.core.utils.is_listlike import is_listlike


def test_positive() -> None:
    assert is_listlike((1, 2)) == True
    assert is_listlike([1, 2]) == True
    assert is_listlike(np.array([1, 2])) == True


def test_negative() -> None:
    assert is_listlike(1) == False
    assert is_listlike("1") == False
    assert is_listlike(True) == False
    assert is_listlike(dict()) == False
