import React from 'react'
import {Outlet, useSearchParams} from "react-router-dom";

const  Users =() => {
    const [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
    <div>User 1</div>
    <div>User 2</div>
    <div>User 3</div>
    <Outlet />
    <div>
        <button onClick={()=> setSearchParams({filter: "active"})}>Active Users</button>
        <button onClick={()=> setSearchParams({})}>Reset Filter</button>
    </div>
    </>
    
  )
}

export default Users;
