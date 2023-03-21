import React from 'react'
import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'
import './SearchBar.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const SearchBar = () => {
  const [value, setValue] = useState('')
  const [search,setSearch] = useState('')

  const navigate = useNavigate()

  const handleChange = (e)=>{
    const {value} = e.target;
    setValue(value)
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      setSearch(value)
      setValue('')

      navigate(`/search/query=${search}&type=video`)
  }

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} placeholder='Search...'/>
      <button formAction='submit'>
        <Search/>
      </button>
    </form>
  )
}

export default SearchBar