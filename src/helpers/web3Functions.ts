import {ethers} from "ethers";
import * as rainSDK from "rain-sdk";

const WARNING_MESSAGE="Are you connected with your Web3 Wallet? (Click the button at the top right)!";

/**
 * Called within the modal for making a buy
 * THIS MUST NOT BE SHOWN BEFORE getSaleData() HAS FINISHED OR THE DATA WILL BE FROM .ENV
 */
export async function initiateClaim(
  signer: any, setButtonLock: any, setLoading: any, account: string, setConsoleData: any, setConsoleColor: any, tokenAddress: string, setClaimComplete: any
) {
  try {
    if (account === "" || typeof account === 'undefined') {
      alert(WARNING_MESSAGE);
      return;
    }

    setButtonLock(true);
    setLoading(true);

    // @ts-ignore
    const emissionsErc20 = new rainSDK.EmissionsERC20(tokenAddress, signer);

    // TODO FIGURE OUT WHAT IS HAPPENING WITH ADDRESSZERO
    const claimTransaction = await emissionsErc20.claim(account, ethers.constants.AddressZero);
    const claimReceipt = await claimTransaction.wait();
    console.log('Success', claimReceipt);

    setConsoleData(`Complete!`);
    setConsoleColor(`green`); // todo add to struct
    setClaimComplete(true);
    //   setButtonLock(false); // don't set to true to disincentive users from continuing to click it
    setLoading(false);
  } catch(err) {
    setLoading(false);
    setButtonLock(false);
    setConsoleData(`Claim Failed (Check console for more data).`);
    setConsoleColor(`red`); // todo add to struct
    console.log(`Info: Something went wrong:`, err);
  }
}

/**
 * Reserve Token Balance for User
 */
export async function getReserveBalance(signer: any, account: string, reserveTokenAddress: string, setReserveTokenBalance: any) {
  try {
    console.log(`Reserve token address`, reserveTokenAddress)
    const token = new rainSDK.EmissionsERC20(reserveTokenAddress, signer);

    let balance = await token.balanceOf(account);
    let humanReadableBalance = `${parseInt(balance.toString())/10**18}`;

    console.log(`User Balance`, humanReadableBalance)
    setReserveTokenBalance(humanReadableBalance); // todo does it need /10**18?

  } catch(err) {
    console.log(`Info: Something went wrong:`, err);
  }
}
