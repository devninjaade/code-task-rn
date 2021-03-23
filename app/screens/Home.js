import React from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>This is the Home Screen!</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
