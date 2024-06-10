
import { ConnectButton,useActiveAccount } from "thirdweb/react";
import { client, chain } from '../utils/constants';
import Counter from "./counter";


const Login: React.FC = () => {
    const account = useActiveAccount();
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            {account?(
                    <div>
                    <ConnectButton client={client} chain={chain}></ConnectButton>
                    <Counter/>
                    </div>
                ) : (
                    <ConnectButton client={client} chain={chain}></ConnectButton>
                )
            }

        </div>
    )
}
export default Login;