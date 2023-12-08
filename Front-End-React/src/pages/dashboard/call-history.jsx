import React from "react";

import { Typography } from "@material-tailwind/react";

// Statistics card component.
import { StatisticsCard } from "@/widgets/cards";

// Data for statistics cards.
// import { callHistoryStatisticsCardData } from "@/data/";
import getStatisticsCardData from "@/data/call-history-statistics-cards-data";

// Table component to display the analysis results.
import  DataTable  from "@/widgets/charts/data-table";
import newRequest from "@/utils/api-client";
import { useAuth } from "@/utils/AuthContext";


/**
 *
 * The `export function CallHistory()` is a React functional component that renders the Call History page.
 *
 **/

export function CallHistory() {

  const { currentUser } = useAuth()
  const callHistoryStatisticsCardData = getStatisticsCardData();

  return (
    <div className="mt-12">
      {/* This div contains the statistics cards which display overall stats like total calls analyzed, average call duration and export history option. */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Displaying sample data like "Total Calls Analyzed", "Average Call Duration" etc from the callHistoryStatisticsCardData.js file. */}
        {/* {callHistoryStatisticsCardData.map(
          ({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          )
        )} */}
         {callHistoryStatisticsCardData.map(
          ({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          )
        )}
      </div>

      {/* This div contains the table of all analysis results */}
      <div className="mb-4 w-full">
        <DataTable />
      </div>
    </div>
  );
}

export default CallHistory;

// import React, { useEffect, useState } from 'react';
// import { Typography } from '@material-tailwind/react';
// import { StatisticsCard } from '@/widgets/cards';
// import { callHistoryStatisticsCardData } from '@/data';
// import AnalysisTable from '@/widgets/layout/analysis-table';
// import newRequest from '@/utils/api-client';
// import { useAuth } from '@/utils/AuthContext';

// export function CallHistory() {
//   const { currentUser } = useAuth();
//   const [analysisData, setAnalysisData] = useState([]);

//   useEffect(() => {
//     // Fetch analysis data from the API
//     const fetchAnalysisData = async () => {
//       try {
//         const res = await newRequest.get('/api/analysis');
//         setAnalysisData(res.data);
//         console.log(analysisData)
//       } catch (error) {
//         console.error('Error fetching analysis data:', error);
//       }
//     };

//     fetchAnalysisData();
//   }, []);

//   return (
//     <div className="mt-12">
//       <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
//         {callHistoryStatisticsCardData.map(
//           ({ icon, title, footer, ...rest }) => (
//             <StatisticsCard
//               key={title}
//               {...rest}
//               title={title}
//               icon={React.createElement(icon, {
//                 className: 'w-6 h-6 text-white',
//               })}
//               footer={
//                 <Typography className="font-normal text-blue-gray-600">
//                   <strong className={footer.color}>{footer.value}</strong>
//                   &nbsp;{footer.label}
//                 </Typography>
//               }
//             />
//           )
//         )}
//       </div>

//       <div className="mb-4 w-full">
//         <AnalysisTable analysisData={analysisData} />
//       </div>
//     </div>
//   );
// }

// export default CallHistory;

