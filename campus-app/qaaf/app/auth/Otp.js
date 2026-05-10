import { View, Text, TextInput, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

export default function Otp() {
  const { phone } = useLocalSearchParams();
  const router = useRouter();
  const [otp, setOtp] = useState("");

  return (
    <View>
      <Text>OTP for {phone}</Text>
      <TextInput onChangeText={setOtp} placeholder="Enter OTP" />
      <Button title="Verify" onPress={() => router.push("/auth/home")} />
    </View>
  );
}