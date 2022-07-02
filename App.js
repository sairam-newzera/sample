import React, { useState,useEffect } from 'react';
import {Text, SafeAreaView,View,StyleSheet,TouchableOpacity} from 'react-native'
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const App=()=> {
  const joinHandler =  ()=>{
    console.log("Starting meet****************************************************************************")
    const url = 'https://meet.jit.si/park';
      const userInfo = {
        displayName: 'Kumar',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      const options = {
        audioMuted: false,
        audioOnly: false,
        videoMuted: false,
        subject: "Sample Testing",
        // token: "your token"
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
      JitsiMeet.call(url, userInfo, options, meetFeatureFlags);
      return ()=>{
        JitsiMeet.endCall()
      }
  }

  const onConferenceTerminated=(nativeEvent)=> {
    /* Conference terminated event */
    console.log("Terminated*******************************************************************************")
  }

  const onConferenceJoined=(nativeEvent) => {
    /* Conference joined event */
    console.log("Joined*******************************************************************************")
  }
  const onConferenceWillJoin=(nativeEvent) =>{
    /* Conference will join event */
    console.log("Will Join*****************************************************")
  }
  useEffect(()=>{
    setTimeout(()=>{joinHandler()},2000)
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
export default App;
 
    
