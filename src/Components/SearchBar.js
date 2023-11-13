import React from 'react'

const SearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="bg-black w-1/2 grid grid-cols-12 bg-opacity-80 rounded-sm">
        <input
          type="text"
          placeholder="What's Your Movie Mood Today ?"
          className="m-4 p-4 rounded-lg col-span-9 bg-gray-700 text-white"
        ></input>
        <button className="bg-[#e50914] m-4 p-4 rounded-lg text-white font-semibold col-span-3">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar