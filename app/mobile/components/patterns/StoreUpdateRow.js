import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles, { sizes, colors } from "@/AppStyles";
import { Image } from "react-native-elements";

import TagsHList from "@/components/patterns/TagsHList";
import ProductsHList from "@/components/patterns/ProductsHList";

export default class StoreUpdateRow extends Component {
  store = {
    name: "42 Shop",
    profileImageUrl:
      "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/22/e5/7e/22e57ef5-d6cd-8fa6-701f-94b4d2a2ffff/mzl.mfffjcqr.png/246x0w.jpg"
  };

  texts = {
    statusMessage: `${this.store.name} is selling 4 new items`,
    statusDescription: `42 minutes ago`,
    tagsLabel: `Usually sold by ${this.store.name}`
  };

  products = [
    {
      name: "Yoooo",
      price: 4000,
      previewImageUrl:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/22/e5/7e/22e57ef5-d6cd-8fa6-701f-94b4d2a2ffff/mzl.mfffjcqr.png/246x0w.jpg"
    },
    {
      name: "Yoooo",
      price: 4000,
      previewImageUrl:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/22/e5/7e/22e57ef5-d6cd-8fa6-701f-94b4d2a2ffff/mzl.mfffjcqr.png/246x0w.jpg"
    },
    {
      name: "Yoooo",
      price: 4000
    }
  ];

  // TODO If only one or two product make a special larger preview
  render() {
    return (
      <View style={{ ...defaultStyles.container, borderTopWidth: 1, borderColor: colors.borderClear }}>
        <View style={{ flexDirection: "row", alignItems: "center", padding: sizes.sm }}>
          <Image style={styles.storeProfileImage} source={{ uri: this.store.profileImageUrl }} />
          <View style={{ marginLeft: sizes.sm }}>
            <Text>{this.texts.statusMessage}</Text>
            <Text style={{ color: colors.textClear }}>{this.texts.statusDescription}</Text>
          </View>
        </View>
        <ProductsHList products={this.products} />
        <View style={{ marginVertical: sizes.sm }}>
          <TagsHList tags={["blyat1", "blyat2", "blyat2", "blyat2", "blyat2", "blyat2", "blyat2"]} />
          <Text style={styles.tagsLabel}>{this.texts.tagsLabel}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  storeProfileImage: {
    height: sizes.lg,
    width: sizes.lg,
    borderRadius: sizes.borderRadius
  },
  tagsLabel: { color: colors.textClear, fontSize: sizes.textSmall, marginTop: sizes.xs, marginHorizontal: sizes.sm }
});
