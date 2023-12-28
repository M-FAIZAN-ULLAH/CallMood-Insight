// // import React from "react";
// // import { Typography } from "@material-tailwind/react";

// // // This import is used for stats cards like the one that says "Total Calls Analyzed", "Most Common Emotion" etc.
// // import { StatisticsCard } from "@/widgets/cards";

// // // This import is used for the sample data for the statistics card.
// // import { statisticsCardsData } from "@/data";

// // // This import is used for the charts.
// // import {  DoughnutChart, LineChart } from "@/widgets/charts";

// // /**
// //  *
// //  * The above code is a React component called "Home". It renders a layout with multiple sections.
// //  *
// //  * The first section contains the statistics cards. Shows the total calls analyzed most common emotion, etc.
// //  *
// //  * The second section contains the charts. The doughnut and line graph chart will be rendered from here.
// //  *
// //  * The third section contains the table of latest analysis results.
// //  *
// //  **/

// // export function Home() {
// //   return (
// //     <div className="mt-12">
// //       {/* This div contains the cards that will be using to display the overall analysis stats. */}
// //       <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
// //         {/* Displaying sample data like "Total Calls Analyzed", "Most Common Emotion" etc from the statisticsCardsData.js file. */}
// //         {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
// //           <StatisticsCard
// //             key={title}
// //             {...rest}
// //             title={title}
// //             icon={React.createElement(icon, {
// //               className: "w-6 h-6 text-white",
// //             })}
// //             footer={
// //               <Typography className="font-normal text-blue-gray-600">
// //                 <strong className={footer.color}>{footer.value}</strong>
// //                 &nbsp;{footer.label}
// //               </Typography>
// //             }
// //           />
// //         ))}
// //       </div>
// //       {/* This div contains the charts. The doughnut and line graph chart will be rendered from here */}
// //       <div className="mb-12 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
// //         {/* This is the doughnut chart */}
// //         <DoughnutChart />

// //         {/* This is the line graph chart */}
// //         <LineChart />
// //       </div>

// //       {/* This div contains the table of latest analysis results */}
// //       <div className="mb-4 w-full">
// //         {/* This is the component for the table of latest analysis results. */}
// //         {/* <DataTable /> */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;


// //---------------------------------------------------------------------------------------------------------------------------


// // import React, { useEffect, useState } from 'react';
// // import { Chart } from 'react-chartjs-2';
// // import newRequest from "@/utils/api-client"

// // const Home = () => {
// //   const [analysisData, setAnalysisData] = useState([]);

// //   // Fetch analysis data on component mount
// //   useEffect(() => {
// //     const fetchAnalysisData = async () => {
// //       try {
// //         const response = await newRequest.get('/analysis');
// //         const data = await response.json();
// //         setAnalysisData(data);
// //         console.log(analysisData)
// //       } catch (error) {
        
// //         console.error('Error fetching analysis data:', error);
// //       }
// //     };
// //     fetchAnalysisData();
// //   }, []);

// //   // Calculate average emotions for each entity
// //   const calculateAverageEmotions = (entities) => {
// //     const emotions = {
// //       anger: 0,
// //       disappointment: 0,
// //       disgust: 0,
// //       distress: 0,
// //       surprise: 0,
// //     };

// //     entities.forEach((entity) => {
// //       entity.emotions.forEach((emotion) => {
// //         emotions[emotion.name] += emotion.score;
// //       });
// //     });

// //     Object.keys(emotions).forEach((key) => {
// //       emotions[key] /= entities.length;
// //     });

// //     return emotions;
// //   };

// //   // Generate chart data
// //   const generateChartData = (entities) => {
// //     const emotionsData = {
// //       // labels: entities.map((entity) => entity.time.begin + '-' + entity.time.end),
// //       labels: entities.map((entity) => entity.time.begin + '-' + entity.time.end),
// //       datasets: [
// //         {
// //           label: 'Anger',
// //           data: entities.map((entity) => calculateAverageEmotions([entity]).anger),
// //           backgroundColor: '#ff9999',
// //           borderColor: '#ff0000',
// //         },
// //         {
// //           label: 'Disappointment',
// //           data: entities.map((entity) => calculateAverageEmotions([entity]).disappointment),
// //           backgroundColor: '#ffff99',
// //           borderColor: '#ffad00',
// //         },
// //         {
// //           label: 'Disgust',
// //           data: entities.map((entity) => calculateAverageEmotions([entity]).disgust),
// //           backgroundColor: '#c2c2f0',
// //           borderColor: '#66b2ff',
// //         },
// //         {
// //           label: 'Distress',
// //           data: entities.map((entity) => calculateAverageEmotions([entity]).distress),
// //           backgroundColor: '#99ff99',
// //           borderColor: '#00ff00',
// //         },
// //         {
// //           label: 'Surprise (negative)',
// //           data: entities.map((entity) => calculateAverageEmotions([entity]).surprise),
// //           backgroundColor: '#ffffcc',
// //           borderColor: '#ffff00',
// //         },
// //       ],
// //     };

// //     console.log("check this out: ", emotionsData)
// //     return emotionsData;

// //   };

// //   // Render charts
// //   const renderCharts = () => {
// //     // if (analysisData.length > 0) {
// //       return (
// //         <div>
// //           <h2>Emotions Analysis</h2>
// //           <Chart type="line" data={generateChartData(analysisData)} options={{}} />
// //         </div>
// //       );
// //     // }

// //     return <p>No analysis data available.</p>;
// //   };

// //   return (
// //     <div>
// //       <h1>Analysis Charts</h1>
// //       {renderCharts()}
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import newRequest from "@/utils/api-client";

// const Home = () => {
//   const [loading, setLoading] = useState(true);
//   const [analysisData, setAnalysisData] = useState([]);

//   const fetchAnalysisData = async () => {
//     try {
//       const response = await newRequest.get('/analysis');
//       const data = await response.json();
//       setAnalysisData(data);
//     } catch (error) {
//       console.error('Error fetching analysis data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAnalysisData();
//   }, []);

//   const calculateAverageEmotions = (entities) =>
//     entities.reduce((acc, entity) => {
//       entity.emotions.forEach(({ name, score }) => {
//         acc[name] += score;
//       });
//       return acc;
//     }, { anger: 0, disappointment: 0, disgust: 0, distress: 0, surprise: 0 });

//   const normalizeEmotions = (emotions, entityCount) => {
//     Object.keys(emotions).forEach((key) => {
//       emotions[key] /= entityCount;
//     });
//     return emotions;
//   };

//   const generateChartData = (entities) => {
//     const labels = entities.map((entity) => `${entity.time.begin} - ${entity.time.end}`);
//     const emotionsData = entities.map((entity) => {
//       const averageEmotions = calculateAverageEmotions([entity]);
//       return normalizeEmotions(averageEmotions, 1);
//     });

//     const datasets = Object.keys(emotionsData[0]).map((emotion) => ({
//       label: emotion,
//       data: emotionsData.map((data) => data[emotion]),
//       backgroundColor: 'rgba(75,192,192,0.2)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 1,
//       fill: false,
//     }));

//     return {
//       labels,
//       datasets,
//     };
//   };

//   const renderCharts = () => {
//     if (loading) {
//       return <p>Loading analysis data...</p>;
//     }

//     if (!analysisData.length) {
//       return <p>No analysis data available.</p>;
//     }

//     return (
//       <div>
//         <h2>Emotions Analysis</h2>
//         <Line data={generateChartData(analysisData)} />
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1>Analysis Charts</h1>
//       {renderCharts()}
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Typography } from "@material-tailwind/react";

// This import is used for stats cards like the one that says "Total Calls Analyzed", "Most Common Emotion" etc.
import { StatisticsCard } from "@/widgets/cards";

// This import is used for the sample data for the statistics card.
import { statisticsCardsData } from "@/data";

// This import is used for the charts.
import { DataTable, DoughnutChart, LineChart } from "@/widgets/charts";

/**
 *
 * The above code is a React component called "Home". It renders a layout with multiple sections.
 *
 * The first section contains the statistics cards. Shows the total calls analyzed most common emotion, etc.
 *
 * The second section contains the charts. The doughnut and line graph chart will be rendered from here.
 *
 * The third section contains the table of latest analysis results.
 *
 **/

export function Home() {
  return (
    <div className="mt-12">
      {/* This div contains the cards that will be using to display the overall analysis stats. */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Displaying sample data like "Total Calls Analyzed", "Most Common Emotion" etc from the statisticsCardsData.js file. */}
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
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
        ))}
      </div>
      {/* This div contains the charts. The doughnut and line graph chart will be rendered from here */}
      <div className="mb-12 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* This is the doughnut chart */}
        <DoughnutChart />

        {/* This is the line graph chart */}
        {/* <LineChart /> */}
      </div>

      {/* This div contains the table of latest analysis results */}
      <div className="mb-4 w-full">
        {/* This is the component for the table of latest analysis results. */}
        <DataTable />
      </div>
    </div>
  );
}

export default Home;
