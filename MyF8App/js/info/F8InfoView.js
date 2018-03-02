import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    //Navigator,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    SafeAreaView,
} from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";

import Util from "../utils";
import Day1 from "../ThirtyDaysViews/day1";
import Day2 from "../ThirtyDaysViews/day2";

//import { Navigator } from "react-native-deprecated-custom-components";

import Swiper from "react-native-swiper";


class F8InfoView extends React.Component {

    constructor(){
        super();
        this.state = {
            days:[{
                key:0,
                title:"A stopwatch",
                component: 'Day1',
                isFA: false,
                icon: "ios-stopwatch",
                size: 48,
                color: "#ff856c",
                hideNav: false,
            },{
                key:1,
                title:"A weather app",
                component: 'Day2',
                isFA: false,
                icon: "ios-partly-sunny",
                size:60,
                color:"#90bdc1",
                hideNav: true,
            },{
                key:2,
                title:"twitter",
                //component: Day3,
                isFA: false,
                icon: "logo-twitter",
                size:50,
                color:"#2aa2ef",
                hideNav: true,
            },{
                key:3,
                title:"cocoapods",
                //component: Day4,
                isFA: true,
                icon: "contao",
                size:50,
                color:"#FF9A05",
                hideNav: false,
            },{
                key:4,
                title:"find my location",
                //component: Day5,
                isFA: false,
                icon: "md-pin",
                size:50,
                color:"#00D204",
                hideNav: false,
            },{
                key:5,
                title:"Spotify",
                //component: Day6,
                isFA: true,
                icon: "spotify",
                size:50,
                color:"#777",
                hideNav: true,
            },{
                key:6,
                title:"Moveable Circle",
                //component: Day7,
                isFA: false,
                icon: "ios-baseball",
                size:50,
                color:"#5e2a06",
                hideNav: true,
            },{
                key:7,
                title:"Swipe Left Menu",
                //component: Day8,
                isFA: true,
                icon: "google",
                size:50,
                color:"#4285f4",
                hideNav: true,
            },{
                key:8,
                title:"Twitter Parallax View",
                //component: Day9,
                isFA: true,
                icon: "twitter-square",
                size:50,
                color:"#2aa2ef",
                hideNav: true,
            },{
                key:9,
                title:"Tumblr Menu",
                //component: Day10,
                isFA: false,
                icon: "logo-tumblr",
                size:50,
                color:"#37465c",
                hideNav: true,
            },{
                //   key:10,
                //   title:"OpenGL",
                //   component: Day11,
                //   isFA: false,
                //   icon: "md-contrast",
                //   size:50,
                //   color:"#2F3600",
                //   hideNav: false,
                // },{
                key:11,
                title:"charts",
                //component: Day12,
                isFA: false,
                icon: "ios-stats",
                size:50,
                color:"#fd8f9d",
                hideNav: false,
            },{
                key:12,
                title:"tweet",
                //component: Day13,
                isFA: false,
                icon: "md-chatboxes",
                size:50,
                color:"#83709d",
                hideNav: true,
            },{
                key:13,
                title:"tinder",
                //component: Day14,
                isFA: true,
                icon: "fire",
                size:50,
                color:"#ff6b6b",
                hideNav: true,
            },{
                key:14,
                title:"Time picker",
                //component: Day15,
                isFA: false,
                icon: "ios-calendar-outline",
                size:50,
                color:"#ec240e",
                hideNav: false,
            },{
                key:15,
                title:"Gesture unlock",
                //component: Day16,
                isFA: false,
                icon: "ios-unlock",
                size:50,
                color:"#32A69B",
                hideNav: true,
            },{
                key:16,
                title:"Fuzzy search",
               // component: Day17,
                isFA: false,
                icon: "md-search",
                size:50,
                color:"#69B32A",
                hideNav: false,
            },{
                key:17,
                title:"Sortable",
                //component: Day18,
                isFA: false,
                icon: "md-move",
                size:50,
                color:"#68231A",
                hideNav: true,
            },{
                key:18,
                title:"TouchID to unlock",
                //component: Day19,
                isFA: false,
                icon: "ios-log-in",
                size:50,
                color:"#fdbded",
                hideNav: true,
            },{
                key:19,
                title:"Single page Reminder",
                //component: Day20,
                isFA: false,
                icon: "ios-list-outline",
                size:50,
                color:"#68d746",
                hideNav: true,
            },{
                key:20,
                title:"Multi page Reminder",
                //component: Day21,
                isFA: false,
                icon: "ios-paper-outline",
                size:50,
                color:"#fe952b",
                hideNav: true,
            },{
                key:21,
                title:"Google Now",
                //component: Day22,
                isFA: false,
                icon: "ios-mic-outline",
                size:50,
                color:"#4285f4",
                hideNav: true,
            },{
                key:22,
                title:"Local WebView",
                //component: Day23,
                isFA: true,
                icon: "safari",
                size:50,
                color:"#23bfe7",
                hideNav: false,
            },{
                key:23,
                title:"Youtube scrollable tab",
                //component: Day24,
                isFA: false,
                icon: "logo-youtube",
                size:50,
                color:"#e32524",
                hideNav: true,
            },{
                key:24,
                title:"custome in-app browser",
                //component: Day25,
                isFA: false,
                icon: "ios-globe",
                size:50,
                color:"#00ab6b",
                hideNav: true,
            },{
                key:25,
                title:"swipe and switch",
                //component: Day26,
                isFA: false,
                icon: "md-shuffle",
                size:50,
                color:"#893D54",
                hideNav: true,
            },{
                key:26,
                title:"iMessage Gradient",
                //component: Day27,
                isFA: false,
                icon: "ios-chatbubbles",
                size:50,
                color:"#248ef5",
                hideNav: false,
            },{
                key:27,
                title:"iMessage image picker",
                //component: Day28,
                isFA: false,
                icon: "md-images",
                size:50,
                color:"#f5248e",
                hideNav: true,
            },{
                key:28,
                title:"3d touch",
                //component: Day29,
                isFA: false,
                icon: "ios-navigate",
                size:50,
                color:"#48f52e",
                hideNav: false,
            },{
                key:29,
                title:"Push Notifications",
                //component: Day30,
                isFA: false,
                icon: "md-notifications",
                size:50,
                color:"#f27405",
                hideNav: false,
            }]
        };
    }

    _jumpToDay(index){
        // this.props.navigator.push({
        //     title: this.state.days[index].title,
        //     index: index + 1,
        //     display: !this.state.days[index].hideNav,
        //     component: this.state.days[index].com,
        // })
        // this.props.navigation.navigate()
        this.props.navigation.navigate(this.state.days[index].component)
    }

    render() {
        return(
            <SafeAreaView>
                <Text>F8InfoView</Text>
            </SafeAreaView>
        )
    }

    render() {

        var onThis = this;
        var boxs = this.state.days.map(function (elem, index) {
            return(
                <TouchableHighlight key = {elem.key} style = {[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress = {()=> onThis._jumpToDay(index)}>
                    <View style = {styles.boxContainer}>
                        <Text style = {styles.boxText}>Day{index+1}</Text>
                        {elem.isFA ?
                            <IconFA size={elem.size} name = {elem.icon} style = {[styles.boxIcon, {color: elem.color}]}/>:
                            <Icon size = {elem.size} name = {elem.icon} style = {[styles.boxIcon, {color: elem.color}]}/>
                        }
                    </View>
                </TouchableHighlight>
            );

        })

        return (
            <ScrollView style = {styles.mainView} title = {this.props.title}>
                <Swiper height = {150} showsButtons = {false} autoplay = {true}
                    acticeDot = {<View style ={{backgroundColor: 'rgba(255,255,255, 0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
                    <TouchableHighlight onPress = {() => onThis._jumpToDay(0)}>
                        <View style = {styles.slide}>
                            <Image style={styles.image} source={{uri: 'day1'}}></Image>
                            <Text style={styles.slideText}>Day1: Timer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress = {() => onThis._jumpToDay(1)}>
                        <View style = {styles.slide}>
                            <Image style={styles.image} source={{uri: 'day2'}}></Image>
                            <Text style={styles.slideText}>Day2: Weather</Text>
                        </View>
                    </TouchableHighlight>
                </Swiper>
                <View style = {styles.touchBoxContainer}>
                    {boxs}
                </View>
            </ScrollView>
        );
    };
}

const F8InfoViewNav  = StackNavigator({
    Home: {
        screen: F8InfoView,
        navigationOptions: ({ navigation }) => ({
            title: "30 Days of RN",
        }),
    },
    Day1: {
        screen: Day1,
        navigationOptions: ({ navigation }) => ({
            title: "Day1: Timer"
        })
    },
    Day2: {
        screen: Day2,
        navigationOptions: ({ navigation }) => ({
            title: "Day2: Weather"
        })
    },
});

export default F8InfoViewNav;

// class NavigationBar extends Navigator.NavigationBar {
//     render() {
//         var routes = this.props.navState.routeStack;
//         if (routes.length) {
//             var route = routes[routes.length - 1];
//             if (route.display === false) {
//                 return null;
//             }
//         }
//         return super.render();
//     }
// }
//
// class ThirtyDaysOfReactNative extends Component {
//     componentDidMount() {
//         StatusBar.setBarStyle(0);
//     }
//
//     configureScene(route, routeStack) {
//         if (toute.type == 'Bottom') {
//             return Navigator.SceneConfigs.FloatFromBottom;
//         }
//         return Navigator.SceneConfigs.PushFromRight;
//     }
//
//     routeMapper = {
//         LeftButton: (route, navigator, index, navState) => {
//
//         },
//         RightButton: (route, navigator, index, navState) => {
//             return null;
//         },
//         Title: (route, navigator, index, navState) => {
//             return (<Text style={styles.navTitle}>{route.title}</Text>);
//         },
//     };
//
//     render() {
//         return(
//             <Navigator
//                 initialRoute = {{
//                     title: '30 Days of RN',
//                     index: 0,
//                     display: true,
//                     component: MainView,
//                 }}
//                 configureScene = {this.configureScene}
//                 renderScene = {(route, navigator) => {
//                     return <route.component navigator = {navigator} title = {route.title} index = {route.index} />
//                 }}
//                 navigationBar = {
//                     <NavigationBar
//                         routeMapper = {this.routeMapper}
//                         style = {styles.navBar}
//                     />
//                 }
//             />
//         );
//     };
// }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    mainView: {
    },
    navBar: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    navTitle: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "500",
    },
    navBackBtn: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 18,
        color: "#555",
    },
    itemWrapper: {
        backgroundColor: '#f3f3f3'
    },
    touchBox: {
        width: Util.size.width/3-0.3334,
        height: Util.size.width/3,
        backgroundColor: "#fff",
    },
    touchBoxContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: Util.size.width,
        borderTopWidth: Util.pixel,
        borderTopColor: "#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor: "#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor: "#ccc",
    },
    touchBox1: {
        borderBottomWidth: Util.pixel,
        borderBottomColor: "#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor: "#ccc",
    },
    touchBox2: {
        borderBottomWidth: Util.pixel,
        borderBottomColor: "#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor: "#ccc",
    },
    boxContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: Util.size.width/3,
        height: Util.size.width/3,
    },
    boxIcon: {
        position: "relative",
        top: -10,
    },
    boxText: {
        position: "absolute",
        bottom: 15,
        width: Util.size.width/3,
        textAlign: "center",
        left: 0,
        backgroundColor: "transparent",
    },
    slide: {
        flexGrow: 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideText: {
        position: "absolute",
        bottom: 0,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: Util.size.width,
        textAlign: "center",
        fontSize: 12,
    },
    image: {
        width: Util.size.width,
        flexGrow: 1,
        alignSelf: 'stretch'
    }
})































