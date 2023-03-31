import WifiManager from 'react-native-wifi-reborn';
import axios from 'axios';

export function scanNetwork() {
    return new Promise((resolve, reject) => {
      const devices = [];
      const networkPrefix = WifiManager.getSSID().replace(/\"/g, '').replace(/\s/g, '').replace(/(.{2})/g, '$1:');
      const networkPrefixRegex = new RegExp(`^${networkPrefix}`);
  
      for (let i = 1; i < 255; i++) {
        const host = networkPrefix.replace(/:$/g, `.${i}`);
        fetch(`http://${host}/status`)
          .then((response) => {
            if (response.status === 200) {
              devices.push(host);
            }
          })
          .catch((error) => {
            console.log(`Error scanning device at ${host}:`, error.message);
          });
      }
  
      setTimeout(() => {
        resolve(devices);
      }, 5000); // altere aqui o tempo que deseja aguardar antes de resolver a Promise
    });
  }

