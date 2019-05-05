import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { colors, sizes } from "@/AppStyles";

// Props tags required
export default class TagsHList extends Component {
  static defaultProps = {
    tags: []
  };

  renderTag = (tag, i) => {
    return (
      <View key={i} style={{ ...styles.tagContainer, backgroundColor: colors.tagColors[i % colors.tagColors.length] }}>
        <Text style={{ color: "white", fontWeight: "600", fontSize: 14 }}>{tag}</Text>
      </View>
    );
  };

  render() {
    const { tags } = this.props;

    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", paddingHorizontal: sizes.sm }}>
            {tags.map((tag, i) => this.renderTag(tag, i))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 100,
    paddingVertical: sizes.xs,
    paddingHorizontal: sizes.sm,
    marginRight: sizes.sm
  }
});
