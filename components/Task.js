import {  StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Task({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#f9c23c',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderColor: "#bbb",
    borderWidth: 1, 
    alignItems: "center",
  }
})