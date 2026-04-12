from functools import reduce
from typing import Any, Optional, Sequence, cast

import pydash as _

from lib_shared.core.utils.merge.merge_models import (
    MergeModel,
    MergeStrategy,
    TType,
)


def _merge(
    params: Sequence[TType],
    merge_strategy: Optional[MergeStrategy] = None,
) -> TType:
    def merger(value: Any, src: Any, *args: Any) -> Any:
        if isinstance(value, list) and isinstance(src, list):
            if merge_strategy == MergeStrategy.DEEP_APPEND:
                return value + src
            if merge_strategy == MergeStrategy.DEEP_PREPEND:
                return src + value
        return None

    if merge_strategy is None:
        return cast(
            TType, reduce(lambda result, x: _.assign({}, result, x), params, {})
        )
    if merge_strategy == MergeStrategy.DEEP:
        return cast(TType, reduce(lambda result, x: _.merge({}, result, x), params, {}))
    return cast(
        TType, reduce(lambda result, x: _.merge_with({}, result, x, merger), params, {})
    )


merge: MergeModel = _merge
