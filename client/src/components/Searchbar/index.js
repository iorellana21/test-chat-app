import React from "react";
import { FaSearch } from "react-icons/fa";
import "./index.scss";

export default function SearchBar() {
  return (
    <form className="searchform">
      {/* <div className="row"> */}
      <div className="form-group has-search mx-0">
      <FaSearch className='form-control-feedback' />
        <input type="text" className="form-control searchbar " placeholder="Search" />
      </div>
        <div className="form-group col-4">
        </div>
      {/* </div> */}
    </form>
  );
}
