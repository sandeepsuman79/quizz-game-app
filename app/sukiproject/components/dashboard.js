import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StackActions, NavigationActions } from "react-navigation";

class Dashboard extends Component {
  resetNavigation(targetRoute) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: targetRoute })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <ScrollView horizontal={true}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover
              style={{ width: 300, marginLeft: 10, marginRight: 10 }}
              source={{ uri: "https://picsum.photos/700" }}
            />

            <Card.Actions>
              <Button>
                <Text style={{ color: "red" }}>Cancel</Text>
              </Button>
              <Button>Ok</Button>
            </Card.Actions>
          </View>

          <Card style={{ marginLeft: 10, marginRight: 10 }}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover
              style={{ width: 300, marginLeft: 10, marginRight: 10 }}
              source={{ uri: "https://picsum.photos/700" }}
            />

            <Card.Actions>
              <Button style={{ backgroundColor: "black" }}>
                <Text style={{ color: "red" }}>Cancel</Text>
              </Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>

          <Card style={{ marginLeft: 10, marginRight: 10 }}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover
              style={{ width: 300, marginLeft: 10, marginRight: 10 }}
              source={{ uri: "https://picsum.photos/700" }}
            />

            <Card.Actions>
              <Button style={{ backgroundColor: "black" }}>
                <Text style={{ color: "red" }}>Cancel</Text>
              </Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
        <TouchableOpacity
          style={styles.play}
          onPress={() => this.props.navigation.navigate("countdown")}
        >
          <Text style={{ fontSize: 17, color: "#fff" }}>Play Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instruction}>
          <Text style={{ fontSize: 17, color: "#fff" }}>Instruction</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Dashboard;

// const resetAction = StackActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
// });
// this.props.navigation.dispatch(resetAction);

const styles = StyleSheet.create({
  play: {
    height: 36,
    width: "80%",
    backgroundColor: "#518EF8",
    justifyContent: "center",
    alignItems: "center",
    //borderRadius: 10,
    marginTop: 50,
    elevation: 1,
    marginLeft: "auto",
    marginRight: "auto"
  },
  instruction: {
    height: 36,
    width: "80%",
    backgroundColor: "#518EF8",
    justifyContent: "center",
    alignItems: "center",
    //borderRadius: 10,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 1
  }
});
