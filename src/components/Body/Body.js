import React from "react";
import Search from "../Search/Search";
import axios from "axios";
import { useEffect } from "react";

const Body = () => {
  const fetchData = async () => {
    try {
      const url =
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="search-continer">
        <Search />
      </div>
      <div className="table-container"></div>
    </div>
  );
};

export default Body;
