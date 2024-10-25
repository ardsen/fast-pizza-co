import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-36 rounded-full bg-red-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-600 focus:w-40 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      ></input>
    </form>
  );
}

export default SearchOrder;
