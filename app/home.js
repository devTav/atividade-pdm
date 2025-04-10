import React from 'react';
import Home from '../screens/Home';
import { Stack } from 'expo-router';

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Home />
    </>
  );
}
