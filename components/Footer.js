import { StyleSheet, Text,Image, View, ScrollView, InteractionManager, Modal, Pressable} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 


export function Footer(){

const [modalVisible, setModalVisible] = useState(false);

const [modalBox, setModalBox] = useState(false)

function SwitchBox(){
   setModalVisible(false)
   setModalBox(true)
}

function CloseBox(){
    setModalVisible(false)
    setModalBox(false)
 }

const navigation = useNavigation()

return(

// Må kanskje kobles til useEffect for å lade svar når bestilling er godkjent på andre siden

<View style={styles.footer}>
    
            <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                <View style={styles.bestillBox}>
                    <AntDesign name="close" size={24} color="black" onPress={CloseBox} style={styles.closeIcon}/>
                    <View >
                        <Text style={styles.bestillText}> Dagens lunsj er kjøttkaker</Text>
                    </View>
                    <Pressable style={styles.closeButton} onPress={SwitchBox} >
                        <Text> Bestill lunsj</Text>
                    </Pressable>
                </View>

            </Modal>

            <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={true}
                    visible={modalBox}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalBox(!modalBox);
                    }}
                >
                <View style={styles.bestillBox}>
                    <View >
                        <Text style={styles.bestillText}> Lunsj er bestillt</Text>
                    </View>
                    <Pressable style={styles.closeButton} onPress={() => setModalBox(!modalBox)} >
                        <Text> Lukk</Text>
                    </Pressable>
                </View>

            </Modal>
    

    <View style={styles.iconBox} >
        
            <MaterialCommunityIcons name="food-outline" size={32} style={styles.icons} onPress={() => setModalVisible(true)}   />
            <Text style={styles.iconText}>Bestill lunsj</Text>
        </View>
        <View style={styles.iconBox} >
        <Ionicons name="clipboard-outline" size={32} style={styles.icons}  />
        <Text style={styles.iconText}>Meny</Text>
        </View>
        <View style={styles.iconBox} >
            <MaterialCommunityIcons name="email-outline" size={32} style={styles.icons} onPress={() => navigation.navigate('Kontakt')}   />
            <Text  style={styles.iconText}>Kontaktinfo</Text>
        </View>
        <View style={styles.iconBox}  >
            <Ionicons name="person-outline" size={32}  style={styles.icons} onPress={() => navigation.navigate('Profile')} />
            <Text style={styles.iconText}>Meg</Text>
        </View>
    </View>)

}


const styles = StyleSheet.create({

    footer:{
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        width: 400,
        justifyContent: 'space-evenly',
        borderTopWidth:1,
        borderTopColor: '#ADADAD'
        /*shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5*/


     },

     iconBox:{
         display: 'flex',
         alignItems:'center',
         fontSize: 9,
         textAlign: 'center',
         marginRight: 3,
         marginTop: 4

     },

     icons: {
       
        color:"#F4B09A",
        marginTop: 2,
        marginBottom: 4,
        width: 30,
        height: 35, 

     }, 
     iconText:{
         color: '#7B7B7B',
         marginBottom: 3, 
         width: 55,
         fontSize: 9,
         textAlign:'center'
         
     },

     bestillText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center'
     },

     bestillBox:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center', 
        marginTop: 100,
        width: 200,
        height: 200,
        backgroundColor: 'white',
        marginLeft: 80,
        borderRadius: 10
        
     },

     closeButton:{
        display: 'flex',
        height: 50,
        width: 100,
        backgroundColor: '#FDE1E1',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        marginTop: 20
     }, 

     modal:{
        display: 'flex',
        justifyContent:'center',
        height: 250,
        width: 300
     },

     closeIcon:{
        marginLeft: 135,
        marginBottom: 10
     }



})



/*<Image style={styles.icons} size={38} source={require('../assets/Fork&Knife.svg')}/>



 <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                <View style={styles.bestillBox}>
                    <View >
                        <Text style={styles.bestillText}> Bestill lunsj</Text>
                    </View>
                    <Pressable style={styles.closeButton} onPress={CloseBox} >
                        <Text> Close</Text>
                    </Pressable>
                </View>

            </Modal>


*/