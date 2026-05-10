import { ThemeProvider } from "@qaaf/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View } from "react-native";

export default function App() {
  return (
    <ThemeProvider storage={AsyncStorage} defaultPreference="system">
      <View>
        <Text>Qaaf App</Text>
      </View>
    </ThemeProvider>
  );
}