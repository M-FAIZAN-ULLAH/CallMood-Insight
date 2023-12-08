// import {
//   FaceFrownIcon,
//   UserPlusIcon,
//   UserIcon,
//   ClockIcon,
//   ChartBarIcon,
//   PhoneIcon,
//   DocumentArrowDownIcon,
// } from "@heroicons/react/24/solid";

// import { useAuth } from "@/utils/AuthContext";

// const { currentUser } = useAuth()

// export const callHistoryStatisticsCardData = [
//   {
//     color: "green",
//     icon: PhoneIcon,
//     title: "Analysis Performed",
//     value: currentUser.analysisCount,
//     footer: {
//       color: "text-green-500",
//       value: "+55%",
//       label: "than last week",
//     },
//   },
//   {
//     color: "blue",
//     icon: ClockIcon,
//     title: "Saved Analysis",
//     value:  currentUser.savedAnalysis,
//     footer: {
//       color: "text-blue-500",
//       value: "2 min.",
//       label: "than last month",
//     },
//   },
//   {
//     color: "orange",
//     icon: DocumentArrowDownIcon,
//     title: "Export History",
//     value: "PDF",
//     footer: {
//       color: "text-orange-500",
//       value: "",
//       label: "",
//     },
//   },
// ];

// export default callHistoryStatisticsCardData;
import {
  FaceFrownIcon,
  UserPlusIcon,
  UserIcon,
  ClockIcon,
  ChartBarIcon,
  PhoneIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";

import { useAuth } from "@/utils/AuthContext";

const getStatisticsCardData = () => {
  const { currentUser } = useAuth();

  return [
    {
      color: "green",
      icon: PhoneIcon,
      title: "Analysis Performed",
      value: currentUser.analysisCount,
      footer: {
        color: "text-green-500",
        value: "+55%",
        label: "than last week",
      },
    },
    {
      color: "blue",
      icon: ClockIcon,
      title: "Saved Analysis",
      value: currentUser.savedAnalysis,
      footer: {
        color: "text-blue-500",
        value: "2 min.",
        label: "than last month",
      },
    },
    {
      color: "orange",
      icon: DocumentArrowDownIcon,
      title: "Export History",
      value: "PDF",
      footer: {
        color: "text-orange-500",
        value: "",
        label: "",
      },
    },
  ];
};

export default getStatisticsCardData;
