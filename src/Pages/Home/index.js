import React, { useEffect, useState } from "react";
import CustomCard from "../../Shared/CustomCard";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        setData(response.data?.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-3 my-3 mx-2">
        <div className="p-4 transition-shadow bg-white bg-opacity-20 border-white border-opacity-20 backdrop-blur-[4%] border rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded mr-2">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
        <div className="p-4 transition-shadow bg-white bg-opacity-20 border-white border-opacity-20 backdrop-blur-[4%] border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded mr-2">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
        <div className="p-4 transition-shadow bg-white bg-opacity-20 border-white border-opacity-20 backdrop-blur-[4%] border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded mr-2">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
        <div className="p-4 transition-shadow bg-white bg-opacity-20 border-white border-opacity-20 backdrop-blur-[4%] border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <span className="">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded mr-2">
              14%
            </span>
            <span>from 2019</span>
          </div>
        </div>
      </div>
      <h3 className="text-xl text-white px-3">Users</h3>
      <div className="flex flex-col p-2">
        <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
          <table className="min-w-full overflow-x-scroll divide-y divide-gray-400">
            <thead className="bg-white bg-opacity-20 backdrop-blur-[4%]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
                >
                  Role
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white bg-opacity-20 divide-y divide-gray-400">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
                return (
                  <tr
                    key={index}
                    className="transition-all hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium">
                            Mani Kant Sharma
                          </div>
                          <div className="text-sm">
                            mkx@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        Regional Paradigm Technician
                      </div>
                      <div className="text-sm">Optimization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      Admin
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
