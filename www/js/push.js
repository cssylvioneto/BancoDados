var tokenID = "";

        document.addEventListener("deviceready", function(){
            //Unregister the previous token because it might have become invalid. Unregister everytime app is started.
            window.plugins.pushNotification.unregister(successHandler, errorHandler);
            
            if(intel.xdk.device.platform == "Android")
            {
                //register the user and get token
                window.plugins.pushNotification.register(
                successHandler,
                errorHandler,
                {
                    //senderID is the project ID
                    "senderID":"",
                    //callback function that is executed when phone recieves a notification for this app
                    "ecb":"onNotification"
                });
            } 
            else if(intel.xdk.device.platform == "iOS") 
            {
                //register the user and get token
                window.plugins.pushNotification.register(
                tokenHandler,
                errorHandler,
                {
                    //allow application to change badge number
                    "badge":"true",
                    //allow application to play notification sound
                    "sound":"true",
                    //register callback
                    "alert":"true",
                    //callback function name
                    "ecb":"onNotificationAPN"
                });
            }
        }, false);
 
        //app given permission to receive and display push messages in Android.
        function successHandler (result) {
            alert('result = ' + result);
        }
        
        //app denied permission to receive and display push messages in Android.
        function errorHandler (error) {
            alert('error = ' + error);
        }
        
        //App given permission to receive and display push messages in iOS
        function tokenHandler (result) {
            // Your iOS push server needs to know the token before it can push to this device
            // here is where you might want to send the token to your server along with user credentials.
            alert('device token = ' + result);
            tokenID = result;
        }
        
        //fired when token is generated, message is received or an error occured.
        function onNotification(e) 
        {
            switch( e.event )
            {
                //app is registered to receive notification
                case 'registered':
                    if(e.regid.length > 0)
                    {
                        // Your Android push server needs to know the token before it can push to this device
            // here is where you might want to send the token to your server along with user credentials.
                        alert('registration id = '+e.regid);
                        tokenID = e.regid;
                    }
                    break;

                case 'message':
                  //Do something with the push message. This function is fired when push message is received or if user clicks on the tile.
                  alert('message = '+e.message+' msgcnt = '+e.msgcnt);
                break;

                case 'error':
                  alert('GCM error = '+e.msg);
                break;

                default:
                  alert('An unknown GCM event has occurred');
                  break;
            }
        }
        
        //callback fired when notification received in iOS
        function onNotificationAPN (event) 
        {
            if ( event.alert )
            {
                //do something with the push message. This function is fired when push message is received or if user clicks on the tile.
                alert(event.alert);
            }

            if ( event.sound )
            {
                //play notification sound. Ignore when app is in foreground.
                var snd = new Media(event.sound);
                snd.play();
            }

            if ( event.badge )
            {
                //change app icon badge number. If app is in foreground ignore it.
                window.plugins.pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, event.badge);
            }
        }