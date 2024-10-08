import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const PrivacyPolicyScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.content}>
            EndoCare ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). 
            Please read this Privacy Policy carefully. 
            If you do not agree with the terms of this Privacy Policy, please do not access the App.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#114232',
        marginBottom: 20,
    },
    content: {
        fontSize: 16,
        color: '#333',
    },
});

export default PrivacyPolicyScreen;
