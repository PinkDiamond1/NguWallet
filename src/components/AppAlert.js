import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Dialog from "react-native-dialog";
import Colors from '../config/Colors';
import Localize from '../config/Localize';

function AppAlert({ title, message, actionButtonTitle, visible, loading, onAction, onCancel }) {

    const handleDelete = async (item) => {
        setLoading(true);
        const walletClass = await walletDiscovery.getWalletInstance({ id: wallet.id, type: wallet.type });
        await walletClass.deleteWallet(wallet.id);
        setLoading(false);
        setShowAlert(false);
    }

    return (
        <View style={styles.container}>
            <Dialog.Container
                contentStyle={styles.deleteContainer}
                headerStyle={styles.headerStyle}
                blurComponentIOS={<View></View>}
                visible={visible}>
                {loading &&
                    <ActivityIndicator size="large" />
                }
                <Dialog.Title style={styles.headerStyle}>{title}</Dialog.Title>
                <Dialog.Description style={styles.headerStyle}>
                    {message}
                </Dialog.Description>
                <Dialog.Button color={Colors.white} label={Localize.getLabel('cancel')} onPress={onCancel} />
                <Dialog.Button color={Colors.white} label={actionButtonTitle} onPress={onAction} />
            </Dialog.Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    deleteContainer: {
        backgroundColor: Colors.backgroundDark,
        color: Colors.white,
        borderColor: Colors.white
    },
    headerStyle: {
        color: Colors.white
    }
});

export default AppAlert;