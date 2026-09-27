import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCard } from "../context/CardContext";
import CardListItem from "./CardListItem";

export default function CardList() {
    const { card, addToCard, removeFromCard, removeAllFromCard } = useCard()
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                {
                    card.map(item => <CardListItem key={item.id} {...item} onAdd={addToCard} onRemove={removeFromCard} onRemoveAll={removeAllFromCard} />)
                }
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({

})