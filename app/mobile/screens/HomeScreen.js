import React from "react";
import { SafeAreaView, Text, ScrollView, View } from "react-native";
import { Input, Icon } from "react-native-elements";

import defaultStyles, { colors, sizes } from "@/AppStyles";
import SegmentedSections from "@/components/patterns/SegmentedSections";
import StoreUpdateRow from "@/components/patterns/StoreUpdateRow";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={defaultStyles.container}>
        <ScrollView style={defaultStyles.container}>
          <View style={{ padding: 14, paddingBottom: 0 }}>
            <Text style={defaultStyles.textTitle}>Welcome back Jean-Baptiste!</Text>
            <Text style={defaultStyles.textTitle}>Connect now to your merchants</Text>
            <Input
              inputContainerStyle={[defaultStyles.inputWhite, { marginTop: sizes.sm, marginBottom: sizes.sm }]}
              leftIconContainerStyle={{ marginRight: sizes.base }}
              leftIcon={<Icon name="search" size={22} color={colors.textClearer} />}
            />

            <SegmentedSections sections={["Hot", "Next to you", "The best"]} />
          </View>

          <View style={{ backgroundColor: "white", minHeight: "100%" }}>
            <StoreUpdateRow />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
