import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePlaceholder from './components/ProfilePlaceholder'; // Ensure correct path

export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');

    // States for visibility of sections
    const [isRayDalioVisible, setRayDalioVisible] = useState(true);
    const [isDaleCarnegieVisible, setDaleCarnegieVisible] = useState(true);
    const [isPeterDruckerVisible, setPeterDruckerVisible] = useState(true);

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

    // Function to render a section with toggle functionality
    const renderSection = (title, isVisible, setVisible, content) => (
        <View>
            <TouchableOpacity onPress={() => setVisible(!isVisible)} style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <Ionicons 
                    name={isVisible ? 'remove-outline' : 'add-outline'} 
                    size={24} 
                    color="#393838" 
                />
            </TouchableOpacity>
            {isVisible && content}
        </View>
    );

    return (
        <View style={styles.container}>
         

            {/* Scrollable Content */}
            <ScrollView style={styles.scrollView}>
                {renderSection(
                    'Ray Dalio',
                    isRayDalioVisible,
                    setRayDalioVisible,
                    <View style={styles.privateContainer}>
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>From Case To Principles</Text>
                        </View>
                        <View style={styles.hr} />
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>5-Step Process </Text>
                        </View>
                        <View style={styles.hr} />
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>Ego & Blindspots</Text>
                        </View>
                        <View style={styles.hr} />
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>The Life Arc</Text>
                        </View>
                        <View style={styles.hr} />
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>Write Principle</Text>
                        </View>
                    </View>
                )}

                {renderSection(
                    'Dale Carnegie',
                    isDaleCarnegieVisible,
                    setDaleCarnegieVisible,
                    <View style={styles.privateContainer}>
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>Social Principles</Text>
                        </View>
                      
                       
                    </View>
                )}

                {renderSection(
                    'Peter Drucker',
                    isPeterDruckerVisible,
                    setPeterDruckerVisible,
                    <View style={styles.privateContainer}>
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>The Effective Executive</Text>
                        </View>
                        <View style={styles.hr} />
                        <View style={styles.privateItem}>
                            <Ionicons name="chevron-forward" size={20} color="#393838" style={styles.privateIcon} />
                            <Ionicons name="document-outline" size={24} color="#393838" />
                            <Text style={styles.privateText}>Management Challenges</Text>
                        </View>
                    </View>
                )}
            </ScrollView>

            {/* Search Bar Section */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="#ddd" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#999"
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                />
            </View>

            {/* Bottom Tab Bar */}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
    scrollView: {
        padding: 16,
        flex: 1,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#393838',
        marginBottom: 8,
        fontWeight: '600',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    hr: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        marginVertical: 8,
    },
    privateContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    privateItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    privateIcon: {
        marginRight: 16,
    },
    privateText: {
        fontSize: 16,
        color: '#393838',
        marginLeft: 10,
    },
    bottomTabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fafafa',
    },
    tabIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 10,
    },
    activeIndicator: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: '#393838',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5, // Shadow for Android
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#393838',
    },
    searchIcon: {
        paddingRight: 10,
    },
});
