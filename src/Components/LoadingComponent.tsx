import React from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { colors } from '../Configs/colors'

interface LoadingComponentProps {
    indicatorColor?: string
    indicatorSize?: 'small' | 'large'
    extraText?: string,
    extraTextStyle?: object
    style?: object,
    fullScreen?: boolean
}

const LoadingComponent = ({
    indicatorColor,
    indicatorSize,
    extraText,
    extraTextStyle,
    style,
    fullScreen
}: LoadingComponentProps) => {
    const color = indicatorColor ? indicatorColor : colors.pureBlack
    const size = indicatorSize ? indicatorSize : 'large'
    return (
        <>
            {
                fullScreen === true
                    ?
                    <View style={styles.fullscreen}>
                        <ActivityIndicator
                            style={style}
                            size={size}
                            color={color} />
                        {extraText && <Text style={extraTextStyle}>{extraText}</Text>}
                    </View>
                    : <>
                        <ActivityIndicator
                            style={style}
                            size={size}
                            color={color} />
                        {extraText && <Text style={extraTextStyle}>{extraText}</Text>}
                    </>
            }
        </>
    )
}

export default LoadingComponent

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})