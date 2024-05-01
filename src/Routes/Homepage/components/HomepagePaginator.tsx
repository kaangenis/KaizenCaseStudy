import React from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    View,
} from 'react-native';
import { colors } from '../../../Configs/colors';

interface Props {
    data: any;
    scrollX: any;
}

const HomepagePaginator = ({ data, scrollX }: Props) => {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.main}>
            {data.map((_: any, i: any) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View
                        style={[styles.dot, { width: dotWidth, opacity }]}
                        key={i.toString()}
                    />
                );
            })}
        </View>
    );
};

export default HomepagePaginator;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 15,
    },
    dot: {
        width: 10,
        height: 8,
        borderRadius: 6,
        backgroundColor: colors.primaryRed,
        marginHorizontal: 6,
    },
});
