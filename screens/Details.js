import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants'
import { CricleButton, ReactBtn, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components'
import { SubInfo } from '../components/Info'


const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: "100%", height: 373 }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
        />
        <CricleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />
        <CricleButton
            imgUrl={assets.heart}
            // handlePress={() => navigation.goBack()}
            right={15}
            top={StatusBar.currentHeight + 10}
        />
    </View>
);

const Details = ({ route, navigation }) => {
    const { data } = route.params;


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar barStyle="dark-content" transLucent={true} backgroundColor="transparent" />

            <View style={{
                width: "100%", position: "absolute", bottom: 0, paddingVertical:
                    SIZES.font, justifyContent: "center", alignItems:
                    "center", backgroundColor: "rgb(255,255,255,0)",
                zIndex: 1,
            }}>
                <ReactBtn minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} keyExtractor={(item) => item.id} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ paddingHorizontal: 10 }}>
                            <DetailsDesc data={data} />
                            {data.bids.length > 0 && (
                                <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold }}>
                                    Current Bid
                                </Text>
                            )}
                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    )
}

export default Details

