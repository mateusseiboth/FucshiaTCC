import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase({ name: "fucshia.db", location: "default" });

export function criarTabela() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS dispositivos (id INTEGER PRIMARY KEY AUTOINCREMENT, ip TEXT)",
      [],
      (tx, results) => {
        console.log("Tabela criada com sucesso");
      },
      (error) => {
        console.log("Erro ao criar tabela", error);
      }
    );
  });
}

export function salvarDispositivo(ip) {
  criarTabela();
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO dispositivos (ip) VALUES (?)",
      [ip],
      (tx, results) => {
        console.log("Dispositivo salvo com sucesso");
      },
      (error) => {
        console.log("Erro ao salvar dispositivo", error);
      }
    );
  });
}

export async function recuperarDispositivo() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM dispositivos",
        [],
        (tx, results) => {
          const dispositivos = [];
          for (let i = 0; i < results.rows.length; i++) {
            dispositivos.push(results.rows.item(i).ip);
          }
          console.log(dispositivos);
          resolve(dispositivos);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}
