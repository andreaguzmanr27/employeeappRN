import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal} from 'react-native';
import {TextInput,Button} from 'react-native-paper'


const CreateEmployee = ()=>{
        const [Name,setName]= useState("")
        const [phone,setPhone]= useState("")
        const [email,setEmail]= useState("")
        const [Name,setName]= useState("")
        const [salary,setSalary]= useState("")
        const [modal,setModal]= useState(false)
    
    return(
        <View style={styles.root}>
        <   TextInput
                label='Name'
                value={Name}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
             onChangeText={text => setName(text)}
            />
        <   TextInput
                label='Email'
                value={email}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
             onChangeText={text => setEmail(text)}
             />
        <   TextInput
                label='Email'
                value={email}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
             onChangeText={text => setEmail(text)}
             />
        <   TextInput
                label='phone'
                value={phone}
                style={styles.inputStyle}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
             onChangeText={text => setPhone(text)}
             />
        <   TextInput
                label='salary'
                value={salary}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
             onChangeText={text => setSalary(text)}
             />
            <Button 
            style={styles.inputStyle}
            icon="upload" 
            mode="contained" 
            theme={theme}
            onPress={() => setModal(true)}>
                 Upload IMage
            </Button>
            <Button 
            style={styles.inputStyle}
            icon="content-save" 
            mode="contained" 
            theme={theme}
            onPress={() => console.log("saved")}>
                 save
            </Button>
            <Modal
            animationType="slide"
            transparent={false}
            visible={modal}
            onRequestClose={()=>{
                setModal(false)
            }}
            >
            <View style={styles.modalView}>
                <View style={styles.modalButtonView}>
                         <Button icon="camera" 
                         theme={theme}
                         mode="contained" 
                         onPress={() => console.log("presses")}>
                            camera
                          </Button>  
                          <Button 
                          icon="image-area" 
                          theme={theme}
                          mode="contained" 
                          onPress={() => console.log("presses")}>
                            gallery
                          </Button>               
                </View>
            <Button 
            theme={theme}
            onPress={() => setModal(false)}>
                 Cancel
            </Button>
            </View>
            </Modal>
        </View>
    )
}
const theme = {
    colors:{
        primary:"red"
    }
}
const style=StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        button:2,
        width:"100%",
        backgroundColor:"#b8e6ff"
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
}

)

export default CreateEmployee