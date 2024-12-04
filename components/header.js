import {  StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
  },
})