import { useReadContract } from "thirdweb/react";
import { CONTRACT } from "../utils/constants";

const Counter:React.FC=()=>{
    const { data:count, isLoading } = useReadContract({
        contract: CONTRACT,
        method: "getCount",
      });
    return(
        <div>{count}</div>
    )
}
export default Counter;