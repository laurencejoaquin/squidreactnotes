import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

const RoundIconBtn = ({ antIconName, size, color, style, onPress }: any) => {
    return (
        // @ts-ignore
        <AntDesign
            name={antIconName}
            size={size || 24}
            color={color || colors.LIGHT}
            style={[styles.icon, { ...style }]}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        borderRadius: 50,
        elevation: 5,
    },
});

export default RoundIconBtn;