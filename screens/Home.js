import { SafeAreaView, View, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, NFTData } from '../constants';
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components';



const Home = () => {


    const [nftdata, setnftdata] = useState(NFTData);

    const handleSearch = (value) => {
        if (!value.length) return setnftdata(NFTData);
        const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

        if (filteredData.length) {
            setnftdata(filteredData);
        } else {
            setnftdata(NFTData);
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 1 }}>
                    <FlatList
                        data={nftdata}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ height: 300, backgroundColor: COLORS.white }} />
                </View>


            </View>
        </SafeAreaView>
    )
}

export default Home

