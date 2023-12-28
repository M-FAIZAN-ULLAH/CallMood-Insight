
// import React, { useState, useEffect } from "react";
// import newRequest from "@/utils/api-client";

// const HelpAndSupport = () => {
//   const [message, setMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState(null);

//   const sendMessage = async () => {
//     try {
//       const response = await newRequest.post("/messages/send", { message });
//       setSuccessMessage("Your message has been sent to the admin!");
//       setMessage(""); // Clear the input box
//     } catch (error) {
//       console.error("Error sending message:", error);
//       // Handle error
//     }
//   };

//   useEffect(() => {
//     // Optional: Fetch and display previous messages when the component mounts
//   }, []);

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>

//       <div className="mb-4">
//         <label htmlFor="message" className="block text-sm font-medium text-gray-600">
//           Your Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows="4"
//           className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//       </div>

//       {successMessage && (
//         <div className="mb-4 p-3 bg-green-200 text-green-800 rounded-md">
//           {successMessage}
//         </div>
//       )}

//       <button
//         className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         onClick={sendMessage}
//       >
//         Send Message
//       </button>
//     </div>
//   );
// };

// export default HelpAndSupport;

import React, { useState } from "react";

import { CardWrapper } from "@/widgets/cards";

import { Button, Textarea, Avatar, Typography } from "@material-tailwind/react";

import { DataTable } from "@/widgets/charts";
import newRequest from "@/utils/api-client";

// This component page will be a messaging page for the user to contact the admin for help and support.
// The 2/3 of first row will contain a box for the user to type in their message and send it. The remaining 1/3 will contain another box that shows the image and name of the admin.
// The second row will contain a box that shows the table of messages that the user has sent to the admin.

export function HelpAndSupport() {
  // This variable is used to store the reason for the message.
  const [message, setMessage] = useState("");

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

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* This contains the message box */}

        <CardWrapper title="Message" span="2">
          <div className="flex flex-col">
            <form>
              <Textarea
                label="Type your complaint here..."
                size="lg"
                color="blue"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                color="blue"
                ripple={true}
                className="w-24 self-end"
                type="submit"
                onClick={sendMessage}
              >
                Send
              </Button>
            </form>
          </div>
        </CardWrapper>
        <CardWrapper title="Admin" span="1">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xl"
            />
            <div className=" text-center">
              <Typography variant="h6">Sami Zahir</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                sami@gmail.com
              </Typography>
            </div>
          </div>
        </CardWrapper>
      </div>
      <div className="mb-4 w-full">
        <DataTable />
      </div>
    </div>
  );
}

export default HelpAndSupport;
