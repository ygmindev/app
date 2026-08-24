from typing import Any, Callable

from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings


def QuantSettingsField(params: Callable[[QuantSettings], Any]) -> Any:
    return Field(default_factory=lambda: params(QuantSettings.get_settings()))
