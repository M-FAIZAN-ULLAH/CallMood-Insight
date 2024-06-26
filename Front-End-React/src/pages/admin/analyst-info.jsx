// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
//   Chip,
// } from "@material-tailwind/react";

// import { authorsTableData } from "@/data";

// export const AnalystInfo = () => {
//   // Add your component logic here

//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-12">
//       <Card>
//         <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
//           <Typography variant="h6" color="white">
//             Quality Assurance Analysts
//           </Typography>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr>
//                 {[
//                   "analyst",
//                   "Analysis Performed",
//                   "status",
//                   "employed",
//                   "",
//                 ].map((el) => (
//                   <th
//                     key={el}
//                     className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                   >
//                     <Typography
//                       variant="small"
//                       className="text-[11px] font-bold uppercase text-blue-gray-400"
//                     >
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {authorsTableData.map(
//                 ({ img, name, email, job, online, date }, key) => {
//                   const className = `py-3 px-5 ${
//                     key === authorsTableData.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;

//                   return (
//                     <tr key={name}>
//                       <td className={className}>
//                         <div className="flex items-center gap-4">
//                           <Avatar src={img} alt={name} size="sm" />
//                           <div>
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-semibold"
//                             >
//                               {name}
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               {email}
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {job[0]}
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {job[1]}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Chip
//                           variant="gradient"
//                           color={online ? "green" : "blue-gray"}
//                           value={online ? "online" : "offline"}
//                           className="py-0.5 px-2 text-[11px] font-medium"
//                         />
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {date}
//                         </Typography>
//                       </td>
//                       {/* <td className={className}>
//                         <Typography
//                           as="a"
//                           href="#"
//                           className="text-xs font-semibold text-blue-gray-600"
//                         >
//                           View
//                         </Typography>
//                       </td> */}
//                     </tr>
//                   );
//                 }
//               )}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default AnalystInfo;


import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import { ApiClient } from "@/utils";

export const AnalystInfo = () => {
  const [authorsTableData, setAuthorsTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiClient.get("/users");
        setAuthorsTableData(response.data); // Assuming the API response is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Quality Assurance Analysts
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "analyst",
                  "Analysis Performed",
                  "Analysis Saved",
                  "employed",
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({
                  img,
                  username,
                  email,
                  role,
                  savedAnalysis,
                  analysisCount,
                  createdAt,
                }) => {
                  const className = "py-3 px-5 border-b border-blue-gray-50";

                  return (
                    <tr key={username}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={username} size="sm" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {username}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        {/* <Typography className="text-xs font-semibold text-blue-gray-600">
                          {role}
                        </Typography> */}
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {` ${analysisCount}`}
                        </Typography>
                      </td>
                      <td className={className}>
                        {/* <Chip
                          variant="gradient"
                          color={savedAnalysis > 0 ? "green" : "blue-gray"}
                          value={savedAnalysis > 0 ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        /> */}
                        {savedAnalysis} 
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {createdAt}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AnalystInfo;
