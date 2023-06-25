import React from "react";
import time from "../../../assets/icons/schedule.svg";
import location from "../../../assets/icons/my_location.svg";
import SeeMore from "../../../elements/SeeMore/SeeMore";
import { useNavigate } from "react-router-dom";

const ClosestEvent = ({ events }) => {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/event/detail/${id}`);
  };
  return (
    <div id="closest-event" className="closest-event">
      <h1 id="closest-event-title" className="title-large-semibold mb-16">
        Event Terbaru
      </h1>
      {events &&
        events.map((event, index) => (
          <div
            id={`closest-event-item-${index}`}
            key={index}
            className={`gap-3 mb-16`}
            onClick={() => handleDetail(event.ID)}
            style={{ cursor: "pointer" }}
          >
            <h4
              id={`closest-event-title-${index}`}
              className="body-large-semibold mb-8"
            >
              {event.nama}
            </h4>
            <div
              id={`closest-event-location-${index}`}
              className="d-flex align-items-center mb-8"
            >
              <img src={location} alt="article-img" />
              <p className="label-large-regular mb-0 ms-8">{event.lokasi}</p>
            </div>
            <div
              id={`closest-event-time-${index}`}
              className="d-flex align-items-center"
            >
              <img src={time} alt="article-img" />
              <p className="label-large-regular mb-0 ms-8">
                {event.waktu_mulai}
              </p>
            </div>
          </div>
        ))}
      <SeeMore id="closest-event-see-more" to="event" label="Lihat semua" />
    </div>
  );
};

export default ClosestEvent;
