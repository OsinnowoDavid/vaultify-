import React from "react";
import search from "../assets/images/search.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const VISITORS = [
  {
    name: "John Done Kenny",
    ResidentHost: "MR jOHN",
    Email: "john@gmail.com",
    AccessCode: "x1234",
    AccessArea: "First Gate",
    ValidPeriod: "10AM-2PM",
    VisitStatus: "Active",
    Actions: "Active",
  },
  {
    name: "John Done Kenny",
    ResidentHost: "MR jOHN",
    Email: "john@gmail.com",
    AccessCode: "x1234",
    AccessArea: "First Gate",
    ValidPeriod: "10AM-2PM",
    VisitStatus: "Active",
    Actions: "Active",
  }, {
    name: "John Done Kenny",
    ResidentHost: "MR jOHN",
    Email: "john@gmail.com",
    AccessCode: "x1234",
    AccessArea: "First Gate",
    ValidPeriod: "10AM-2PM",
    VisitStatus: "Active",
    Actions: "Active",
  }, {
    name: "John Done Kenny",
    ResidentHost: "MR jOHN",
    Email: "john@gmail.com",
    AccessCode: "x1234",
    AccessArea: "First Gate",
    ValidPeriod: "10AM-2PM",
    VisitStatus: "Active",
    Actions: "Active",
  }, {
    name: "John Done Kenny",
    ResidentHost: "MR jOHN",
    Email: "john@gmail.com",
    AccessCode: "x1234",
    AccessArea: "First Gate",
    ValidPeriod: "10AM-2PM",
    VisitStatus: "Active",
    Actions: "Active",
  }, {
    name: "John Done Kenny",
    ResidentHost: "MR jOHN",
    Email: "john@gmail.com",
    AccessCode: "x1234",
    AccessArea: "First Gate",
    ValidPeriod: "10AM-2PM",
    VisitStatus: "Active",
    Actions: "Active",
  }, {
    name: "John Done Kenny",
    ResidentHost: "MR jOHN",
    Email: "john@gmail.com",
    AccessCode: "x1234",
    AccessArea: "First Gate",
    ValidPeriod: "10AM-2PM",
    VisitStatus: "Active",
    Actions: "Active",
  },
  // Add more sample visitors here...
];

function ManageVisitors() {
  const [searchItems, SetSearchItems] = useState("");
  const [filterProducts, SetFilterProducts] = useState(VISITORS);
  const [selectedVisitors, setSelectedVisitors] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    SetSearchItems(term);
    const filter = VISITORS.filter(
      (visitor) =>
        visitor.name.toLocaleLowerCase().includes(term) ||
        visitor.ResidentHost.toLocaleLowerCase().includes(term) ||
        visitor.AccessCode.toLocaleLowerCase().includes(term)
    );
    SetFilterProducts(filter);
  };

  const handleSelect = (email) => {
    setSelectedVisitors((prev) =>
      prev.includes(email)
        ? prev.filter((e) => e !== email)
        : [...prev, email]
    );
  };

  return (
    <motion.div
      className="bg-gray-200 backdrop-blur-md shadow-lg rounded-xl p-6 border-black mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-xl font-semibold text-sky-950">Manage Visitors</h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-sky-950">All Users</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Engine"
            onChange={handleSearch}
            value={searchItems}
            className="rounded-lg placeholder-sky-900 placeholder:p-5 focus:outline-none focus:ring-2 focus:ring-sky-800"
          ></input>
        </div>
        <img className="absolute" sizes={10} src={search} />
        <Link
          to={"/AddManageResidents"}
          className="mr-25 p-2 rounded-xl mt-1 bg-sky-950 text-white hover:bg-white hover:text-sky-900"
        >
          <button>+ Add Visitor</button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-grey-700">
          <thead>
             <tr className="text-sky-950">
              <th>
                {/* <input
                  type="checkbox"
                  checked={selectedVisitors.length === filterProducts.length}
                  onChange={() =>
                    selectedVisitors.length === filterProducts.length
                      ? setSelectedVisitors([])
                      : setSelectedVisitors(filterProducts.map((v) => v.Email))
                  }
                /> */}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide">
                name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide">
                resident host
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide">
                Access Code
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide">
                Access area
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide">
                valid period
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide">
                visit status
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-grey-400 uppercase tracking-wide">
                Actions
              </th>
            </tr> 
          </thead>
          <tbody className="min-w-full max-w-full divide-y divide-grey-700">
            {filterProducts.map((visitor) => (
              <motion.tr
                key={visitor.name}
                className="bg-white hover:bg-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selectedVisitors.includes(visitor.Email)}
                    onChange={() => handleSelect(visitor.Email)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900">
                  {visitor.name}
                  <p>{visitor.Email}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900">
                  {visitor.ResidentHost}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900">
                  {visitor.AccessCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900">
                  {visitor.AccessArea}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900">
                  {visitor.ValidPeriod}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900 ${
                    visitor.VisitStatus === "Active"
                      ? "bg-green-800 text-white"
                      : "bg-red-800 text-white"
                  }`}
                >
                  {visitor.VisitStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-grey-900">
                  {visitor.Actions}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ManageVisitors;
