import WifiManager from 'react-native-wifi-reborn';
import axios from 'axios';

export function scanNetwork() {
  return new Promise((resolve, reject) => {
    const devices = [];

    const ssid = WifiManager.getSSID();
    if (!ssid) {
      reject("Não há conexão WiFi ativa");
      return;
    }

    const networkPrefix = WifiManager.getSSID().replace(/\"/g, '').replace(/\s/g, '').replace(/(.{2})/g, '$1:');
    const networkPrefixRegex = new RegExp(`^${networkPrefix}`);
    //const networkPrefix = '10.1.2.'; //rede de teste na VM
    for (let i = 1; i < 255; i++) {
      //const host = networkPrefix.replace(/:$/g, `.${i}`);
      const host = networkPrefix + i;
      fetch(`http://${host}/status`)
        .then((response) => {
          if (response.status === 200) {
            const jsonString = {
              IP: host
            }
            devices.push(jsonString);
            console.log('Achei esse aqui ó', devices);
          }
        })
        .catch((error) => {

        });
    }

    setTimeout(() => {
      resolve(devices);
      console.log('Timeout');
    }, 9000); // altere aqui o tempo que deseja aguardar antes de resolver a Promise
  });
}

