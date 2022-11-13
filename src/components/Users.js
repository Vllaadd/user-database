import {Outlet, useSearchParams} from "react-router-dom";

const  Users =() => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get("filter") === "active";
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
    {
        showActiveUsers ? (<h2>Showing active users</h2>):(<h2>Showing all users</h2>)
    }
    </>
  )
}

export default Users;
