import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { profile } from "../features/auth/authSlice";
import Products from "./Product";

function Dashboard() {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return (
    <div> 
     
      <div className="container" style={{ display:"flex",flexDirection:"row",width:"30%" , float:"right" , border:"2px solid wheat",backgroundColor:"wheat "}}>
           
        <div style={{display:'flex', textAlign:"center", flexDirection:"column"}}> 
          <h3>{currentUser.message}</h3>
          <h4>{currentUser.data.name}</h4>
          <h3>{currentUser.data.email}</h3>
        </div>
        
      </div>
      <Products/>
    </div>
  );
}

export default Dashboard;
