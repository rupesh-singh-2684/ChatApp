import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: colors.overlayColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalIcon: {
        width: 40,
        height: 40,
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 22,
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%', 
    },
    okButton: {
        backgroundColor: '#2A7BBB',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 5,
        flex: 1, 
        marginHorizontal: 5, 
    },
    okButtonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default styles;