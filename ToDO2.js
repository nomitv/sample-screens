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
		<ScrollView
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		>
			<View
				style={{
					backgroundColor: "#fff9eb",
					flex: 1,
				}}
			>
				<View
					style={{
						backgroundColor: "#f9be7c",
						height: windowHeight / 2.5,
						width: windowWidth,
						borderBottomLeftRadius: 60,
						borderBottomRightRadius: 60,
						paddingHorizontal: 20,
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
							}} name="less-than" size={15} />
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
							<Text
								style={{
									fontSize: 25,
									color: "#1b2429",
									fontWeight: "bold",
								}}
							>
								Create a new task
							</Text>
							<Text
								style={{
									fontSize:wp('4%'),
									color: "#a88657",
									fontWeight: "bold",
								}}
							>
								Title
							</Text>
							<TextInput style={{borderBottomWidth:1, marginTop:-5, width:wp('85%'), fontSize: 20, borderColor: 'grey'}} />
							<Text
								style={{
									fontSize:wp('4%'),
									color: "#a88657",
									fontWeight: "bold",
									marginTop:10
								}}
							>
								Date
							</Text>
							<View style={{flexDirection: "row"}}>
							{show && (
								<DateTimePicker
									testID="dateTimePicker"
									value={date}
									mode={mode}
									is24Hour={true}
									display="default"
									onChange={onChange}
								/>
							)}
							<TouchableOpacity 
								onPress={()=>showDatepicker()} 
								style={{borderBottomWidth:1,width:wp('60%'), marginTop: 15,borderColor: 'grey'}}
							>
								<Text style={{fontSize: 20}}>{date.toString().slice(0,15)}</Text>
							</TouchableOpacity>
							<Image
								source={require("./assets/cal.jpg")}
								style={{
									borderRadius: 50,
									height: 60,
									width: 60,
									marginLeft: 40
								}}
							/>
							</View>
						</View>
					</View>
				</View>
				
				<View style={{ flexDirection: "row", justifyContent: "space-between",marginTop:20 }}>
					{showStart && (
						<DateTimePicker
							testID="dateTimePicker"
							value={dateStart}
							mode={modeStart}
							is24Hour={true}
							display="default"
							onChange={onChangeStart}
						/>
					)}
					<TouchableOpacity 
						onPress={()=>showDatepicker()} 
						style={{borderBottomWidth:1,width:wp('30%'), marginTop: 15,marginLeft: 20, marginTop: 10,borderColor: 'grey'}}
					>
						<Text style={{fontSize: 15,
									color: "grey",
									fontWeight: "bold",
									marginTop:10}}
						>
							Start Time
						</Text>
						<Text style={{fontSize: 15}}>{date.toString().slice(0,15)}</Text>
					</TouchableOpacity>
					{showEnd && (
						<DateTimePicker
							testID="dateTimePicker"
							value={dateEnd}
							mode={modeEnd}
							is24Hour={true}
							display="default"
							onChange={onChangeEnd}
						/>
					)}
					<TouchableOpacity 
						onPress={()=>showDatepicker()} 
						style={{borderBottomWidth:1,width:wp('30%'), marginTop: 15,marginRight: 40, marginTop: 10,borderColor: 'grey'}}
					>
						<Text style={{fontSize: 15,
									color: "grey",
									fontWeight: "bold",
									marginTop:10}}
						>
							End Time
						</Text>
						<Text style={{fontSize: 15}}>{date.toString().slice(0,15)}</Text>
					</TouchableOpacity>
					{/* <Text
						style={{
							fontSize: 22,
							color: "#6D767E",
							fontWeight: "bold",
							marginTop: 20,
							marginLeft: windowWidth / 15,
							marginBottom: 20,
						}}
					>
						My Tasks
					</Text> */}
				</View>
				<View style={{margin:20}}>
					<Text
						style={{
							fontSize:wp('4%'),
							color: "grey",
							fontWeight: "bold",
						}}
					>
						Description
					</Text>
					<TextInput 
						style={{borderBottomWidth:1, 
						marginTop:-5, 
						width:wp('87%'), 
						fontSize: 20,
						borderColor: 'grey'}}
						multiline={true} 
						numberOfLines={3}
					/>
				</View>
				<View style={{margin:20}}>
					<Text
						style={{
							fontSize:wp('4%'),
							color: "grey",
							fontWeight: "bold",
							paddingLeft: 4
						}}
					>
						Catagory
					</Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop: 10}}>
						<TouchableOpacity 
							style={{
								width:wp('30%'), 
								borderColor:"grey",
								backgroundColor:"#E56472",
								padding:7,
								borderRadius:15,
								justifyContent: 'center',
								alignItems:'center'
								}}
							>
							<Text style={{fontSize:wp('3%'), fontWeight: 'bold', color: 'white'}}>SPORT APP</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width:wp('30%'), 
								borderColor:"grey",
								backgroundColor:"lightgrey",
								padding:7,
								borderRadius:15,
								justifyContent: 'center',
								alignItems:'center',
								marginLeft: 5
								}}
							>
							<Text style={{fontSize:wp('3%'), fontWeight: 'bold', color: 'dimgrey'}}>MEDICAL APP</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								width:wp('30%'), 
								borderColor:"grey",
								backgroundColor:"lightgrey",
								padding:7,
								borderRadius:15,
								justifyContent: 'center',
								alignItems:'center',
								marginLeft: 5
								}}
							>
							<Text style={{fontSize:wp('3%'), fontWeight: 'bold', color: 'dimgrey'}}>RENT APP</Text>
						</TouchableOpacity>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10}}>
						<TouchableOpacity 
							style={{
								width:wp('30%'), 
								borderColor:"grey",
								backgroundColor:"lightgrey",
								padding:7,
								borderRadius:15,
								justifyContent: 'center',
								alignItems:'center'
								}}
							>
							<Text style={{fontSize:wp('3%'), fontWeight: 'bold', color: 'dimgrey'}}>BANKING APP</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{ 
								borderColor:"grey",
								backgroundColor:"lightgrey",
								padding:7,
								borderRadius:15,
								justifyContent: 'center',
								alignItems:'center',
								marginLeft: 5
								}}
							>
							<Text style={{fontSize:wp('3%'), fontWeight: 'bold', color: 'dimgrey'}}>GAMING PLATFORM APP</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity 
						style={{ 
							borderColor:"grey",
							backgroundColor:"#6588E4",
							padding:10,
							borderRadius:20,
							justifyContent: 'center',
							alignItems:'center',
							marginTop: 30
							}}
						>
						<Text style={{fontSize:wp('4%'), fontWeight: 'bold', color: 'white'}}>Create task</Text>
					</TouchableOpacity>
				</View>

				
				</View>
		</ScrollView>
	);
}
