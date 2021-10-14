import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function About(props) {
    const { navigation } = props
    const { name, image, price, reviews, rating, categories } =
        props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${
        price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View>
            <RestaurantImage navigation={navigation} image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <ImageBackground
        source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }}
    >
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("Home")
            }}
        >
            <View>
                <FontAwesome5
                    name={"arrow-left"}
                    size={25}
                    style={{
                        color: "white",
                        marginBottom: 3,
                        marginTop: 10,
                        marginLeft: 10,
                        alignSelf: "flex-start",
                    }}
                />

            </View>
        </TouchableOpacity>

    </ImageBackground>

);

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>
);