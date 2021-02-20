import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const bottomModalData = [
    {
        "id": "Inbox",
        "name": "inbox-arrow-down",
        "icon": <MaterialCommunityIcons name="inbox-arrow-down" size={25} style={{paddingRight:20}} />
    },
    {
        "id": "Social",
        "name": "people",
        "icon": <Ionicons name="people" size={25} style={{paddingRight:20}} />
    },
    {
        "id": "Promotion",
        "name": "label",
        "icon": <MaterialCommunityIcons name="label" size={25} style={{paddingRight:20}} />
    },
    {
        "id": "Updates",
        "name": "exclamationcircleo",
        "icon": <AntDesign name="exclamationcircleo" size={25} style={{paddingRight:20}} />
    },
]

export default bottomModalData