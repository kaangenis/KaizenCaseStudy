import React from 'react'
import { View } from 'react-native'

interface ConditionalRenderingProps {
    children: React.ReactNode
    renderIf: boolean
}

const ConditionalRendering = ({
    children,
    renderIf,
}: ConditionalRenderingProps) => {
    return (
        <View>
            {renderIf && children}
        </View>
    )
}

export default ConditionalRendering