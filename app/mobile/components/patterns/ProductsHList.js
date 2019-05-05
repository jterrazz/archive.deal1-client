import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

import { sizes, colors } from "@/AppStyles";

export default class ProductsHList extends Component {
  static defaultProps: {
    products: []
  };

  renderProduct = (product, i) => {
    return (
      <View key={i} style={styles.productContainer}>
        <Image
          style={styles.previewImage}
          placeholderStyle={{ backgroundColor: colors.backgroundBase }}
          source={{ uri: product.previewImageUrl }}
        />
        <Text>{product.name}</Text>
        <Text>{product.price / 100}</Text>
      </View>
    );
  };

  render() {
    const { products } = this.props;

    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>{products.map((product, i) => this.renderProduct(product, i))}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: sizes.sm, flexDirection: "row" },
  productContainer: { marginRight: sizes.sm },
  previewImage: {
    height: sizes.xl * 1.5,
    width: sizes.xl * 1.5,
    borderRadius: sizes.borderRadius
  }
});
