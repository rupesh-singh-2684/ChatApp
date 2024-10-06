import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';
import styles from './styles';


const { width, height} = Dimensions.get('window');

interface CustomModalProps {
    visible: boolean;
    title: string;
    description: string;
    imageSource: any;
    buttonText: string;
    secondButtonText?: string;  
    closeModal?: () => void;
    onButtonPress?: () => void;
    onSecondButtonPress?: () => void;  
}

const CustomModal = (props: CustomModalProps) => {
    const { visible, title, description, imageSource, buttonText, closeModal, onButtonPress, secondButtonText, onSecondButtonPress } = props;

    const handleButtonPress = () => {
        if (onButtonPress) {
            onButtonPress();
        }
        if (closeModal) {
            closeModal();
        }
    };

    const handleSecondButtonPress = () => {
        if (onSecondButtonPress) {
            onSecondButtonPress();
        }
        if (closeModal) {
            closeModal();
        }
    };

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={closeModal}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Image style={styles.modalIcon} source={imageSource} />
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalMessage}>{description}</Text>
                    <View style={styles.buttonContainer}>
                    {secondButtonText && (
                            <TouchableOpacity onPress={handleSecondButtonPress} style={styles.okButton}>
                                <Text style={styles.okButtonText}>{secondButtonText}</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={handleButtonPress} style={styles.okButton}>
                            <Text style={styles.okButtonText}>{buttonText}</Text>
                        </TouchableOpacity>
                       
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default CustomModal;