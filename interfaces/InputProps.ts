export interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: "default" | "numeric" | "email-address" | "phone-pad";
  exampleText?: string;
  error?: string | null;
}
