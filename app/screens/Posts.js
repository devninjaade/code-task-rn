import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import { connect } from "react-redux";
import { posts } from "../redux/api/actionCreator";
import { useSelector } from "react-redux";

function seperateItem() {
  return (
    <View style={{ margin: 5 }}>
    </View>
  )
}

function Posts({ posts }) {
    const [isLoading, setIsLoading] = useState(true)
    const fetchedPosts = useSelector(state => state.Api.posts) || [];


    useEffect(() => {
        const fetchPost = async() => {
            try {
                await posts();
                setIsLoading(false)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPost()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <Text style={{ padding: 20 }} >Loading...</Text> : <View style={{ padding: 20 }}>
                <FlatList
                    data={fetchedPosts}
                    ItemSeparatorComponent={seperateItem}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        console.log(item);
                        return (
                            <View key={item.id} style={styles.item}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        )
                    }}
                />
            </View>}
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

