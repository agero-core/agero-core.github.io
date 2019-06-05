#!/bin/bash

cd $(dirname $0)

get_all_pages() {
  local url="$1"
  local outfile=$(mktemp)
  local response=$(curl -sf "$url" | jq . | tee -a "$outfile")
  echo "$url" >&2

  cat "$outfile" | jq '.[]' | jq -s .
}

get_repos() {
  get_all_pages 'https://api.github.com/users/agero-core/repos'
}

(echo -n '$(function() { loadRepositoryData(' ; get_repos ; echo '); })') > load_repos.js
