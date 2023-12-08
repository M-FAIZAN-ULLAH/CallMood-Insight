// import React from "react";
// import {
//   Typography,
//   Alert,
//   Card,
//   CardHeader,
//   CardBody,
// } from "@material-tailwind/react";
// import { InformationCircleIcon } from "@heroicons/react/24/outline";

// export function HelpAndSupport() {
//   const [showAlerts, setShowAlerts] = React.useState({
//     blue: true,
//     green: true,
//     orange: true,
//     red: true,
//   });
//   const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
//     blue: true,
//     green: true,
//     orange: true,
//     red: true,
//   });
//   const alerts = ["blue", "green", "orange", "red"];

//   return (
//     <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
//       <Card>
//         <CardHeader
//           color="transparent"
//           floated={false}
//           shadow={false}
//           className="m-0 p-4"
//         >
//           <Typography variant="h5" color="blue-gray">
//             Alerts
//           </Typography>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4 p-4">
//           {alerts.map((color) => (
//             <Alert
//               key={color}
//               show={showAlerts[color]}
//               color={color}
//               dismissible={{
//                 onClose: () =>
//                   setShowAlerts((current) => ({ ...current, [color]: false })),
//               }}
//             >
//               A simple {color} alert with an <a href="#">example link</a>. Give
//               it a click if you like.
//             </Alert>
//           ))}
//         </CardBody>
//       </Card>
//       <Card>
//         <CardHeader
//           color="transparent"
//           floated={false}
//           shadow={false}
//           className="m-0 p-4"
//         >
//           <Typography variant="h5" color="blue-gray">
//             Alerts with Icon
//           </Typography>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4 p-4">
//           {alerts.map((color) => (
//             <Alert
//               key={color}
//               show={showAlertsWithIcon[color]}
//               color={color}
//               icon={
//                 <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
//               }
//               dismissible={{
//                 onClose: () =>
//                   setShowAlertsWithIcon((current) => ({
//                     ...current,
//                     [color]: false,
//                   })),
//               }}
//             >
//               A simple {color} alert with an <a href="#">example link</a>. Give
//               it a click if you like.
//             </Alert>
//           ))}
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

// export default HelpAndSupport;

import React, { useState, useEffect } from "react";
import newRequest from "@/utils/api-client";

const HelpAndSupport = () => {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  const sendMessage = async () => {
    try {
      const response = await newRequest.post("/messages/send", { message });
      setSuccessMessage("Your message has been sent to the admin!");
      setMessage(""); // Clear the input box
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error
    }
  };

  useEffect(() => {
    // Optional: Fetch and display previous messages when the component mounts
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-200 text-green-800 rounded-md">
          {successMessage}
        </div>
      )}

      <button
        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={sendMessage}
      >
        Send Message
      </button>
    </div>
  );
};

export default HelpAndSupport;
