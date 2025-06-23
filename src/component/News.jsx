import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function News() {
  const [search, setSearch] = useState("india");
  const [Newsdata, setNewsData] = useState([]);
  const API_KEY = "0a8ef361d4794feeaa1d8d42027d0b03";

  const getdata = async (query = search) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNewsData(data.articles);
      // setSearch("");

      console.log(data.articles);
    } catch (error) {
      console.log("Errorfetching data", error);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className="navbar">
        <div>
          <h1>Indian Express</h1>
        </div>

        <div className="category-btn">
          <button onClick={() => getdata("Sport")}>Sport</button>
          <button onClick={() => getdata("Politics")}>Politics</button>
          <button onClick={() => getdata("Masti")}>Masti</button>
          <button onClick={() => getdata("Health")}>Health</button>
          <button onClick={() => getdata("Fitness")}>Fitness</button>
          <button onClick={() => getdata("Defence")}>Defence</button>
        </div>

        <div className="searchbar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button className="search-btn" onClick={() => getdata(search)}>
            Search
          </button>
        </div>
      </div>
      <NewsCard data={Newsdata} />
    </div>
  );
}

export default News;
