import { debounce } from 'lodash'
import React, { useMemo, useState } from 'react'
import Input from '../Input'

const Search = ({ onFilter, placeholder, className }) => {
  const [search, setSearch] = useState('')

  const debouncedOnFilter = useMemo(() =>
    debounce((search) =>
      onFilter?.(search), 300), [onFilter])

  const handleOnSearch = ({ target: { value } }) => {
    setSearch(value)

    debouncedOnFilter(value)
  }

  return (
    <Input
      className={className}
      placeholder={placeholder}
      value={search}
      onChange={handleOnSearch}
    />
  )
}

export default Search
