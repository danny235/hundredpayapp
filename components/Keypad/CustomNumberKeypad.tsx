import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '../Colors';
import {BackSpaceIcon} from '../SvgAssets';
import {MediumText} from '../styles/styledComponents';

interface CustomNumberKeypadProps {
  onKeyPress?: (value: string) => void;
  isVisible: boolean;
  onClose?: (value: boolean) => void;
  onBackspace?: () => void;
}

const CustomNumberKeypad: React.FC<CustomNumberKeypadProps> = ({
  isVisible,
  onKeyPress,
  onClose,
  onBackspace,
}) => {
  const [typedValue, setTypedValue] = useState('');
  const {height} = useWindowDimensions();
  const bottomPosition = useRef(new Animated.Value(-height)).current;

  const handleKeyPress = (value: string) => {
    if (value === 'Back') {
      onBackspace && onBackspace();
    } else {
      setTypedValue(prevValue => prevValue + value);
      onKeyPress && onKeyPress(value);
    }
  };

  useEffect(() => {
    if (isVisible) {
      Animated.timing(bottomPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottomPosition, {
        toValue: -height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isVisible]);

  const renderKeypadButton = (value: string, key: number) => (
    <TouchableOpacity
      key={key}
      style={value === '' ? styles.inActiveButton : styles.button}
      onPress={() => handleKeyPress(value)}>
      {value == 'Back' ? (
        <BackSpaceIcon />
      ) : (
        <MediumText style={styles.buttonText}>{value}</MediumText>
      )}
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose && onClose(false)}>
      <View style={styles.modalContainer}>
        <Animated.View
          style={[
            styles.keypad,
            {
              bottom: bottomPosition,
            },
          ]}>
          <View style={styles.row}>
            {renderKeypadButton('1', 1)}
            {renderKeypadButton('2', 2)}
            {renderKeypadButton('3', 3)}
          </View>
          <View style={styles.row}>
            {renderKeypadButton('4', 4)}
            {renderKeypadButton('5', 5)}
            {renderKeypadButton('6', 6)}
          </View>
          <View style={styles.row}>
            {renderKeypadButton('7', 7)}
            {renderKeypadButton('8', 8)}
            {renderKeypadButton('9', 9)}
          </View>
          <View style={styles.row}>
            {renderKeypadButton('', 20)}
            {renderKeypadButton('0', 10)}
            {renderKeypadButton('Back', 11)}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  keypad: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: Colors.searchInput,
  },
  inActiveButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default CustomNumberKeypad;
