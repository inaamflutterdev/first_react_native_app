import React, { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LifeCycleB from './components/LifeCycleB'; // Update to import Use Effect
import LifeCycle from './components/LifeCycle';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [showLifeCycleB, setShowLifeCycleB] = useState(false);
  // const [showUpdateButton, setshowUpdateButton] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  // const toggleLifeCycle = () => {
  //       setshowUpdateButton(prevState => !prevState);
  // };

  const toggleLifeCycleB = () => {
    setShowLifeCycleB(prevState => !prevState);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.centeredView}>
      {/* <Button title="Toggle Component LifeCycle " onPress={toggleLifeCycle} /> */}
        <Button title="Toggle Use Effect" onPress={toggleLifeCycleB} />
        {showLifeCycleB && <LifeCycleB />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   useColorScheme,
//   View,
//   Button,
// } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';


// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [showUpdateButton, setshowUpdateButton] = useState(false);

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//     flex: 1,
//   };

//   const toggleLifeCycle = () => {
//     setshowUpdateButton(prevState => !prevState);
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <View style={styles.centeredView}>
        
//         {showUpdateButton && <LifeCycle />}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
