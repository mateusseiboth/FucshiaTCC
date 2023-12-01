import { NetworkInfo } from "react-native-network-info";
import axios from "axios";

export async function scanNetwork(setTestando) {
  try {
    const gatewayIP = await NetworkInfo.getGatewayIPAddress();
    console.log(`Gateway IP: ${gatewayIP}`);
    const networkPrefix = gatewayIP.replace(
      /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
      "$1"
    );

    console.log(`Network Prefix: ${networkPrefix}`);
    const devices = [];
    const fetchPromises = [];
    for (let i = 1; i < 255; i++) {
      await new Promise((r) => setTimeout(r, 100));
      setTestando((0.39 * i).toFixed(2) + "%");
      if (i == 254) {
        setTestando("Finalizando");
      }
      console.log("Testando o IP " + networkPrefix + i);
      const host = networkPrefix + i;
      console.log(`http://${host}/cm?cmnd=status`);
      const promise = axios
        .get(`http://${host}/cm?cmnd=status`, {
          timeout: 3000,
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          if (
            response.status === 200 &&
            response.headers["content-type"].includes("application/json")
          ) {
            return response.data;
            console.log("Achei o " + host + "");
          } else {
            throw new Error("A resposta da requisição não é do tipo JSON.");
          }
        })
        .then((data) => {
          const jsonString = {
            IP: host,
          };
          devices.push(jsonString);
        })
        .catch((error) => { });
      fetchPromises.push(promise);
    }
    await Promise.all(fetchPromises);
    return devices;
  } catch (error) {
    console.log(error);
    return null;
  }
}
