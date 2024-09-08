import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const [activeTab, setActiveTab] = useState('home');
    const navigation = useNavigation();  // Hook for navigation
   
    const renderIcon = (iconName, tabName) => {
        const isActive = activeTab === tabName;
        return (
            <TouchableOpacity 
                style={styles.tabIcon} 
                onPress={() => setActiveTab(tabName)}
            >
                <Ionicons 
                    name={isActive ? iconName : `${iconName}-outline`} 
                    size={27} 
                    color="#393838" 
                />
                {isActive && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {/* Scrollable Content */}
            <ScrollView style={styles.scrollView}>
                <Text style={styles.sectionTitle}>Jump back in</Text>

                {/* Horizontally Scrollable Cards */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.cardsContainer}>
                        <TouchableOpacity style={styles.card}>
                            <Image
                                source={require('./assets/ship.jpg')}  // Replace with your local image
                                style={styles.cardImage}
                            />
                            <Text style={styles.continueHeader}>Introduction</Text>
                            <Text style={styles.continueSubheader}>Chapter 3: Lesson 2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card}>
                            <Image
                                source={require('./assets/course1.jpg')}  // Replace with your local image
                                style={styles.cardImage}
                            />
                            <Text style={styles.continueHeader}>Dale Carnegie</Text>
                            <Text style={styles.continueSubheader}>Chapter 4: Lesson 2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card}>
                            <Image
                                source={require('./assets/course2.jpg')}  // Replace with your local image
                                style={styles.cardImage}
                            />
                            <Text style={styles.continueHeader}>Peter Drucker</Text>
                            <Text style={styles.continueSubheader}>Chapter 3: Lesson 4</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <TouchableOpacity 
                    style={styles.quoteContainer} 
                    onPress={() => navigation.navigate('QuoteScreen')}
                >
                    <Text style={styles.quoteHeader}>Quote Of Today</Text>
                    <Text style={styles.quoteText}>"This is the quote of the day."</Text>
                </TouchableOpacity>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('QuoteScreen')}
                >
                    
                        <Text style={styles.buttonText}>Open</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Favourite</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                  View style={styles.privateItem}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Ionicons name="settings-outline" size={35} color="#393838" style={styles.privateIcon} />
                    <View style={styles.privateTextContainer}>
                        <Text style={styles.privateHeader}>Settings</Text>
                        <Text style={styles.privateText}>Manage your Account & Preferences, Get Help, and More...</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                  View style={styles.privateItem}
                    onPress={() => navigation.navigate('HomeworkScreen')}
                >
                    <Ionicons name="apps-outline" size={35} color="#393838" style={styles.privateIcon} />
                    <View style={styles.privateTextContainer}>
                        <Text style={styles.privateHeader}>Homework</Text>
                        <Text style={styles.privateText}>Keep track of your tasks, measure your progress</Text>
                    </View>
                </TouchableOpacity>
        
                <TouchableOpacity 
                  View style={styles.privateItem}
                    onPress={() => navigation.navigate('NotesScreen')}
                >
                    <Ionicons name="archive-outline" size={35} color="#393838" style={styles.privateIcon} />
                    <View style={styles.privateTextContainer}>
                        <Text style={styles.privateHeader}>Notes</Text>
                        <Text style={styles.privateText}>Manage & Add Notes, Revise Your Notes</Text>
                    </View>
                </TouchableOpacity>
            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    scrollView: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#393838',
        marginBottom: 8,
        fontWeight: '600',
    },
    cardsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    card: {
        width: 200,  // Adjusted width for horizontal scroll
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        height: 160,
        marginRight: 16,  // Adds space between cards
    },
    cardImage: {
        width: '120%',
        height: '70%',
        marginTop: -16,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
    },
    quoteContainer: {
        backgroundColor: '#393838',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 20,
        height: 120,
    },
    quoteText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'left',
        marginTop: 15,
    },
    quoteHeader: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#fafafa',
        padding: 12,
        borderRadius: 8,
        width: '30%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: '#393838',
    },
    privateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    privateIcon: {
        marginRight: 16,
    },
    privateTextContainer: {
        flex: 1,
    },
    privateText: {
        fontSize: 16,
        color: '#393838',
    },
    privateHeader: {
        fontSize: 18,
        color: '#393838',
        fontWeight: '600',
        marginBottom: 4,
    },
    continueHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#393838',
        marginBottom: 4,
        marginLeft: '-36%',
        marginTop: 10,
    },
    continueSubheader: {
        fontSize: 14,
        color: '#666',
        marginLeft: '-30%',
    },
    privateContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
});
