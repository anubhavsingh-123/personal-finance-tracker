// // import React, { useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { UserContext } from "../../context/UserContext";
// // import { SIDE_MENU_DATA } from "../../utils/data";

// // const SideMenu = ({ activeMenu }) => {
// //   const { user, clearUser } = useContext(UserContext);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     clearUser();
// //     navigate("/login");
// //   };

// //   const handleClick = (route) => {
// //     if (route === "logout") {
// //       handleLogout();
// //     } else {
// //       navigate(route);
// //     }
// //   };

// //   return (
// // //     <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-50">
// // //       {/* User Info */}
// // //       <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
// // //         {user?.profileImageUrl ? (
// // //           <img
// // //             src={user?.profileImageUrl || ""}
// // //             alt="Profile"
// // //             className="w-20 h-20 bg-slate-400 rounded-full object-cover"
// // //           />
// // //         ) : <CharAvatar fullName={user?.fullName || ""} width="w-20" height="h-20" style="text-xl" />}
// // //         <h5 className="text-gray-950 font-medium leading-6">
// // //           {user?.fullName || "Guest User"}
// // //         </h5>
// // //       </div>
// // <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-50">
// //   {/* User Info */}
// //   <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
// //     {user?.profileImageUrl ? (
// //       <img
// //         src={user.profileImageUrl}
// //         alt="Profile"
// //         className="w-20 h-20 bg-slate-400 rounded-full object-cover"
// //       />
// //     ) : (
// //       <CharAvatar
// //         fullName={user?.fullName || "Guest User"}
// //         width="w-20"
// //         height="h-20"
// //         style="text-xl"
// //       />
// //     )}
// //     <h5 className="text-gray-950 font-medium leading-6">
// //       {user?.fullName || "Guest User"}
// //     </h5>
// //   </div>
// // </div>

// //       {/* Menu Items */}
// //       {SIDE_MENU_DATA.map((item, index) => (
// //         <button
// //           key={`menu_${index}`}
// //           className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 ${
// //             activeMenu === item.label
// //               ? "text-white bg-primary"
// //               : "text-gray-700 hover:bg-gray-100"
// //           }`}
// //           onClick={() => handleClick(item.path)}
// //         >
// //           <item.icon className="text-xl" />
// //           {item.label}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // };

// // export default SideMenu;

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
// import { SIDE_MENU_DATA } from "../../utils/data";


// const SideMenu = ({ activeMenu }) => {
//   const { user, clearUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     clearUser();
//     navigate("/login");
//   };

//   const handleClick = (route) => {
//     if (route === "logout") {
//       handleLogout();
//     } else {
//       navigate(route);
//     }
//   };

//   return (
//     <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-50">
//       {/* User Info */}
//       <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
//         {user?.profileImageUrl ? (
//           <img
//             src={user.profileImageUrl}
//             alt="Profile"
//             className="w-20 h-20 bg-slate-400 rounded-full object-cover"
//           />
//         ) : (
//           <CharAvatar
//             fullName={user?.fullName || "Guest User"}
//             width="w-20"
//             height="h-20"
//             style="text-xl"
//           />
//         )}
//         <h5 className="text-gray-950 font-medium leading-6">
//           {user?.fullName || "Guest User"}
//         </h5>
//       </div>

//       {/* Menu Items */}
//       {SIDE_MENU_DATA.map((item, index) => (
//         <button
//           key={`menu_${index}`}
//           className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 ${
//             activeMenu === item.label
//               ? "text-white bg-primary"
//               : "text-gray-700 hover:bg-gray-100"
//           }`}
//           onClick={() => handleClick(item.path)}
//         >
//           <item.icon className="text-xl" />
//           {item.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default SideMenu;
// import React, { useContext } from "react";
// import { SIDE_MENU_DATA } from "../../utils/data";
// import { userContext } from "../../context/userContext";
// import { useNavigate } from "react-router-dom"

// const SideMenu = ({ activeMenu }) => {
//   const { user, clearUser } = useContext(userContext);
//   const navigate = useNavigate();

//   const handleClick = (route) => {
//     if (route === "logout") {
//       handleLogout();
//     } else {
//       navigate(route);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     clearUser();
//     navigate("/login");
//   };

//   return (
//     <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-50">
//       <div className=" flex flex-col items-center justify-center gap-3 mt-3 mb-7">
//         {user?.profileImageUrl && (
//           <img
//             src={user.profileImageUrl}
//             alt="Profile"
//             className="w-20 h-20 bg-slate-400 rounded-full"
//           />
//         )}
//         <h5 className="text-gray-950 font-medium leading-6">
//           {user?.fullName || ""}
//         </h5>
//       </div>

//       {SIDE_MENU_DATA.map((item, index) => (
//         <button
//           key={`menu_${index}`}
//           className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition ${
//             activeMenu === item.label
//               ? "text-white bg-primary"
//               : "text-gray-700 hover:bg-gray-100"
//           }`}
//           onClick={() => handleClick(item.path)}
//         >
//           <item.icon className="text-xl" />
//           {item.label}
//         </button>
//       ))}

//       {/* Logout button (optional) */}
//       {/* <button
//         className="w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg text-red-600 hover:bg-red-50 mt-4"
//         onClick={handleLogout}
//       >
//         <LuLogOut className="text-lg" />
//         Logout
//       </button> */}
//     </div>
//   );
// };

// export default SideMenu;

import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar"; // Adjust the import path as necessary

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(" User context in SideMenu:", user);

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    } 
      navigate(route);
    
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-50">
     
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
  {user?.profileImageUrl ? (
    <img
      src={user?.profileImageUrl  || ""}
      alt="Profile"
      className="w-20 h-20 bg-slate-400 rounded-full"
    />
  ) : (
    <CharAvatar fullName={user?.fullName || ""} width="w-20" height="h-20" style="text-xl" />
  )}

  <h5 className="text-gray-950 font-medium leading-6">
    {user?.fullName || ""}
  </h5>
</div>


      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition ${
            activeMenu === item.label
              ? "text-white bg-primary"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
