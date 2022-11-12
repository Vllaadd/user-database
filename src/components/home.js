import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
    return (
        <>
            <div>Welcome Home</div>
            <button onClick={()=>navigate("order-summary")}>Please order</button>
        </>
    )
}

export default Home;