import { Image, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";


export default function ProductSlider() {

    const sliderImage = 
    [
        require("@/assets/slider/slider-1.jpg"),
        require("@/assets/slider/slider-2.jpg"),
        require("@/assets/slider/slider-3.jpg"),
        require("@/assets/slider/slider-4.jpg")
    ]
    return (
        <View style={styles.sliderWrapper}>
            <Swiper
                showsButtons={true}
                autoplay={true}
                loop={true}
                nestedScrollEnabled={true}
                style={{}}
                >

                {
                    sliderImage.map((image, index) => 
                        <View key={index} style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}>
                            <Image 
                            key={index}
                            resizeMode="cover"
                            style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: 10 }} 
                            source={image} />
                        </View>
                    )
                }
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderWrapper:
    {
        height: 200,
        marginVertical: 20,
        borderRadius: 20
    }
})