// import { Link } from "react-router-dom";
// import logoLinearWhite from "/img/Logo-vertical-white.png";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
//   Select,
//   Option,
// } from "@material-tailwind/react";

// /**
//  * Sign-In Component
//  *
//  * The SignIn component renders a sign-in form, including:
//  * - Background image (img)
//  * - Sign-in form (Card) with:
//  *   - Header (CardHeader)
//  *   - Body (CardBody) with form elements:
//  *     - Email and password input (Input)
//  *     - Role selection (Select) with options (Option)
//  *     - "Remember Me" checkbox (Checkbox)
//  *   - Footer (CardFooter) with:
//  *     - Submit button (Button)
//  *     - Text (Typography)
//  *     - Navigation link (Link) to the sign-up page
//  *
//  * Props:
//  * - This component does not accept any props.
//  *
//  * Dependencies:
//  * - react
//  * - @mui/material
//  * - @mui/icons-material
//  * - react-router-dom
//  *
//  * Notes:
//  * - The SignIn component uses the Card component from the @mui/material library to display the sign-in form.
//  * - It utilizes various components from @mui/material for form elements and styling.
//  * - An image component is used to display a background image.
//  */

// export function SignIn() {
//   return (
//     <>
//       <img
//         src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         className="absolute inset-0 z-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
//       <div className="container mx-auto p-4">
//         <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
//           <CardHeader
//             variant="gradient"
//             color="blue"
//             className="mb-4 grid h-28 place-items-center"
//           >
//             <img src={logoLinearWhite} className="h-28 w-32 object-cover" />
//           </CardHeader>
//           <CardBody className="flex flex-col gap-4">
//             <Input type="email" label="Email" size="lg" />
//             <Select label="Role">
//               <Option>Admin</Option>
//               <Option>Analyst</Option>
//             </Select>
//             <Input type="password" label="Password" size="lg" />
//             <div className="-ml-2.5">
//               <Checkbox label="Remember Me" />
//             </div>
//           </CardBody>
//           <CardFooter className="pt-0">
//             <Button variant="gradient" fullWidth>
//               Sign In
//             </Button>
//             <Typography variant="small" className="mt-6 flex justify-center">
//               Don't have an account?
//               <Link to="/auth/sign-up">
//                 <Typography
//                   as="span"
//                   variant="small"
//                   color="blue"
//                   className="ml-1 font-bold"
//                 >
//                   Sign up
//                 </Typography>
//               </Link>
//             </Typography>
//           </CardFooter>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default SignIn;

// import { Link } from "react-router-dom";
// import logoLinearWhite from "/img/Logo-vertical-white.png";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
//   Select,
//   Option,
// } from "@material-tailwind/react";
// import newRequest from "../../utilis/NewRequest";
// import { useNavigate } from "react-router-dom"
// import React, { useState } from "react";
// import { useAuth } from "../../utilis/AuthContext";

// /**
//  * Sign-In Component
//  *
//  * The SignIn component renders a sign-in form, including:
//  * - Background image (img)
//  * - Sign-in form (Card) with:
//  *   - Header (CardHeader)
//  *   - Body (CardBody) with form elements:
//  *     - Email and password input (Input)
//  *     - Role selection (Select) with options (Option)
//  *     - "Remember Me" checkbox (Checkbox)
//  *   - Footer (CardFooter) with:
//  *     - Submit button (Button)
//  *     - Text (Typography)
//  *     - Navigation link (Link) to the sign-up page
//  *
//  * Props:
//  * - This component does not accept any props.
//  *
//  * Dependencies:
//  * - react
//  * - @mui/material
//  * - @mui/icons-material
//  * - react-router-dom
//  *
//  * Notes:
//  * - The SignIn component uses the Card component from the @mui/material library to display the sign-in form.
//  * - It utilizes various components from @mui/material for form elements and styling.
//  * - An image component is used to display a background image.
//  */

// export function SignIn() {

//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState(null)

//   const navigate = useNavigate()

//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await newRequest.post("/users/login", {
//         username,
//         password
//       })
//       // localStorage.setItem("currentUser", JSON.stringify(res.data))
//       login(res.data)
//       navigate("/home")      
//     } catch (err) {
//       setError(err.response.data)
//     }
//   };


//   return (
//     <>
//       <img
//         src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         className="absolute inset-0 z-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
//       <div className="container mx-auto p-4">
//         <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
//           <CardHeader
//             variant="gradient"
//             color="blue"
//             className="mb-4 grid h-28 place-items-center"
//           >
//             <img src={logoLinearWhite} className="h-28 w-32 object-cover" />
//           </CardHeader>
//           <CardBody className="flex flex-col gap-4">
//             <Input type="email" label="Email" size="lg" />
//             <Select label="Role">
//               <Option>Admin</Option>
//               <Option>Analyst</Option>
//             </Select>
//             <Input type="password" label="Password" size="lg" />
//             <div className="-ml-2.5">
//               <Checkbox label="Remember Me" />
//             </div>
//           </CardBody>
//           <CardFooter className="pt-0">
//             <Button variant="gradient" fullWidth>
//               Sign In
//             </Button>
//             <Typography variant="small" className="mt-6 flex justify-center">
//               Don't have an account?
//               <Link to="/auth/sign-up">
//                 <Typography
//                   as="span"
//                   variant="small"
//                   color="blue"
//                   className="ml-1 font-bold"
//                 >
//                   Sign up
//                 </Typography>
//               </Link>
//             </Typography>
//           </CardFooter>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default SignIn;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoLinearWhite from '/img/Logo-vertical-white.png';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from '@material-tailwind/react';
import newRequest from '@/utils/api-client';
import { useAuth } from '@/utils/AuthContext';

export function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showNotFoundAlert, setShowNotFoundAlert] = useState(false);

  const navigate = useNavigate();
  const { login, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post('/users/login', {
        username,
        password,
      });

      if (res.data === "User not found") {
        setShowNotFoundAlert(true);
      } else {
        login(res.data);
        navigate('/home');
      }

    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <>
      <img
        src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <img src={logoLinearWhite} className="h-28 w-32 object-cover" />
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="text"
                label="Username"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Button type="submit" variant="gradient" fullWidth>
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Link to="/auth/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
            {error & error}
          </form>
        </Card>
      </div>
    </>
  );
}
