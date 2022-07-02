import React, { useState,useEffect } from 'react';
import {Text, SafeAreaView,StatusBar,View, Touchable, TouchableOpacity, Button} from 'react-native'
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const App=()=> {
  const [show,setShow]=useState(false)
  const [count,setCount]=useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log("Started")
      const url = 'https://meet.jit.si/park';
      const userInfo = {
        displayName: 'Kumar',
        // email: 'user@example.com',
        // avatar: 'https:/gravatar.com/avatar/abc123',
      };
      const options = {
        audioMuted: true,
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
      JitsiMeet.call(url, userInfo);
      // , options, meetFeatureFlags
      setShow(true)
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    }, 2000);
    return () => {
      console.log("End call")
      JitsiMeet.endCall();
    };
  }, [])

  // useEffect(() => {
  //   return () => {
  //     console.log("End call")
  //     JitsiMeet.endCall();
  //   };
  // });

  const onConferenceTerminated=(nativeEvent)=> {
    /* Conference terminated event */
    
    console.log("Terminated","Joined*******************************************************************************",nativeEvent)
  }

  const onConferenceJoined=(nativeEvent) => {
    /* Conference joined event */

    console.log("Joined*******************************************************************************",nativeEvent)
    // StatusBar.setHidden(false, 'none')
    //    StatusBar.setTranslucent(false)
      //  StatusBar.setBackgroundColor('#000000')
      //  StatusBar.setBarStyle('light-content')
        setTimeout(()=>{
          //  StatusBar.setHidden(false, 'none')
          //  StatusBar.setTranslucent(true)
          //  StatusBar.setBackgroundColor('#000000')
          //  StatusBar.setBarStyle('light-content')
        },100)
    setShow(false);
        setTimeout(()=>{
           setShow(true)
        },100)
  }
  const func=()=>{
    // console.log("Pressed***************************************************")
    setCount(count+1)
  }
  const onConferenceWillJoin=(nativeEvent) =>{
    /* Conference will join event */
    console.log("Will Join*****************************************************",nativeEvent)
  }
  return (
    <SafeAreaView style={{alignItems:'center'}}>
    <View style={{backgroundColor:'violet',height:50,width:'100%', justifyContent:'center',alignItems:'center'}}>
      <Text style={{textAlign:'center',color:'black'}}>Jitsi meet</Text>
    </View>
    <JitsiMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{backgroundColor:'red',height:'80%',width:'100%' }}
    />
    {/* <Button
    onPress={func}  title={`${count}`}/> */}
   
   </SafeAreaView>
  )
}
export default App;
 
    
