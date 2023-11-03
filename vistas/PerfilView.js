import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


const PerfilView = () => {

    return (
        <View style={styles.container}>
        <View style={styles.profileHeader}>
            <Image style={styles.profileLogo} source={{ uri: 'C:\Users\Admn\Desktop\fotoejem.png' }} />
            <Text style={styles.profileUsername}>Nombre De Usuario</Text>
            <View style={styles.ratingStars}>
                {[1, 2, 3, 4, 5].map((n, index) => (
                    <Ionicons key={index} name="star" size={18} color="#f1c40f" />
                ))}
            </View>
        </View>
        <View style={styles.sections}>
            <TouchableOpacity style={styles.section}>
                <Text style={styles.sectionTitle}>Ayuda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
                <Text style={styles.sectionTitle}>Billetera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
                <Text style={styles.sectionTitle}>UNITE+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.specificSections}>
            <TouchableOpacity style={styles.section}>
                <Text style={styles.sectionTitle}>Notificaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
                <Text style={styles.sectionTitle}>Mensajes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
                <Text style={styles.sectionTitle}>Legal</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
    };
export default PerfilView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    profileHeader: {
        alignItems: 'center',
    },
    profileLogo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    ratingStars: {
        paddingTop: 15,
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    sections: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    specificSections: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 130,
        paddingBottom: 100,
        alignItems: '',

    },
    section: {

        padding: 2,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        margin: 5,
    },
    sectionTitle: {
        paddingTop: 2,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 2,
        alignContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'

    },
})