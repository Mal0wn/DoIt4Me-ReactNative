
import  React , {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from "./../../utils/globalVar";

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList, 
  Text,
  View
} from 'react-native';

import { MissionComp } from '../../components/organismes/Missions/Mission';
import { SafeAreaView } from 'react-native-safe-area-context';


export const HomeScreen = () => {

let mission : MissionComp


const renderMission = ( mission : any ) => (
  <MissionComp id={mission.id} title={mission.title} desc={mission.desc} price={40}></MissionComp>
  );

  useEffect(() => {
    getAllMissions();
  }, []);

  const [selectedId, setSelectedId] = useState(null);
  const [itemMission , setItemMission] = useState([]);

  const getAllMissions = async () => {
    await axios
        .get(API_URL + "mission", {

         })
        .then((res) => {
          setItemMission(res.data)
        })
        .catch((err) => console.log(err));
  };


  return (
  <View style={styles.view}>
  <Text>HOMESCREEN</Text>
      <ScrollView style={styles.scrollView}>
          <FlatList
            data={itemMission}
            renderItem={renderMission}
            keyExtractor={() => mission.id}
            extraData={setItemMission}
          />
      </ScrollView>
  </View>
    

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view : {
  backgroundColor : 'red'
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

