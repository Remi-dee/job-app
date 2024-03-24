import { Stack } from "expo-router";
import { useCallback } from "react";


function _layout() {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
}

export default _layout;
