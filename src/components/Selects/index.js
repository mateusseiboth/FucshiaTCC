import React, { useState } from "react";
import { View, Text, Picker } from "react-native";

export default function Select(props) {
  const [selectedValue, setSelectedValue] = useState(props.initialValue);

  return (
    <View>
      <Text>{props.label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {props.options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
}
