import React from "react";
import {Color} from "../../../GlobalStyles";
import Loader from "../gerais/ruido";

const {default: axios} = require("axios");
const {Modal, View, TouchableOpacity, StyleSheet, Text, TextInput, Alert, ToastAndroid} = require("react-native");

export default function ModalCamera(props) {
  return (
    <Modal
      visible={props.showModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => props.onClose()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Streaming de {props.item?.title}</Text>
          <View style={styles.modalStream}>
            <Loader />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => props.onClose()}>
              <Text style={[styles.buttonText, {marginRight: 20}]}>Fechar</Text>
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
    height: "50%",
    borderRadius: 8,
    alignItems: "center",
  },
  modalStream: {
    marginTop: 20,
    width: "80%",
    height: "70%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
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
    position: "absolute",
    bottom: 20,
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
