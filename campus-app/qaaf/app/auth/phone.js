import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Phone() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  return (
    <View>
      <Text>Enter Phone</Text>
      <TextInput onChangeText={setPhone} placeholder="+91..." />
      <Button
        title="Send OTP"
        onPress={() => router.push({ pathname: "/auth/otp", params: { phone } })}
      />
    </View>
  );
}