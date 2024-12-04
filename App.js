import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Task from './components/Task';

export default function App() {

  const [tasks, setTasks] = useState([
    {text: "do this", key: '1'},
    {text: "do that", key: '2'},
    {text: "do that aswell", key: '3'},
  ]);


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*Todo Form */}
        <View style={styles.list}>
          <FlatList 
           data = {tasks}
           renderItem = {({item}) => (
             <Task item={item}/>
           )} 
          />
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
