import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

interface LifeCycleProps {}
interface LifeCycleState {
  someState: string;
}

class LifeCycle extends Component<LifeCycleProps, LifeCycleState> {
  constructor(props: LifeCycleProps) {
    super(props);
    this.state = {
      someState: 'Constructor'
    };
    console.log(this.state.someState);
  }

  static getDerivedStateFromProps(props: LifeCycleProps, state: LifeCycleState) {
    console.log('Get Derived State From Props');
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  shouldComponentUpdate(nextProps: Readonly<LifeCycleProps>, nextState: Readonly<LifeCycleState>, nextContext: any): boolean {
    console.log('Should Component Update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<LifeCycleProps>, prevState: Readonly<LifeCycleState>) {
    console.log('Get Snapshot Before Update');
    return null;
  }

  componentDidUpdate(prevProps: Readonly<LifeCycleProps>, prevState: Readonly<LifeCycleState>, snapshot?: any): void {
    console.log('Component Did Update');
  }

  changeState = () => {
    this.setState({
      someState: 'Updated State'
    });
  }

  render() {
    console.log('Rendering');
    return (
      <View style={styles.buttonContainer}>
        <Button title='Update Mount' onPress={this.changeState} />
      </View>
    );
  }

  componentWillUnmount() {
    console.log('Component Unmount');
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: '3%',
  },
});

export default LifeCycle;
