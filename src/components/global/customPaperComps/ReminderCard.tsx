import * as React from 'react';
import { StyleSheet } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';

const ReminderCard = () => (
  <Card
    style={{}}
  >
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text>Necesito Lavar los platos</Text>
    </Card.Content>
    <Card.Actions>
      <Button>+10mins</Button>
      <Button>Terminado</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({})
export default ReminderCard;