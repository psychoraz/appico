# appico-mzubiaga

## Use node v14.15.0 (npm v6.14.8)
```
nvm use
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Android / IOS Builds

### Initial configuration
```
npx cap init appico appico.mzubiaga.net --web-dir=dist
npx cap add android
npx cap add ios
```

### Build, copy, sync & open Android Studio
```
npm run build
npx cap copy android && npx cap sync android && npx cap open android
```

### Build, copy, sync & open XCode
```
npm run build
npx cap copy ios && npx cap sync ios && npx cap open ios
```
