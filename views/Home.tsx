import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

type AboutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "About"
>;

export default ({ navigation }: { navigation: AboutScreenNavigationProp }) => (
  <Container>
    <Title>Hello World</Title>
    <Button
      onPress={() => navigation.navigate("About")}
      title="Go About Page"
    />
  </Container>
);
