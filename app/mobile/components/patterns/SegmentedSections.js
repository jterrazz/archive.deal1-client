import React, { Component } from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

import { sizes, colors } from "@/AppStyles";

export default class MyComponent extends Component {
  static defaultProps = {
    sections: ["lol", "yoooooo"]
  };

  state = { selectedIndex: 0 };

  onSelectIndex = i => () => {
    this.setState({ selectedIndex: i });
  };

  renderSection(section, i) {
    const { selectedIndex } = this.state;
    const containerStyle = [
      styles.titleContainer,
      i === selectedIndex
        ? {
            borderColor: colors.text
          }
        : {
            borderColor: "transparent"
          }
    ];

    return (
      <TouchableHighlight
        key={i}
        style={containerStyle}
        underlayColor="transparent"
        activeOpacity={0.6}
        onPress={this.onSelectIndex(i)}
      >
        <Text style={styles.titleText}>{section.toUpperCase()}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    const { sections } = this.props;

    return (
      <View style={styles.container}>
        {sections.map((section, i) => {
          return this.renderSection(section, i);
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    padding: sizes.sm,
    borderBottomWidth: 2,
    borderColor: "transparent"
  },
  titleText: {
    textAlign: "center",
    padding: sizes.sm,
    fontSize: sizes.textBase,
    fontWeight: "600"
  }
});
