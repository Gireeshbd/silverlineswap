import store from "@/store";
import { Vue } from "vue-class-component";
import Web3 from 'web3/dist/web3.min.js'
import Usdtabi from "@/utilis/usdtabi.js";
import presaleAbi from "@/utilis/presale.js";
export default class transaction extends Vue {
    /**
     * buying_Sln
     */
    public buying_Sln(amt: number) {
        console.log(amt)
        let amount: any = ((amt * 1e9).toString()) + '000000000'
        console.log(amount)
        if (store.state.provider) {
            //
            //setting web3 instance
            let web3 = new Web3(store.state.provider);
            //
            //setting contract address values
            let usdtcontractAddress: string = '0x55d398326f99059fF775485246999027B3197955'
            let presalecontractAdress: string = '0x038641693feE3115e3762d7eeE1205C8729DEAD4'
            //
            //creating the contract instances
            //
            let approveContract: any = new web3.eth.Contract(Usdtabi, usdtcontractAddress)
            let presaleContract: any = new web3.eth.Contract(presaleAbi, presalecontractAdress)
            //
            //crating transaction object
            //
            let txApprove: any = {
                from: store.state.walletAddress,
                to: usdtcontractAddress,
                data: approveContract.methods.approve(presalecontractAdress, amount).encodeABI()
            }
            //
            //presale transaction object
            let txPresale: any = {
                from: store.state.walletAddress,
                to: presalecontractAdress,
                data: presaleContract.methods.buy(amount).encodeABI()
            }
            //
            //sending the approve transaction object
            if (store.state.chainId=='56') {
                let approve = web3.eth.sendTransaction(txApprove)
            console.log(approve)
            approve.then((result) => {
                alert(result.transactionHash)
                let presale = web3.eth.sendTransaction(txPresale)
                presale.then((result) => {
                    alert(result.transactionHash)
                }).catch((e) => {
                    alert(e)
                })

            }
            ).catch((e) => {
                console.log(e)
            })
            }else{
                alert("Please connect to rinkeby")
            }
            
        } else {
            alert('Please connect Wallet First')
        }



    }
}