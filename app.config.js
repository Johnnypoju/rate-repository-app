import 'dotenv/config'


export default {
    "name": "rate-repository-app",
    "slug": "rate-repository-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/816e30b6-aeaa-4369-9b1b-dd65c96036ea"
    },
    "runtimeVersion": {
      "policy": "appVersion"
    },  
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "expo": {
      "extra": {
        "eas": {
          "projectId": "816e30b6-aeaa-4369-9b1b-dd65c96036ea"
        }
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "env": process.env.ENV,
      "apolloUri": process.env.APOLLO_URI,
    }
  }
