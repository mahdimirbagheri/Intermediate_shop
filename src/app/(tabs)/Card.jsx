import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardAction from "../../components/CardAction";
import CardList from "../../components/CardList";
import { useCard } from "../../context/CardContext";


export default function CardScreen() {
    const { card } = useCard();
    return (
        <SafeAreaView style={styles.screen}>
          {
            card.length > 0 ? 
              (
                <>
                  <CardList />
                  <CardAction />
                </>                
              )
              :
              (
                <View style={styles.NoItemBox}>
                  <Text style={styles.NoItemText}>
                    سفارشی هنوز ثبت نشده است
                  </Text>
                </View>
              )
          }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  screen:
  {
    flex: 1,
    padding: 10,
    direction: "rtl",
    backgroundColor: "#fff"
  },
  NoItemBox:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  NoItemText:
  {
    fontSize: 20,
    fontFamily: "IRANSansX-Heavy",
  }
});
