import React, {useState, useEffect} from "react";
import { Typography } from "@material-tailwind/react";
import { QueryResponseBox } from "@/widgets/layout";
import { ApiClient } from "@/utils";

// This import is used for stats cards like the one that says "Total Calls Analyzed", "Most Common Emotion" etc.
const queriesData = {
  labels: ["Unresolved Queries", "Resolved Queries"],
  datasets: [
    {
      data: [7, 3],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};
import { StatisticsCard, CardWrapper } from "@/widgets/cards";

// This import is used for the sample data for the statistics card.
import { statisticsCardDataAdminQueries } from "@/data";

// This import is used for the charts.
import { PieChart } from "@/widgets/charts";

export const AnalystQueries = () => {

  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await ApiClient.get("/messages/get-all");
        setQueries(response.data.data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);
  // Your code here

  return (
    // <div className="mt-12">
    //   {/* This div contains the cards that will be using to display the overall analysis stats. */}
    //   <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
    //     {/* Displaying sample data like "Total Calls Analyzed", "Most Common Emotion" etc from the statisticsCardsData.js file. */}
    //     {statisticsCardDataAdminQueries.map(
    //       ({ icon, title, footer, ...rest }) => (
    //         <StatisticsCard
    //           key={title}
    //           {...rest}
    //           title={title}
    //           icon={React.createElement(icon, {
    //             className: "w-6 h-6 text-white",
    //           })}
    //           footer={
    //             <Typography className="font-normal text-blue-gray-600">
    //               <strong className={footer.color}>{footer.value}</strong>
    //               &nbsp;{footer.label}
    //             </Typography>
    //           }
    //         />
    //       )
    //     )}
    //   </div>

    //   <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
    //     <PieChart data={queriesData} title="Pie Chart" span="1" />
    //   </div>
    //   <div className="mb-12 flex w-full flex-row gap-y-10">
    //     <QueryResponseBox
    //       analystPic={"https://i.imgur.com/8Km9tLL.png"}
    //       name="Ahmed"
    //       message="Hello, I am having trouble with the analysis. Can you please help me out?"
    //     />
    //   </div>
    // </div>


    <div className="mt-12">
      {/* Your existing code for overall analysis stats */}
      <div className="mb-12 flex w-full flex-row gap-y-10">
        {queries.map(({ _id, owner, message, response, createdAt }) => (
          <QueryResponseBox
            key={_id}
            analystPic={"https://i.imgur.com/8Km9tLL.png"} // You might want to change this dynamically based on the owner
            name={owner} // Assuming owner is a username
            message={message}
            response={response}
            createdAt={createdAt}
          />
        ))}
      </div>
    </div>


  );
};

export default AnalystQueries;
