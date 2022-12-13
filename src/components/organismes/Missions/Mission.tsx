import  React , { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Image
} from 'react-native';


export interface Props {
  id : string;
  title: string;
  desc : string;
  price : number;

}

export class MissionComp extends React.Component<Props> {
  	id!: string;


	constructor(props: Props) {
    super(props);

    
  }

  render() {
    return (
	<Pressable style={styles.mission}>
		<View style={styles.container}>
			<Text style={styles.title}>
			{this.props.title }
			</Text>
			<View style={styles.desc}>
				<View style={styles.containImg}>
					<Image
				style={styles.image}
				source={{uri: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn'}}
				/>
				</View>
				<Text> {this.props.desc}</Text>
				<Text style={styles.price}> {this.props.price} €/h </Text>
			</View>
		</View>
	</Pressable>
      
    );
  }
}

const styles = StyleSheet.create({
  mission: {
	backgroundColor : "#ffffff",
	borderTopLeftRadius: 20,
	borderTopRightRadius : 20
  },
  container: {
  backgroundColor : "#ffffff",
    flex: 1,
    justifyContent: "center",
	borderTopLeftRadius: 20,
	borderTopRightRadius : 20
	
  },
  containImg: {
	width : 300,
	height : 150,
	marginTop : 20,
	flex : 1,
	justifyContent : "center"
  },
  title: {
    fontSize: 22,
	textAlign: "center",
	backgroundColor : "#5C9EAD",
	color : "#222823",
	padding : 10,
	borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  desc: {
   backgroundColor : "#CDB4DB",
   color : "#222823",
   minHeight : 300,
   padding : 20,
	borderBottomLeftRadius: 20,
	borderBottomRightRadius : 20
  },
  image: {
	width : "100%",
	height : "100%",
	objectFit : "cover",
	display : "flex",
	justifyContent : "center",
	marginBottom: 20,
	borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
	borderBottomLeftRadius: 20,
	borderBottomRightRadius : 20
  }, 
  price : {
	fontWeight: '900',
	paddingTop : 10
  }
 

});