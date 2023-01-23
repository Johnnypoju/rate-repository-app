import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    const rawAuthenticationToken = AsyncStorage.getItem(
        `${this.namespace}:accessToken`,
    );

    return rawAuthenticationToken;
  } 

  removeAccessToken() {
    AsyncStorage.clear();
  }
  
  setAccessToken(accessToken) {
    //this.removeAccessToken();
    
    AsyncStorage.setItem(
        `${this.namespace}:accessToken`,
        JSON.stringify(accessToken)
    );

  }

  
}

export default AuthStorage;