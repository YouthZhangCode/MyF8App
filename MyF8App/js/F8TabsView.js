import React from "react";
import {
    PixelRatio,
    Platform,
    View,
    Text,
    Image,
    StatusBar
} from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
//import TabNavigator from "react-native-tab-navigator";

import F8InfoViewNav from './info/F8InfoView';
import MyScheduleView from './myf8/MyScheduleView';
import GeneralScheduleView from './schedule/GeneralScheduleView';
import F8VideosView from './videos/F8VideosView';
import F8DemosView from "./demos/F8DemosView";

// export default class F8TabsView extends React.Component {
//     render(){
//         return(
//             <View><Text>TabsView</Text></View>
//         )
//     }
// }

const F8TabsView = TabNavigator({
    Schedule: {
        screen: GeneralScheduleView,
        // tabBarOptions: {
        //     activityTintColor: '#e91e63',
        //     style: {
        //         backgroundColor: 'blue',
        //     },
        // },
    },
    MyF8: {
        screen: MyScheduleView,
    },
    Demos: {
        screen: F8DemosView,
    },
    Videos: {
        screen: F8VideosView,
    },
    Information: {
        screen: F8InfoViewNav,
    },
});

export default F8TabsView;