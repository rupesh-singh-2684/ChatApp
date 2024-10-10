import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icons } from '../../../../assests/icons';


interface ModalProps {
    visible: boolean;
    closeModal: () => void;
    onEmojiPress: (emoji: string) => void;
    onDeletePress?: () => void; 
}

const ReactionModal = ({ visible, closeModal,onEmojiPress,onDeletePress }: ModalProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={closeModal}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                    <View style={styles.modalView}>
                        <View style={styles.emoji}>
                            <TouchableOpacity onPress={() => onEmojiPress('👍')}>
                                <Image source={Icons.like} style={styles.emojiIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onEmojiPress('😂')}>
                                <Image source={Icons.laugh} style={styles.emojiIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onEmojiPress('❤️')}>
                                <Image source={Icons.love} style={styles.emojiIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onEmojiPress('👎')}>
                                <Image source={Icons.dislike} style={styles.emojiIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onEmojiPress('🥰')}>
                                <Image source={Icons.celebration} style={styles.emojiIcon} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Image source={Icons.eyeIcon} style={styles.optionIcon} />
                                <Text style={styles.modalOptionText}>View details</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Image source={Icons.pin} style={styles.optionIcon} />
                                <Text style={styles.modalOptionText}>Unpin Chat</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.optionContainer}>
                                <Image source={Icons.SearchIcon} style={styles.optionIcon} />
                                <Text style={styles.modalOptionText}>Search Chat</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onDeletePress}>
                            <View style={styles.optionContainer}>
                                <Image source={Icons.deleteIcon} style={styles.optionIcon} />
                                <Text style={styles.modalOptionText1}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ReactionModal;