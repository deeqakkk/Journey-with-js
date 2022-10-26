import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import eventsData from "../Assets/Data/eventsData";
import "./Sidebar.css";

const Sidebar = ({
  countryList = [],
  filterEvents,
  sortedData,
  setSortedData,
}) => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  return (
    <div className="sidebar">
      <ul className="country_list">
        <NavLink
          to="/all"
          className={
            location.pathname === "all" ? "country_name active" : "country_name"
          }
          onClick={() => {
            setActive(false);
            setSortedData(eventsData);
          }}
        >
          All {`(${eventsData.length})`}
        </NavLink>
        {countryList.map((country, i) => {
          return (
            <NavLink
              to={`/${country}`}
              className={
                location.pathname === `${country}`
                  ? "country_name active"
                  : "country_name"
              }
              onClick={() => {
                setActive(true);
                filterEvents(country);
              }}
            >
              {country === sortedData[0].country ? (
                <>
                  {`${country} `}
                  <span>{active ? `(${sortedData.length})` : ""}</span>
                </>
              ) : (
                country
              )}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
