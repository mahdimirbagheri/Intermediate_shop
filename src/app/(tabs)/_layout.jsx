import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
      <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "خانه",
            tabBarIcon: ({focused , size, color}) => <Ionicons name={focused ? "home": "home-outline"} size={size} color={color}/> ,
          }}
        />
        <Tabs.Screen
          name="ProductList"
          options={{
            title: "لیست محصولات",
            tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? "list": "list-outline"} size={size} color={color} />
          }}
        />
        <Tabs.Screen 
          name="Wishlist"
          options={{
            title: "لیست علاقه مندی ها ",
            tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? "heart" : "heart-outline"} size={size} color={color} />
          }}
        />
        <Tabs.Screen
          name="Card"
          options={{
            title: "سفارشات",
            tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? "card": "card-outline"} size={size} color={color} />
          }}
        />
      </Tabs>
  );
}
