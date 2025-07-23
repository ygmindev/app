from beanie import Document, Indexed, init_beanie

from lib_shared.database.utils.database._database_models import _DatabaseModel


class _Database(_DatabaseModel):
    def __init__(self):
        init_beanie()
