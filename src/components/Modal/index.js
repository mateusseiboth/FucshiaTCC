import React from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';

export default function FucshiaModal(props) {
  const { visible, onClose, title, content } = props;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        onClose();
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            width: '80%',
            borderRadius: 8,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>{title}</Text>
          <Text>{content}</Text>
          <TouchableOpacity onPress={() => onClose()}>
            <Text style={{ color: 'blue', marginTop: 20 }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}