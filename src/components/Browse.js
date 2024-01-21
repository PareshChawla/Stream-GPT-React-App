import React from "react";
import BrowseHeader from "./BrowseHeader";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((store) => store.user);
  return <div className="flex">{user && <BrowseHeader />}</div>;
};

export default Browse;
