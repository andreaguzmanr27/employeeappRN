import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,image,FlatList} from 'react-native';
import {Card,FAB} from 'react-native-paper' 

const Home =(navigation)=>{
    const date = [
        {id:1,name:"mukesh",position:"web dev"},
        {id:2,name:"suresh",position:"android dev"},
        {id:3,name:"ramesh",position:"MI dev"},
        {id:4,name:"hitesh",position:"web dev"},
        {id:5,name:"mukesh",position:"web dev"},
        {id:6,name:"suresh",position:"android dev"},
        {id:7,name:"ramesh",position:"MI dev"},
        {id:8,name:"hitesh",position:"web dev"},
    ]
    
    const renderList= ((item)=>{
            return(
            <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Profile")}
            >

            <View style={styles.CardView}>
                    <Image
                style={{width:60,height:60,borderRadius:50/2}}
                source={{uri:"https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=559&q=80"}}
             
                />
                <view style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.position}</Text>
                </view>
              
            </View>

            </Card>
            )
    })
    return(
        <View>
            <FlatList
                data={data}
                renderItem={(item)=>{
                    return renderList(item)
                }}
                keyExtractor={item=>'${item.id}'}
            />
            <FAB onLongPress={()=>navigation.navigate("Create")}
                        style={styles.fab}
                        small={false}
                        icon="plus"
                        theme={{colors:{accent:"#006aff"}}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        
    },
    CardView:{
        flexDirection:"row",
        padding:6,
    },
    text:{
        frontSize:20,

    },
    fab: {
        position:'absolute',
        margin:16,
        right:0,
        botton:0,
    },
})

export default Home
