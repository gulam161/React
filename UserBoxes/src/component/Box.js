import axios from "axios";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/material";

export const Covid = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getCovideData = () => {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/photos?_limit=30")
          .then((res) => setUsers(res.data));
      } catch (error) {
        console.log("error");
      }
    };
    getCovideData();
  }, []);

  console.log(users);

  return (
    <Box>
      <div className="flex items-center justify-center gap-x-2">
        <FiberManualRecordIcon sx={{ color: "teal" }} />
        <h1 className="text-red-600 font-bold text-[30px] text-center">
          User Photos
        </h1>
      </div>
      <section className="grid grid-cols-5 gap-y-4 my-3">
        {users.map(({ albumId, thumbnailUrl, title }) => {
          return (
            <div key={albumId} className="mx-auto">
              <img src={thumbnailUrl} alt={title} />
            </div>
          );
        })}
      </section>
    </Box>
  );
};
