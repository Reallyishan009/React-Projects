import React from "react";

const WatchList = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <div>Ratings</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">

            {/* Sample movie element */}
            <tr className="hover:bg-gray-50">
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img
                  className="h-[6rem] w-[10rem] object-fit"
                  src={`https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68`}
                  alt=""
                />
                <div className="font-medium text-gray-700 text-sm">
                  Placeholder
                </div>
              </td>
              <td className="pl-6 py-4">Avg</td>
              <td className="pl-6 py-4">Popularity</td>
              <td className="pl-2 py-4">Genre</td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
