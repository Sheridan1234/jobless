import { Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebaseConfig';


function App({navigation}) { 
  const handleLogout = () => {
            auth.signOut()
                .then((userCredential) => {       
                console.log('LogOut successful');
                navigation.navigate("Login");
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                });
        }; 
  return (
          <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      </View> 
  );
}


export default App;