import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, assets, SIZES } from "../constants"
import assests from '../constants/assests'

const HomeHeader = ({ onSearch }) => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Image source={assests.logo} resizeMode='contain' style={{ width: 90, height: 25 }} />
                <View style={{ width: 45, height: 45 }}>
                    <Image source={assets.person01} resizeMode='contain' style={{ width: "100%", height: "100%" }} />
                    <Image source={assets.badge} resizeMode='contain' style={{ position: 'absolute', bottom: 0, right: 0, width: 15, height: 15 }} />
                </View>
            </View>
            <View style={{ marginVertical: SIZES.font }}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white }}>
                    Hello Faizan 👋
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base }}>
                    Let's find a masterpiece
                </Text>
            </View>

            <View style={{ marginTop: SIZES.font }}>
                <View style={{
                    width: "100%",
                    borderRadius: SIZES.font,
                    backgroundColor: COLORS.gray,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.small - 2,

                }}>
                    <Image source={assets.search} resizeMode='contain' style={{ width: 20, height: 20, marginRight: SIZES.base }} />
                    <TextInput placeholder='search nfts' style={{ flex: 1 }} onChangeText={onSearch} />
                </View>
            </View>
        </View >
    )
}

export default HomeHeader