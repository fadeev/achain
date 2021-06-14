// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/chain/tx";
import { MsgUpdatePost } from "./types/chain/tx";
import { MsgDeletePost } from "./types/chain/tx";
const types = [
    ["/alice.chain.chain.MsgCreatePost", MsgCreatePost],
    ["/alice.chain.chain.MsgUpdatePost", MsgUpdatePost],
    ["/alice.chain.chain.MsgDeletePost", MsgDeletePost],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreatePost: (data) => ({ typeUrl: "/alice.chain.chain.MsgCreatePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/alice.chain.chain.MsgUpdatePost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/alice.chain.chain.MsgDeletePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
