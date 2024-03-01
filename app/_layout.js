import { Stack } from "expo-router";

function _layout() {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
}

export default _layout;
