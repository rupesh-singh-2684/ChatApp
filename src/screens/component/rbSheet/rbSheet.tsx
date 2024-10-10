import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import { Icons } from '../../../assests/icons';

interface RbSheetProps {
  visible: boolean;
  onClose: () => void;
  onPressGallery?: () => void;
  onPressCamera?: () => void;
  handleNavigation: () => void;
}

const RbSheet: React.FC<RbSheetProps> = ({
  visible,
  onClose,
  handleNavigation,
}) => {
  const refRBSheet = useRef<{RBSheet:any}>(null);

  useEffect(() => {
    if (visible) {
      refRBSheet.current?.open();
    } else {
      refRBSheet.current?.close();
    }
  }, [visible]);

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnPressMask
      height={Dimensions.get('window').height/6.8}
      useNativeDriver={false}
      customStyles={{
        wrapper:styles.wrapper,
        container:styles.container
      }}
      onClose={onClose}
    >
      <View style={styles.bgColor}>
        <View style={styles.marginSide}>

          <Image source={Icons.AddPhone} style={styles.img}/>
          <Text style={styles.text} onPress={handleNavigation}>
            New Chat
          </Text>
          
        </View>
      </View>
    </RBSheet>
  );
};

export default RbSheet;
