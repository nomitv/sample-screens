import React from "react";
import {
	View,
	Text,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Icon,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
export default function Home() {
	const windowWidth = Dimensions.get("window").width;
	const windowHeight = Dimensions.get("window").height;
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
						height: windowHeight / 3.5,
						width: windowWidth,
						borderBottomLeftRadius: 60,
						borderBottomRightRadius: 60,
						paddingHorizontal: 20,
					}}
				>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Image
							source={require("./assets/1.png")}
							style={{
								height: 10,
								width: 20,
								marginTop: 40,
							}}
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginTop: windowHeight / 16,
							width: "100%",
						}}
					>
						<View style={{ width: "36%" }}>
							{/* <Image
								source={require("./assets/g.png")}
								style={{ height: 100, width: 100 }}
							/> */}
						</View>
						<View style={{ width: "64%" }}>
							<Text
								style={{
									fontSize: 30,
									color: "#1b2429",
									fontWeight: "bold",
								}}
							>
								Philip Mccoy
							</Text>
							<Text
								style={{
									fontSize: 20,
									color: "#a88657",
									fontWeight: "bold",
								}}
							>
								Project Manager
							</Text>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Text
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
					</Text>

					<Image
						source={require("./assets/cal.jpg")}
						style={{
							borderRadius: 50,
							height: 60,
							width: 60,
							marginRight: 20,
							marginTop: 15,
						}}
					/>
				</View>

				<View style={{ flexDirection: "column" }}>
					<View style={{ marginBottom: 20 }}>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								flexWrap: "wrap",
								height: "100%",
								width: "100%",
								alignItems: "center",
								marginLeft: windowWidth / 15,
							}}
						>
							<Image
								source={require("./assets/unnamed.png")}
								style={{ height: 50, width: 50, marginRight: 10 }}
							/>
							<View>
								<Text style={{ fontWeight: "bold", color: "#3C4448" }}>
									To Do
								</Text>
								<Text style={{ color: "#9D9B9A" }}>
									5 Tasks Now - 1 started
								</Text>
							</View>
						</View>
					</View>
					<View style={{ marginBottom: 20 }}>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								flexWrap: "wrap",
								height: "100%",
								width: "100%",
								alignItems: "center",
								marginLeft: windowWidth / 15,
							}}
						>
							<Image
								source={require("./assets/unnamed.png")}
								style={{ height: 50, width: 50, marginRight: 10 }}
							/>
							<View>
								<Text style={{ fontWeight: "bold", color: "#3C4448" }}>
									To Do
								</Text>
								<Text style={{ color: "#9D9B9A" }}>
									5 Tasks Now - 1 started
								</Text>
							</View>
						</View>
					</View>
					<View style={{ marginBottom: 20 }}>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								flexWrap: "wrap",
								height: "100%",
								width: "100%",
								alignItems: "center",
								marginLeft: windowWidth / 15,
							}}
						>
							<Image
								source={require("./assets/unnamed.png")}
								style={{ height: 50, width: 50, marginRight: 10 }}
							/>
							<View>
								<Text style={{ fontWeight: "bold", color: "#3C4448" }}>
									To Do
								</Text>
								<Text style={{ color: "#9D9B9A" }}>
									5 Tasks Now - 1 started
								</Text>
							</View>
						</View>
					</View>
				</View>

				<View>
					<Text
						style={{
							fontSize: 22,
							color: "#6D767E",
							fontWeight: "bold",
							marginTop: 20,
							marginLeft: windowWidth / 15,
							marginBottom: 20,
						}}
					>
						Active Projects
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						flexWrap: "wrap",
						height: "100%",
						width: "100%",
						alignItems: "center",
					}}
				>
					<View style={{ width: "50%" }}>
						<View
							style={{
								backgroundColor: "#319398",
								height: windowHeight / 3.3,
								width: windowWidth / 2.5,
								borderRadius: 40,
								marginBottom: 10,
								alignSelf: "center",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<AnimatedCircularProgress
								style={{ alignSelf: "center" }}
								size={90}
								width={5}
								fill={10}
								tintColor="#fff"
								onAnimationComplete={() => console.log("onAnimationComplete")}
								backgroundColor="#5BB7BC"
							>
								{(fill) => (
									<Text style={{ color: "#fff", fontWeight: "bold" }}>10%</Text>
								)}
							</AnimatedCircularProgress>
							<View
								style={{
									alignSelf: "center",
								}}
							>
								<Text
									style={{
										color: "#fff",
										fontWeight: "bold",
										fontSize: 20,
									}}
								>
									Medical App
								</Text>
								<Text
									style={{
										color: "#5BB7BC",
										fontSize: 15,
										alignSelf: "center",
									}}
								>
									9 hours of progress
								</Text>
							</View>
						</View>
					</View>
					<View style={{ width: "50%" }}>
						<View
							style={{
								backgroundColor: "#e46471",
								height: windowHeight / 3.3,
								width: windowWidth / 2.5,
								borderRadius: 40,
								marginBottom: 10,
								alignSelf: "center",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<AnimatedCircularProgress
								style={{ alignSelf: "center" }}
								size={90}
								width={5}
								fill={10}
								tintColor="#fff"
								onAnimationComplete={() => console.log("onAnimationComplete")}
								backgroundColor="#ED808A"
							>
								{(fill) => (
									<Text style={{ color: "#fff", fontWeight: "bold" }}>10%</Text>
								)}
							</AnimatedCircularProgress>
							<View
								style={{
									alignSelf: "center",
								}}
							>
								<Text
									style={{
										color: "#fff",
										fontWeight: "bold",
										fontSize: 20,
									}}
								>
									Medical App
								</Text>
								<Text
									style={{
										color: "#ED808A",
										fontSize: 15,
										alignSelf: "center",
									}}
								>
									9 hours of progress
								</Text>
							</View>
						</View>
					</View>
					<View style={{ width: "50%" }}>
						<View
							style={{
								backgroundColor: "#f9be7c",
								height: windowHeight / 3.3,
								width: windowWidth / 2.5,
								borderRadius: 40,
								marginBottom: 10,
								alignSelf: "center",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<AnimatedCircularProgress
								style={{ alignSelf: "center" }}
								size={90}
								width={5}
								fill={10}
								tintColor="#fff"
								onAnimationComplete={() => console.log("onAnimationComplete")}
								backgroundColor="#F9D9B6"
							>
								{(fill) => (
									<Text style={{ color: "#fff", fontWeight: "bold" }}>10%</Text>
								)}
							</AnimatedCircularProgress>
							<View
								style={{
									alignSelf: "center",
								}}
							>
								<Text
									style={{
										color: "#fff",
										fontWeight: "bold",
										fontSize: 20,
									}}
								>
									Medical App
								</Text>
								<Text
									style={{
										color: "#F9D9B6",
										fontSize: 15,
										alignSelf: "center",
									}}
								>
									9 hours of progress
								</Text>
							</View>
						</View>
					</View>
					<View style={{ width: "50%" }}>
						<View
							style={{
								backgroundColor: "#6589e4",
								height: windowHeight / 3.3,
								width: windowWidth / 2.5,
								borderRadius: 40,
								marginBottom: 10,
								alignSelf: "center",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<AnimatedCircularProgress
								style={{ alignSelf: "center" }}
								size={90}
								width={5}
								fill={10}
								tintColor="#fff"
								onAnimationComplete={() => console.log("onAnimationComplete")}
								backgroundColor="#7898E9"
							>
								{(fill) => (
									<Text style={{ color: "#fff", fontWeight: "bold" }}>10%</Text>
								)}
							</AnimatedCircularProgress>
							<View
								style={{
									alignSelf: "center",
								}}
							>
								<Text
									style={{
										color: "#fff",
										fontWeight: "bold",
										fontSize: 20,
									}}
								>
									Medical App
								</Text>
								<Text
									style={{
										color: "#7898E9",
										fontSize: 15,
										alignSelf: "center",
									}}
								>
									9 hours of progress
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
