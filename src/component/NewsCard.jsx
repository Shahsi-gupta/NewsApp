import React from "react";

function NewsCard({ data }) {
  return (
    <div className="card-container">
      {data.map((currentItem, index) => {
        return (
          <div className="card" key={index}>
            <img
              src={
                currentItem.urlToImage
                  ? currentItem.urlToImage
                  : "https://via.placeholder.com/150"
              }
            />

            <p onClick={() => window.open(currentItem.url)}>
              {currentItem.description
                ? currentItem.description.substring(0, 100) + "...."
                : "No description Avalable"}
            </p>

            {/* <h2>{currentItem.publishedAt}</h2> */}

            <button onClick={() => window.open(currentItem.url, "_blank")}>
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default NewsCard;
