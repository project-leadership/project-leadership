import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// Import your local images
import continueImage from './assets/ship.jpg'; // Adjust the path as needed
import courseImage1 from './assets/course1.jpg'; // Placeholder image 1
import courseImage2 from './assets/course2.jpg'; // Placeholder image 2

export default function App() {
    const navigation = useNavigation(); // Use navigation hook
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
                    name={isVisible ? 'remove-circle-outline' : 'add-circle-outline'} 
                    size={24} 
                    color="#393838" 
                />
            </TouchableOpacity>
            {isVisible && content}
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.sectionTitle}>Continue</Text>
                <TouchableOpacity 
                    style={styles.continueSection}
                    onPress={() => navigation.navigate('IntroScreen')}
                >
                    <View style={styles.continueImageContainer}>
                        <Image
                            source={continueImage}
                            style={styles.continueImage}
                        />
                    </View>
                    <View style={styles.continueContent}>
                        <Text style={styles.continueHeader}>Introduction</Text>
                        <Text style={styles.continueSubheader}>Chapter 3: Lesson 2</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Other Courses</Text>
                <View style={styles.coursesContainer}>
                    <View style={styles.courseItem}>
                        <View style={styles.courseImageContainer}>
                            <Image
                                source={courseImage1}
                                style={styles.courseImage}
                            />
                        </View>
                        <View style={styles.courseContent}>
                            <Text style={styles.courseTitle}>Dale Carnegie</Text>
                        </View>
                    </View>
                    <View style={styles.courseItem}>
                        <View style={styles.courseImageContainer}>
                            <Image
                                source={courseImage2}
                                style={styles.courseImage}
                            />
                        </View>
                        <View style={styles.courseContent}>
                            <Text style={styles.courseTitle}>Peter Drucker</Text>
                        </View>
                    </View>
                    {/* Add more course items as needed */}
                </View>
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
        flex: 1,
    },
    coursesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    continueSection: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 16,
        height: 200,
        overflow: 'hidden',
    },
    continueImageContainer: {
        height: '60%',
        position: 'relative',
    },
    continueImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    continueContent: {
        height: '40%',
        padding: 16,
        justifyContent: 'center',
    },
    continueHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#393838',
        marginBottom: 4,
    },
    continueSubheader: {
        fontSize: 14,
        color: '#666',
    },
    courseItem: {
        width: '48%',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 16,
        overflow: 'hidden',
    },
    courseImageContainer: {
        height: 100,
        position: 'relative',
    },
    courseImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    courseContent: {
        padding: 16,
    },
    courseTitle: {
        fontSize: 14,
        color: '#393838',
        fontWeight: '600',
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
