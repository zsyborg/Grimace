import axios from "axios";

const HELIUS_RPC = "https://rpc.helius.xyz/?api-key=4adfbec4-c143-499a-99b6-55d3638d20a4";

export async function getAsset(assetId: any, rpcUrl = HELIUS_RPC): Promise<any> {
    try {
        const axiosInstance = axios.create({
            baseURL: rpcUrl,
          });
      const response = await axiosInstance.post(rpcUrl, {
        jsonrpc: "2.0",
        method: "getAsset",
        id: "rpd-op-123",
        params: {
          id: assetId
        },
      });
      return response.data.result;
    } catch (error) {
      console.error(error);
    }
  }

  
export async function getAssetProof(assetId: any, rpcUrl = HELIUS_RPC): Promise<any> {
    try {
        
        const axiosInstance = axios.create({
            baseURL: rpcUrl,
          });
      const response = await axiosInstance.post(rpcUrl, {
        jsonrpc: "2.0",
        method: "getAssetProof",
        id: "rpd-op-123",
        params: {
          id: assetId
        },
      });
      return response.data.result;
    } catch (error) {
      console.error(error);
    }
  }