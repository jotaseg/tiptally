import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TipButton } from "./components/TipButton";
import { Input } from "./components/Input";

export default function App() {
  const [billAmount, setBillAmount] = useState("0");
  const [selectedTipPercentage, setSelectedTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState("1");
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
  const [customTipPercentage, setCustomTipPercentage] = useState("");
  const [inputError, setInputError] = useState(false);

  const calculateTipAndTotal = () => {
    const bill = parseFloat(billAmount);
    const tipPercentage =
      selectedTipPercentage === 0
        ? parseFloat(customTipPercentage) / 100
        : selectedTipPercentage / 100;
    const people = parseFloat(numberOfPeople);

    if (!isNaN(bill) && !isNaN(tipPercentage) && !isNaN(people) && people > 0) {
      const tipAmount = bill * tipPercentage;
      const totalAmount = bill + tipAmount;
      const tipPerPerson = tipAmount / people;
      const totalPerPerson = totalAmount / people;

      setTipAmountPerPerson(Number(tipPerPerson.toFixed(2)));
      setTotalAmountPerPerson(Number(totalPerPerson.toFixed(2)));
      setInputError(false);
    } else {
      setTipAmountPerPerson(0);
      setTotalAmountPerPerson(0);
      setInputError(true);
    }
  };

  const handleCustomTipChange = (text: string) => {
    if (selectedTipPercentage !== 0) {
      setCustomTipPercentage("");
    }

    if (/^\d*\.?\d*$/.test(text) || text === "") {
      setCustomTipPercentage(text);
    }
  };

  const resetCalculator = () => {
    setBillAmount("0");
    setSelectedTipPercentage(15);
    setNumberOfPeople("1");
    setCustomTipPercentage("");
    setTipAmountPerPerson(0);
    setTotalAmountPerPerson(0);
    setInputError(false);
  };

  useEffect(() => {
    calculateTipAndTotal();
  }, [billAmount, selectedTipPercentage, numberOfPeople, customTipPercentage]);

  return (
    <View style={styles.container}>
      <Input
        label="Bill Amount"
        value={billAmount}
        onChangeText={setBillAmount}
        keyboardType="numeric"
        exampleText="e.g., 50.00"
        error={inputError && "Invalid input"}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Tip Percentage</Text>
        <View style={styles.tipButtonsContainer}>
          {/* Tip Percentage buttons go here */}
          <TipButton
            tipPercentage={5}
            setSelectedTipPercentage={setSelectedTipPercentage}
          />
          <TipButton
            tipPercentage={10}
            setSelectedTipPercentage={setSelectedTipPercentage}
          />
          <TipButton
            tipPercentage={15}
            setSelectedTipPercentage={setSelectedTipPercentage}
          />
          <TipButton
            tipPercentage={25}
            setSelectedTipPercentage={setSelectedTipPercentage}
          />
          <TipButton
            tipPercentage={50}
            setSelectedTipPercentage={setSelectedTipPercentage}
          />
        </View>
      </View>

      <Input
        label="Select Tip Percentage"
        value={customTipPercentage}
        onChangeText={handleCustomTipChange}
        keyboardType="numeric"
        exampleText="e.g., 15"
      />

      <Input
        label="Number of People"
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
        keyboardType="numeric"
        exampleText="e.g., 2"
        error={inputError && "Number of people must be greater than 0"}
      />

      <View style={styles.resultContainer}>
        <Text style={styles.result}>
          Tip Amount per Person: ${tipAmountPerPerson}
        </Text>
        <Text style={styles.result}>
          Total Amount per Person: ${totalAmountPerPerson}
        </Text>
      </View>

      <TouchableOpacity onPress={resetCalculator}>
        <Text style={styles.resetButton}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 18,
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
  inputError: {
    borderColor: "red",
  },
  example: {
    fontSize: 12,
    color: "#888",
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  tipButtonsContainer: {
    flexDirection: "row", // Display children horizontally
    justifyContent: "space-between", // Distribute children evenly along the row
    marginTop: 5,
  },
  resultContainer: {
    width: "100%",
    alignItems: "center",
  },
  result: {
    fontSize: 16,
    marginTop: 10,
    color: "#fff",
  },
  resetButton: {
    fontSize: 18,
    color: "blue",
    marginTop: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
