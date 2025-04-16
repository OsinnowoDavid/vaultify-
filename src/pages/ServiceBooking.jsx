import React from "react";
import { Link, NavLink } from "react-router-dom";
import clean from "../assets/images/clean.png";
import repair from "../assets/images/repair.png";
import plumbing from "../assets/images/plumbing.png";
import plier from "../assets/images/plier.png";
import pest from "../assets/images/pest.png";
import gas from "../assets/images/gas.png";
import electric from "../assets/images/electric.png";
import safe from "../assets/images/safe.png";
import Cleaning from "../components/cleaning";
const SERVICES = [
  { name: "Cleaning Service", image: { clean }, href: "/cleaning" },
  { name: "Plumbing Service", image: { plumbing }, href: "/plumbing" },
  { name: "Electrical Service", image: { electric }, href: "/electric" },
  { name: "Pest Control", image: { pest }, href: "/pest" },
  { name: "Appliance Repair", image: { repair }, href: "/appliance" },
  { name: "Landscaping/Gardening", image: { plier }, href: "/appliance" },
  { name: "Security Service", image: { safe }, href: "/Security" },
  { name: "General Maintenance", image: { plier }, href: "/Security" },
  { name: "Fire Fighters", image: { gas }, href: "/Security" },
];
function ServiceBooking() {
  return (
    <div className="mt-25 ">
      <h1 className="text-xl ml-10 text-sky-900 font-semibold">
        Service Booking
      </h1>
      <div className="flex flex-wrap  gap-5">
        {SERVICES.map((service) => (
          <div key={service} className=" flex ml-5 ">
            <NavLink to={service.href} className="flex ">
              {
                <>
                  <div
                    className="flex bg-white-950 shadow
    text-sky-900  p-5 rounded-xl hover:bg-sky-900 hover:text-white"
                  >
                    <img className="w-5" src={plier} />

                    <h1> {service.name}</h1>
                  </div>
                </>
              }
            </NavLink>
          </div>
        ))}
      </div>
      <Cleaning />
    </div>
  );
}

export default ServiceBooking;
