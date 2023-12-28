// import { useQuery } from "@tanstack/react-query";
// import { ApiClient } from "@/utils";
// import { useState, useEffect } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";

// // The table head.
// const TABLE_HEAD = ["Duration", "Date", "Agent", "Reason", ""];

// export function DataTable() {
//   // useState varibale contains the past analysis data.
//   // const [analysis, setAnalysis] = useState([]);

//   // // This is used to get the analysis data from the backend database.
//   // const { isLoading, error, data } = useQuery({
//   //   queryKey: ["analysis"],
//   //   queryFn: () =>
//   //     ApiClient.get("/analysis/dataAnalysis", {
//   //       // ID of the user who is logged in. Currently a dummy value.
//   //       owner: 1,
//   //     }),
//   // });

//   // // For updating the analysis state variable.
//   // useEffect(() => {
//   //   if (data) {
//   //     setAnalysis(data.data);
//   //   }
//   // }, [data]);

//   // console.log("analysis from the database:", analysis);

//   // Currently using dummy values for the table rows.
//   return (
//     // <Card>
//     //   <CardHeader className="p-5" variant="gradient" color="blue">
//     //     <Typography variant="h6" color="white">
//     //       Analysis History
//     //     </Typography>
//     //   </CardHeader>
//     //   <CardBody className="overflow-x-scroll">
//     //     <table className="w-full min-w-max table-auto text-left">
//     //       <thead>
//     //         <tr>
//     //           {TABLE_HEAD.map((head) => (
//     //             <th key={head} className="border-b border-blue-gray-100 p-4">
//     //               <Typography
//     //                 variant="small"
//     //                 color="blue-gray"
//     //                 className="font-normal leading-none opacity-70"
//     //               >
//     //                 {head}
//     //               </Typography>
//     //             </th>
//     //           ))}
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         {/* Displaying the past analysis */}
//     //         {!isLoading &&
//     //           analysis &&
//     //           analysis.map((item, index) => (
//     //             <tr key={index}>
//     //               <td className="p-4">
//     //                 <Typography
//     //                   variant="small"
//     //                   color="blue-gray"
//     //                   className="font-normal"
//     //                 >
//     //                   {`${item.duration} min`}
//     //                 </Typography>
//     //               </td>
//     //               <td className="p-4">
//     //                 <Typography
//     //                   variant="small"
//     //                   color="blue-gray"
//     //                   className="font-normal"
//     //                 >
//     //                   {item.date}
//     //                 </Typography>
//     //               </td>
//     //               <td className="p-4">
//     //                 <Typography
//     //                   variant="small"
//     //                   color="blue-gray"
//     //                   className="font-normal"
//     //                 >
//     //                   {item.agent_name}
//     //                 </Typography>
//     //               </td>
//     //               <td className="p-4">
//     //                 <Typography
//     //                   variant="small"
//     //                   color="blue-gray"
//     //                   className="font-normal"
//     //                 >
//     //                   {/* Only showing the first 9 words of reason for the call rejection. */}
//     //                   {`${item.reason.split(" ").slice(0, 9).join(" ")} ...`}
//     //                 </Typography>
//     //               </td>
//     //               <td className="p-4">
//     //                 <Typography
//     //                   as="a"
//     //                   href="#"
//     //                   variant="small"
//     //                   color="blue-gray"
//     //                   className="font-medium"
//     //                 >
//     //                   :
//     //                 </Typography>
//     //               </td>
//     //               {/* Add more cells as needed */}
//     //             </tr>
//     //           ))}
//     //       </tbody>
//     //     </table>
//     //   </CardBody>
//     // </Card>
//     <Card>
//       <CardHeader className="p-5" variant="gradient" color="blue">
//         <Typography variant="h6" color="white">
//            Analysis History
//          </Typography>
//       </CardHeader>
//       <CardBody className="overflow-x-scroll">
//         <table className="w-full min-w-max table-auto text-left">

//         </table>
//       </CardBody>
//     </Card>
//   );
// }

// export default DataTable;

// import React, { useState, useEffect } from "react";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@material-tailwind/react";
// import { useAuth } from "@/utils/AuthContext";
// import newRequest from "@/utils/api-client";

// const DataTable = () => {
//   const [analysisData, setAnalysisData] = useState([]);
//   const [selectedAnalysis, setSelectedAnalysis] = useState(null);

//   const { currentUser } = useAuth();

//   // Fetch data from the API on component mount
//   useEffect(() => {
//     const fetchAnalysisData = async () => {
//       try {
//         const response = await newRequest.get("/analysis");
//         console.log(response.data); // Log the response to check the structure
//         setAnalysisData(response.data);
//       } catch (error) {
//         console.error("Error fetching analysis data:", error);
//       }
//     };

//     fetchAnalysisData();
//   }, []); // Run the effect only on mount

//   // Function to handle click on a row and show detailed analysis in a modal
//   const handleRowClick = (analysis) => {
//     setSelectedAnalysis(analysis);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedAnalysis(null);
//   };

//   return (
//     <>
//       {/* Scrollable table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           {/* Table header */}
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2">Agent Name</th>
//               <th className="border px-4 py-2">Reason</th>
//               <th className="border px-4 py-2">Date</th>
//               {/* Add more columns as needed */}
//               <th className="border px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {Array.isArray(analysisData) && analysisData.length > 0 ? (
//               analysisData.map((analysis) => (
//                 <tr
//                 key={analysis._id}
//                 className="cursor-pointer hover:bg-gray-50"
//                 onClick={() => handleRowClick(analysis)}
//                 >
//                   <td className="border px-4 py-2">{analysis.agent_name}</td>
//                   <td className="border px-4 py-2">{analysis.reason}</td>
//                   <td className="border px-4 py-2">{analysis.date}</td>
//                   {/* Add more columns as needed */}
//                   <td className="border px-4 py-2">
//                     <button className="text-blue-500">Details</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td className="border px-4 py-2" colSpan="4">
//                   No analysis data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for detailed analysis */}
//       {selectedAnalysis && (
//         <Modal size="lg" active={true} toggler={() => closeModal()}>
//           <ModalHeader toggler={() => closeModal()}>Detailed Analysis</ModalHeader>
//           <ModalBody>
//   <p>Agent Name: {selectedAnalysis.agent_name}</p>
//   <p>Reason: {selectedAnalysis.reason}</p>
//   <p>Date: {selectedAnalysis.date}</p>
//   {/* Add more properties as needed */}
// </ModalBody>

//           <ModalFooter>
//             <Button color="red" onClick={() => closeModal()}>
//               Close
//             </Button>
//           </ModalFooter>
//         </Modal>
//       )}
//     </>
//   );
// };

// export default DataTable;


// import React, { useState, useEffect } from "react";
// import { useAuth } from "@/utils/AuthContext";
// import newRequest from "@/utils/api-client";

// const DataTable = () => {
//   const [analysisData, setAnalysisData] = useState([]);
//   const [selectedAnalysis, setSelectedAnalysis] = useState(null);

//   const { currentUser } = useAuth();

//   // Fetch data from the API on component mount
//   useEffect(() => {
//     const fetchAnalysisData = async () => {
//       try {
//         const response = await newRequest.get("/analysis");
//         setAnalysisData(response.data);
//       } catch (error) {
//         console.error("Error fetching analysis data:", error);
//       }
//     };

//     fetchAnalysisData();
//   }, []); // Run the effect only on mount
//   console.log(analysisData)

//   // Function to handle click on a row and show detailed analysis in a modal
//   const handleRowClick = (analysis) => {
//     setSelectedAnalysis(analysis);
//   };
//   const deleteAnalyses = async (analysis) => {
//     try {
//       await newRequest.delete(`/analysis/${analysis._id}`)
//       const response = await newRequest.get("/analysis");
//       setAnalysisData(response.data);
//     } catch (error) {
      
//     }
//   }

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedAnalysis(null);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Agent Name
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Reason
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Date
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Actions
//             </th>
//             <th>

//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {analysisData.map((analysis) => (
//             <tr
//               key={analysis._id}
//               className="cursor-pointer hover:bg-gray-50"
//               // onClick={() => handleRowClick(analysis)}
//             >
//               <td className="px-6 py-4 whitespace-nowrap">{analysis.agent_name}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{analysis.reason}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{analysis.date}</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="text-blue-500" onClick={() => handleRowClick(analysis)}>
//                   Details
//                 </button>
//               </td>
//               <td>
//               <button className="text-red-500" onClick={() => deleteAnalyses(analysis)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for detailed analysis */}
//       {selectedAnalysis && (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
//               &#8203;
//             </span>

//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Detailed Analysis</h3>
//                     <div className="mt-2">
//                       {/* Display detailed analysis information here */}
//                       <pre>{JSON.stringify(selectedAnalysis, null, 2)}</pre>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   onClick={() => closeModal()}
//                   type="button"
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataTable;

import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// The table head.
const TABLE_HEAD = ["Duration", "Date", "Agent", "Reason", ""];
import { useAuth } from "@/utils/AuthContext";

export function DataTable() {
  // useState varibale contains the past analysis data.
  const [analysis, setAnalysis] = useState([]);
  const { currentUser } = useAuth();

  // This is used to get the analysis data from the backend database.
  const { isLoading, error, data } = useQuery({
    queryKey: ["analysis"],
    queryFn: () =>
      ApiClient.get(`/analysis`, {
        // // ID of the user who is logged in. Currently a dummy value.
        // owner: 1,
      }),
  });

  // For updating the analysis state variable.
  useEffect(() => {
    if (data) {
      setAnalysis(data.data);
    }
  }, [data]);

  console.log("analysis from the database:", analysis);

  // Currently using dummy values for the table rows.
  return (
    <Card>
      <CardHeader className="p-5" variant="gradient" color="blue">
        <Typography variant="h6" color="white">
          Analysis History
        </Typography>
      </CardHeader>
      <CardBody className="overflow-x-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Displaying the past analysis */}
            {!isLoading &&
              analysis &&
              analysis.map((item, index) => (
                <tr key={index}>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {`${item.duration} min`}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.agent_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {/* Only showing the first 9 words of reason for the call rejection. */}
                      {`${item.reason.split(" ").slice(0, 9).join(" ")} ...`}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Link
                      key={index}
                      to={{
                        pathname: "/dashboard/result-past-page",
                      }}
                      state={{
                        isDBData: true,
                        analysisData: item.description,
                        url: item.file_url,
                        fileName: item.file_name,
                        agentName: item.agent_name,
                        reason: item.reason,
                      }}
                      className="text-blue-gray font-medium"
                    >
                      :
                    </Link>
                  </td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default DataTable;
