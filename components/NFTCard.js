import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { CricleButton, ReactBtn } from './Button'
import { SubInfo, NFTtitle, EndDate, People, ImageCmp, EthPrice } from './Info'


const NFTCard = ({ data }) => {
    const navigation = useNavigation();


    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{
                width: '100%',
                height: 250
            }}>

                <Image source={data.image}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopRightRadius: SIZES.font,
                        borderTopLeftRadius: SIZES.font
                    }}
                />

                <CricleButton right={10} top={10} imgUrl={assets.heart} />
            </View>
            <SubInfo />
            <View style={{ width: "100%", padding: SIZES.font }}>
                <NFTtitle title={data.name} subtitle={data.creator} titleSize={SIZES.large} subtitleSize={SIZES.small} />
                <View style={{ marginTop: SIZES.font, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <EthPrice price={data.price} />
                    <ReactBtn minwidth={120} fontSize={SIZES.font} handlePress={() => navigation.navigate("Details", { data })} />
                </View>
            </View>
        </View>
    )
}

export default NFTCard