import { useFonts } from "expo-font";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";

import ProductInfoHeaderRight from "../components/ProductInfoHeaderRight";
import { CardProvider } from "../context/CardContext";
import { ProductListProvider } from "../context/ProductListContext";
import { WishlistProvider } from "../context/WishlistContext";

export default function RootLayout() {

  const [loaded, error] = useFonts({
    "IRANSansX-Regular": require("@/assets/fonts/IRANSansX-Regular.otf"),
    "IRANSansX-Black": require("@/assets/fonts/IRANSansX-Black.otf"),
    "IRANSansX-Bold": require("@/assets/fonts/IRANSansX-Bold.otf"),
    "IRANSansX-DemiBold": require("@/assets/fonts/IRANSansX-DemiBold.otf"),
    "IRANSansX-ExtraBlack": require("@/assets/fonts/IRANSansX-ExtraBlack.otf"),
    "IRANSansX-ExtraBold": require("@/assets/fonts/IRANSansX-ExtraBold.otf"),
    "IRANSansX-Heavy": require("@/assets/fonts/IRANSansX-Heavy.otf"),
    "IRANSansX-Light": require("@/assets/fonts/IRANSansX-Light.otf"),
    "IRANSansX-Medium": require("@/assets/fonts/IRANSansX-Medium.otf"),
    "IRANSansX-Thin": require("@/assets/fonts/IRANSansX-Thin.otf"),
    "IRANSansX-UltraLight": require("@/assets/fonts/IRANSansX-UltraLight.otf")
  })

  if(error || !loaded)
  {
    return null;
  }

  return (
    <SafeAreaProvider>
        <ProductListProvider>
          <WishlistProvider>
            <CardProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="ProductInfo" 
                  options={({ route }) => ({ title: "صفحه محصول" , 
                            headerTitleAlign: "center",
                            headerTitleStyle: { fontFamily: "IRANSansX-Bold" },
                            headerRight: () => <ProductInfoHeaderRight productID={route.params.id} />
                        })} />
              </Stack>
              <StatusBar style="auto" />
            </CardProvider>
          </WishlistProvider>
        </ProductListProvider>
    </SafeAreaProvider>
  );
}
