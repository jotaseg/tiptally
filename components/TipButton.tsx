import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import { TipButtonProps } from "../interfaces/TipButtonProps";

export const TipButton: FC<TipButtonProps> = ({
  tipPercentage,
  setSelectedTipPercentage,
}) => {
  const handleTipSelection = () => {
    setSelectedTipPercentage(tipPercentage);
  };

  return (
    <TouchableOpacity onPress={handleTipSelection}>
      <Text style={styles.tipPercentageButton}>{tipPercentage}%</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tipPercentageButton: {
    fontSize: 18,
    color: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
