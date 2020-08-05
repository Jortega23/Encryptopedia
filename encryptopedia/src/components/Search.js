import React, {useState} from 'react'

const Search = () => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(text);
  }

  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div className='search-bar'>
          <input type='search' name='text' placeholder='Search Crypto' onChange={onChange}/>
          <input type='submit' value='Seach'/>
        </div>
      </form>
    </div>
  )
}

export default Search
