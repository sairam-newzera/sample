import React, { useState,useEffect } from 'react';
import {Text, SafeAreaView,View,StyleSheet,TouchableOpacity} from 'react-native'
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const VideoChat=({navigation})=> {
  const joinHandler =  ()=>{
    console.log("Starting meet****************************************************************************")
    const url = 'https://meet.newzera.com/trident';
      const options = {
        audioMuted: false,
        audioOnly: false,
        videoMuted: false,
        subject: "Sample Testing",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJuZXd6ZXJhIiwiaXNzIjoibmV3emVyYSIsInN1YiI6Im1lZXQubmV3emVyYS5jb20iLCJyb29tIjoiKiIsImlhdCI6MTY1NzA5MzAwNSwiZXhwIjoxNjU3MDk2NjA1LCJjb250ZXh0Ijp7InVzZXIiOnsibmFtZSI6InJvYmVydCIsImVtYWlsIjoicm9iZXJ0QGdtYWlsLmNvbSIsImF2YXRhciI6Imh0dHBzOi9ncmF2YXRhci5jb20vYXZhdGFyL2FiYzEyMyJ9fX0.sMn0vreZ2VHR8w_40CbF8bQ73T-MsSrRurXj0tWexUo"
      }
      const meetFeatureFlags = {
        addPeopleEnabled: true,
        calendarEnabled: true,
        callIntegrationEnabled: true,
        chatEnabled: true,
        closeCaptionsEnabled: true,
        inviteEnabled: true,
        androidScreenSharingEnabled: true,
        liveStreamingEnabled: true,
        meetingNameEnabled: true,
        meetingPasswordEnabled: true,
        pipEnabled: true,
        kickOutEnabled: true,
        conferenceTimerEnabled: true,
        videoShareButtonEnabled: true,
        recordingEnabled: true,
        reactionsEnabled: true,
        raiseHandEnabled: true,
        tileViewEnabled: true,
        toolboxAlwaysVisible: true,
        toolboxEnabled: true,
        welcomePageEnabled: false,
      }
      JitsiMeet.call(url,{}, options, meetFeatureFlags);
      return ()=>{
        JitsiMeet.endCall()
      }
  }

  const onConferenceTerminated=(nativeEvent)=> {
    /* Conference terminated event */
    console.log("Terminated")
    navigation.navigate('Home')
  }

  const onConferenceJoined=(nativeEvent) => {
    /* Conference joined event */
    console.log("Joined")
  }
  const onConferenceWillJoin=(nativeEvent) =>{
    /* Conference will join event */
    console.log("Will Join")
  }
  useEffect(()=>{
  joinHandler()
  },[])
  return (
    <SafeAreaView >
    <JitsiMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{backgroundColor:'red',height:'100%',width:'100%' }}
    />
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  body: {
    height: 600,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    backgroundColor: 'white',
    borderWidth: 1,
    color:'black',
    padding: 10,
    textAlign: 'center',
  }
});
export default VideoChat;
 
    