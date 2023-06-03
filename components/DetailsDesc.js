import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NFTtitle, EthPrice } from './Info'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
    const [text, settext] = useState(data.description.slice(0, 100));
    const [readmore, setreadmore] = useState(false)
    return (
        <>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
                <NFTtitle
                    title={data.name}
                    subtitle={data.creator}
                    titleSize={SIZES.extralarge}
                    subtitleSize={SIZES.font}
                />
                <EthPrice price={data.price} />
            </View>
            <View style={{ marginVertical: SIZES.extraLarge * 1.5, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary }}>Descripition</Text>
                <View style={{ marginTop: SIZES.base }}>
                    <Text style={{
                        fontSize: SIZES.small, fontFamily:
                            FONTS.regular, color: COLORS.secondary, lineHeight: SIZES.large
                    }}>{text}
                        {!readmore && '...'}
                        <Text style={{
                            fontSize: SIZES.small, fontFamily:
                                FONTS.semiBold, color: COLORS.primary
                        }} onPress={() => {
                            if (!readmore) {
                                settext(data.description);
                                setreadmore(true)
                            } else {
                                settext(data.description.slice(0, 100));
                                setreadmore(false)
                            }
                        }}>
                            {readmore ? 'Show Less' : 'Read More'}
                        </Text>
                    </Text>

                </View>
            </View>
        </>
    )
}

export default DetailsDesc