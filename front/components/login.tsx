import { ConnectButton } from "thirdweb/react";
import { client, chain } from '../utils/constants';
const Login :React.FC =()=>{
return(
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        height:"100vh"
    }}>
    <ConnectButton client={client} chain={chain}></ConnectButton>
    </div>
)
}
export default Login;