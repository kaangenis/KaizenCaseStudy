import React from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
} from 'react-native'
import { colors } from '../Configs/colors'

interface LoadingComponentProps {
    indicatorColor?: string
    indicatorSize?: 'small' | 'large'
    extraText?: string,
    extraTextStyle?: object
    style?: object
}

const LoadingComponent = ({
    indicatorColor,
    indicatorSize,
    extraText,
    extraTextStyle,
    style
}: LoadingComponentProps) => {
    const color = indicatorColor ? indicatorColor : colors.pureBlack
    const size = indicatorSize ? indicatorSize : 'large'
    return (
        <>
            <ActivityIndicator
                style={style}
                size={size}
                color={color} />
            {extraText && <Text style={extraTextStyle}>{extraText}</Text>}
        </>
    )
}

export default LoadingComponent

const styles = StyleSheet.create({})