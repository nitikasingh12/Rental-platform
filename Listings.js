
import React, { useEffect, useState } from "react";
import dhive from "dhive";

const client = new dhive.Client("https://api.hive.blog");

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    client.database
      .getDiscussions("trending", { tag: "hive-rental", limit: 10 })
      .then((result) => {
        setListings(result);
      })
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  return (
    <div>
      <h2>Available Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.permlink}>
            <h3>{listing.title}</h3>
            <p>{listing.body}</p>
            <p><strong>Owner:</strong> {listing.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;

