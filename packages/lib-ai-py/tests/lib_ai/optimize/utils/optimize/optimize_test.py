from typing import Any, Unpack

from lib_ai.optimize.utils.optimize import optimize
from lib_ai.optimize.utils.optimize.optimize_constants import (
    OPTIMIZE_SPACE_DISTRIBUTION,
)


def a(xx: Any):
    print(xx)
    return 1


def test_works() -> None:
    x = optimize(
        objective=a,
        spaces=(
            {
                "a": (
                    OPTIMIZE_SPACE_DISTRIBUTION.Q_UNIFORM,
                    {"lower": 0, "upper": 5, "q": 1},
                )
            },
        ),
    )
    print(x)
    assert 1 == 1
