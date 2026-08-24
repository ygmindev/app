from pydash import kebab_case, trim_start


def trim_pathname(params: str) -> str:
    pathname = trim_start(params, "/")
    pathname = map(kebab_case, pathname.split("/"))
    pathname = "/".join(pathname)
    return f"/{pathname}"
