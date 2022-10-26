import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";
import eventsData from "../Assets/Data/eventsData";
import "./Events.css";

const Events = () => {
  const [sortedData, setSortedData] = useState(eventsData);
  const countryList = [...new Set(eventsData.map((val) => val.country))];
  const filterEvents = (curcat) => {
    const newItem = eventsData.filter((newVal) => {
      return newVal.country === curcat;
    });
    setSortedData(newItem);
  };
  return (
    <div className="events">
      <h1 className="title">Explore Our Events</h1>
      <div className="main_content">
        <div className="countries">
          <Sidebar
            filterEvents={filterEvents}
            setSortedData={setSortedData}
            countryList={countryList}
            sortedData={sortedData}
          />
        </div>
        <div className="card_events">
          {sortedData.map((event, i) => {
            return <Card event={event} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
