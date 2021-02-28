import React, {useState} from "react";
import {
	View,
	Text,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Icon,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AnimatedCircularProgress } from "react-native-circular-progress";
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Home() {
	const windowWidth = Dimensions.get("window").width;
	const windowHeight = Dimensions.get("window").height;
	const [date, setDate] = useState(new Date());
  	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [dateStart, setDateStart] = useState(new Date());
  	const [modeStart, setModeStart] = useState('date');
	const [showStart, setShowStart] = useState(false);
	const [dateEnd, setDateEnd] = useState(new Date());
  	const [modeEnd, setModeEnd] = useState('date');
	const [showEnd, setShowEnd] = useState(false);
	const cal = [1,2,3,4,5];
	const time = [10,11,12,...cal];
	  const onChange = (selectedDate, event) => {
		const currentDate = new Date(selectedDate.nativeEvent.timestamp) || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
	  };
	  const onChangeStart = (selectedDate, event) => {
		const currentDate = new Date(selectedDate.nativeEvent.timestamp) || dateStart;
		setShowStart(Platform.OS === 'ios');
		setDateStart(currentDate);
	  };
	  const onChangeEnd = (selectedDate, event) => {
		const currentDate = new Date(selectedDate.nativeEvent.timestamp) || dateEnd;
		setShowEnd(Platform.OS === 'ios');
		setDateEnd(currentDate);
	  };
	  const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	  };
	
	  const showDatepicker = () => {
		showMode('date');
	  };
	
	  const showTimepicker = () => {
		showMode('time');
	  };
	return (
		
			<View
				style={{
					flex: 1,
					margin: 20
				}}
			>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<FontAwesome style={{
								height: 15,
								width: 20,
								marginTop: 40,
								marginLeft: 10
							}} name="less-than" size={15} 
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginTop: windowHeight / 20,
							width: "100%",
							marginLeft:10
						}}
					>
						<View style={{ width: "64%" }}>
							<View style={{ flexDirection: "row"}}>
								<Text
									style={{
										fontSize: 30,
										color: "#1b2429",
										fontWeight: "bold",
									}}
								>
									Today
								</Text>
								<TouchableOpacity 
									style={{
										width:wp('30%'), 
										borderColor:"grey",
										backgroundColor:"#047887",
										padding:7,
										borderRadius:15,
										justifyContent: 'center',
										alignItems:'center',
										marginLeft:wp('40%')
										}}
									>
									<Text style={{fontSize:wp('4%'), fontWeight: 'bold', color: 'white'}}>Add task</Text>
								</TouchableOpacity>	
							</View>
							
							<Text
								style={{
									fontSize: 20,
									color: "grey",
									fontWeight: "bold",
								}}
							>
								Productive Day, Philip
							</Text>
							<Text
								style={{
									fontSize: 20,
									color: "grey",
									fontWeight: "bold",
									marginTop:40
								}}
							>
								Apr 1, 2021
							</Text>
						</View>
					</View>
				
				<View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:20,paddingLeft:10,paddingRight:10 }}>
					<TouchableOpacity
						style={{ flexDirection: "column",justifyContent: "center",alignItems:'center'}}
					>
						<Text style={{fontSize: 15,
									color: "#EA7F8C",
									fontWeight: "bold",
									}}
						>
							San
						</Text>
						<Text style={{fontSize: 15,color: "#EA7F8C",}}>{5}</Text>
					</TouchableOpacity>
					{cal.map((id,key)=><TouchableOpacity
						style={{ flexDirection: "column",justifyContent: "center",alignItems:'center'}}
					>
						<Text key={id} style={{fontSize: 15,
									color: "grey",
									fontWeight: "bold",
									}}
						>
							San
						</Text>
						<Text style={{fontSize: 15}}>{5}</Text>
					</TouchableOpacity>)}
				</View>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
				<View style={{flexDirection: 'row'}}>
					<View style={{ flexDirection: "column", width: wp('20%'), justifyContent: "space-between", marginTop:20,paddingLeft:10,paddingRight:10 }}>
						<Text style={{fontSize: 15, marginTop:20, color: "grey", fontWeight: "bold",}}>9 AM</Text>
						{time.map((t)=><Text style={{fontSize: 15, marginTop:30, color: "grey", fontWeight: "bold",}}>{t} AM</Text>)}
					</View>
					<View style={{ flexDirection: "column", width: wp('80%'), justifyContent: "center", alignItems: 'center', marginTop:20,paddingLeft:10,paddingRight:10 }}>
						<Text style={{fontSize: 15, marginTop:20, color: "lightgrey", fontWeight: "bold"}}>-------------------------------------------</Text>
						<TouchableOpacity 
							style={{ 
								borderColor:"grey",
								backgroundColor:"#FFE4C7",
								padding:10,
								borderRadius:20,
								marginTop: 30,
								width: wp('60%')
								}}
							>
							<Text style={{fontSize:wp('4%'), fontWeight: 'bold', color: 'black'}}>Project Research</Text>
						</TouchableOpacity>
						{time.map(()=><Text style={{fontSize: 15, marginTop:20, color: "lightgrey", fontWeight: "bold"}}>------------------------------------------</Text>)}
						<TouchableOpacity 
							style={{ 
								borderColor:"grey",
								backgroundColor:"#D9E6DC",
								padding:10,
								borderRadius:20,
								marginTop: 30,
								width: wp('60%')
								}}
							>
							<Text style={{fontSize:wp('4%'), fontWeight: 'bold', color: 'black'}}>Call</Text>
							<Text style={{fontSize:wp('3%'), color: 'grey'}}>Discuss the customer of the medical application the references that he sent. <Text style={{textDecorationLine:'underline', fontWeight:'bold'}}>Read More</Text></Text>
						</TouchableOpacity>
					</View>
				</View>
				</ScrollView>
				</View>
	);
}
