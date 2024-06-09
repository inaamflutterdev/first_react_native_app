import React, { useState, useEffect } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const LifeCycleB = () => {
  const [someState, setSomeState] = useState('Constructor');

  // Equivalent to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log(someState);

    // Equivalent to componentWillUnmount:
    return () => {
      console.log('Component Unmount');
    };
  }, [someState]); // Dependency array: runs effect when someState changes

  const changeState = () => {
    setSomeState('Updated State');
  };

  return (
    <View style={styles.buttonContainer}>
      <Text>{someState}</Text>
      <Button title="Update State" onPress={changeState} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: '6%',
  },
});

export default LifeCycleB;
