import { StyleSheet, Text, View, ActivityIndicator } from "react-native";


const CustomLoading = () => {
 return (
   <View style={[StyleSheet.absoluteFillObject, styles.container]}>
     {/* <LottieView
       autoPlay
       loop
       source={require("../../assets/loading.json")}
       style={{ width: 100, height: 100 }}
     /> */}
     <ActivityIndicator size="large" color="blue" />
   </View>
 );
};


export default CustomLoading;


const styles = StyleSheet.create({
 container: {
   justifyContent: "center",
   alignItems: "center",
   position: "absolute",
   backgroundColor: "rgba(0,0,0,0.5)",
   zIndex: 1,
 },
});


