#!/usr/bin/env bash
set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

TARGETS=(
  node_modules
  pnpm-lock.yaml
  .next
  out
  tsconfig.tsbuildinfo
  .eslintcache
  .turbo
  .swc
  .tmp
)

removed=0
for path in "${TARGETS[@]}"; do
  if [ -e "$path" ] || [ -L "$path" ]; then
    rm -rf "$path"
    echo "removed  $path"
    removed=$((removed + 1))
  else
    echo "skipped  $path (not found)"
  fi
done

echo
echo "clean done — removed $removed of ${#TARGETS[@]} targets"
