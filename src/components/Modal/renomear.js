import React from "react";
import {Color} from "../../../GlobalStyles";

const {default: axios} = require("axios");
const {Modal, View, TouchableOpacity, StyleSheet, Text, TextInput, Alert, ToastAndroid} = require("react-native");

export default function ModalRename(props) {
  const [textInput, setTextInput] = React.useState("");

  const handleSave = () => {
    axios
      .get("http://" + props.device + "/cm?cmnd=FriendlyName" + props.item.accessGPIO + "%20" + textInput)
      .then((result) => {
        console.log(result.data);
        ToastAndroid.show(`Nome ${textInput} aplicado em GPIO${props.item.accessGPIO}`, ToastAndroid.LONG);
        const newArray = props.gpio.map((itemGPIO) => {
          return {
            ...itemGPIO,
            nome: itemGPIO.accessGPIO == props.item.accessGPIO ? textInput : itemGPIO.nome,
          };
        });
        props.setGPIO(newArray);

        props.onClose();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Ocorreu um erro",
          `${error.message}`,
          [
            {
              text: "Fechar",
              style: "cancel",
            },
          ],
          {cancelable: true}
        );
      });
  };

  return (
    <Modal
      visible={props.showModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => props.onClose()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Renomeando GPIO{props.item?.accessGPIO}</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome do ambiente"
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => props.onClose()}>
              <Text style={[styles.buttonText, {marginRight: 20}]}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave}>
              <Text style={[styles.buttonText, {marginLeft: 20}]}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Color.colorWhite,
    padding: 20,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: Color.colorBlack,
  },
  input: {
    height: 40,
    borderColor: Color.colorSmoke,
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    marginVertical: 20,
    padding: 10,
    color: Color.colorBlack,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: Color.colorWhite,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: Color.colorFuchsia,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
