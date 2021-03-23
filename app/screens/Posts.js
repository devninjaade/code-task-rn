import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { posts } from "../redux/api/actionCreator";

function Posts({ posts }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={posts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View key={data.id} style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                />
                {/* Testing Api */}
                <TouchableOpacity onPress={posts}>
                    <Text>geee</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20 
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20
  },
  title: {
    fontSize: 18,
  },
});

export default connect(null, { posts })(Posts)

