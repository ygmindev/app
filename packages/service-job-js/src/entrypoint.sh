#!/bin/sh
set -e
script="__dist__/$1.mjs"
shift
exec node "$script" "$@"
