// import {
//   HomeIcon,
//   UserIcon,
//   TableCellsIcon,
//   BellIcon,
//   ArrowRightOnRectangleIcon,
//   UserPlusIcon,
//   DocumentArrowUpIcon,
//   QuestionMarkCircleIcon,
// } from "@heroicons/react/24/solid";
// import {
//   Home,
//   UploadAudio,
//   CallHistory,
//   HelpAndSupport,
//   Account,
//   Result,
// } from "@/pages/dashboard";
// import { SignIn, SignUp } from "@/pages/auth";

// const icon = {
//   className: "w-5 h-5 text-inherit",
// };

// export const routes = [
//   {
//     layout: "dashboard",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "Dashboard Home",
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         icon: <DocumentArrowUpIcon {...icon} />,
//         name: "Upload Audio",
//         path: "/upload-audio",
//         element: <UploadAudio />,
//       },
//       {
//         icon: <TableCellsIcon {...icon} />,
//         name: "Call History",
//         path: "/call-history",
//         element: <CallHistory />,
//       },
//       {
//         icon: <QuestionMarkCircleIcon {...icon} />,
//         name: "Help & Support",
//         path: "/help-and-support",
//         element: <HelpAndSupport />,
//       },
//       {
//         icon: <UserIcon {...icon} />,
//         name: "Account",
//         path: "/account",
//         element: <Account />,
//       },
//       {
//         icon: <ArrowRightOnRectangleIcon {...icon} />,
//         name: "Log Out",
//         path: "/auth/sign-in",
//         element: <SignIn />,
//       },
//       {
//         name: "ResulPage",
//         path: "/result-page",
//         element: <Result />,
//       },
//     ],
//   },
//   {
//     layout: "auth",
//     pages: [
//       {
//         name: "Sign in",
//         path: "/sign-in",
//         element: <SignIn />,
//       },
//       {
//         name: "sign up",
//         path: "/sign-up",
//         element: <SignUp />,
//       },
//     ],
//   },
// ];

// export default routes;

// import {
//   HomeIcon,
//   UserIcon,
//   TableCellsIcon,
//   BellIcon,
//   ArrowRightOnRectangleIcon,
//   UserPlusIcon,
//   DocumentArrowUpIcon,
//   QuestionMarkCircleIcon,
// } from "@heroicons/react/24/solid";
// import {
//   // Home,
//   UploadAudio,
//   CallHistory,
//   Account,
//   Result,
//   ResultPast,
// } from "@/pages/dashboard";
// import { AdminHome, AnalystQueries, AnalystInfo } from "@/pages/admin";
// import { SignIn, SignUp } from "@/pages/auth";
// import HelpAndSupport from "@/pages/dashboard/help-and-support"
// import Home from "./pages/dashboard/home";

// const icon = {
//   className: "w-5 h-5 text-inherit",
// };


// export const routes = [
//   {
//     layout: "dashboard",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "Dashboard Home",
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         icon: <DocumentArrowUpIcon {...icon} />,
//         name: "Upload Audio",
//         path: "/upload-audio",
//         element: <UploadAudio />,
//       },
//       {
//         icon: <TableCellsIcon {...icon} />,
//         name: "Call History",
//         path: "/call-history",
//         element: <CallHistory />,
//       },
//       {
//         icon: <QuestionMarkCircleIcon {...icon} />,
//         name: "Help & Support",
//         path: "/help-and-support",
//         element: <HelpAndSupport />,
//       },
//       {
//         icon: <UserIcon {...icon} />,
//         name: "Account",
//         path: "/account",
//         element: <Account />,
//       },
//       {
//         icon: <ArrowRightOnRectangleIcon {...icon} />,
//         name: "Sign in",
//         path: "/auth/sign-in",
//         element: <SignIn />,
//       },
//       {
//         icon: <UserPlusIcon {...icon} />,
//         name: "sign up",
//         path: "/sign-up",
//         element: <SignUp />,
//       },
//       // {
//       //   icon: <ArrowRightOnRectangleIcon {...icon} />,
//       //   name: currentUser?  "Profile" : "Sign In",
//       //   path: currentUser? "/profile" : "/auth/sign-in",
//       //   element: currentUser? <ProfileComponent /> : <SignIn />,
//       // },
//       // {
//       //   icon: <UserPlusIcon {...icon} />,
//       //   name: currentUser? "Sign Out" : "Sign Up",
//       //   path: currentUser? "/auth/sign-out" : "/sign-up",
//       //   element: currentUser ? <SignOutComponent /> : <SignUp />,
//       // },
//       {
//         name: "ResulPage",
//         path: "/result-page",
//         element: <Result />,
//       },
//       {
//         name: "ResulPastPage",
//         path: "/result-past-page",
//         element: <ResultPast />,
//       },
//     ],
//   },
//   // {
//   //   title: "auth pages",
//   //   layout: "auth",
//   //   pages: [
//   //     {
//   //       icon: <ArrowRightOnRectangleIcon {...icon} />,
//   //       name: "Log Out",
//   //       path: "/sign-in",
//   //       element: <SignIn />,
//   //     },
//       // {
//       //   icon: <UserPlusIcon {...icon} />,
//       //   name: "sign up",
//       //   path: "/sign-up",
//       //   element: <SignUp />,
//       // },
//   //   ],
//   // },
// ];

// export default routes;

import {
  HomeIcon,
  UserIcon,
  TableCellsIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentArrowUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  UploadAudio,
  CallHistory,
  HelpAndSupport,
  Account,
  Result,
  ResultPast,
} from "@/pages/dashboard";

import { AdminHome, AnalystQueries, AnalystInfo } from "@/pages/admin";

import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard Home",
        path: "/home",
        element: <AdminHome />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Analysts Info",
        path: "/analyst-info",
        element: <AnalystInfo />,
      },
      {
        icon: <QuestionMarkCircleIcon {...icon} />,
        name: "Analysts Queries",
        path: "/analyst-queries",
        element: <AnalystQueries />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "Account",
        path: "/account",
        element: <Account />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Log Out",
        path: "/auth/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <DocumentArrowUpIcon {...icon} />,
        name: "Upload Audio",
        path: "/upload-audio",
        element: <UploadAudio />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Call History",
        path: "/call-history",
        element: <CallHistory />,
      },
      {
        icon: <QuestionMarkCircleIcon {...icon} />,
        name: "Help & Support",
        path: "/help-and-support",
        element: <HelpAndSupport />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "Account",
        path: "/account",
        element: <Account />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Log Out",
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        name: "ResulPage",
        path: "/result-page",
        element: <Result />,
      },
      {
        name: "ResulPastPage",
        path: "/result-past-page",
        element: <ResultPast />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        name: "Sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;

