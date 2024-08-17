import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  hamburgerContainer: {
    position: 'absolute',
    top: 16, // Adjust as needed
   
    
  },
  hamburgerIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    color:"black",
   marginTop:50,
   marginLeft:27,
  },
  
  
  container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      button: {
        backgroundColor: '#393938',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 7,
        marginBottom: -40,
        marginLeft: 195,
      },
      weekdaysContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 330,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
      },
      headerText: {
        color: '#393938',
        fontSize: 30,
        fontWeight: '500',
       marginTop:10,
        marginBottom: -35,
        marginLeft:-85,
      },
      ht: {
        color: '#393938',
        fontSize: 20,
        fontWeight: 'normal',
        marginTop: 45,
        marginRight: 210,
      },
      hm: {
        color: '#393938',
        fontSize: 20,
        fontWeight: 'normal',
        marginTop: 45,
        marginRight: 180,
      },
      icon: {
        marginHorizontal: 5,
      },
      popup: {
    marginLeft:7,
        backgroundColor: '#ffdbcc',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
      },
      popupText: {
        flex: 1,
        color: '#393938',
      },
      closeButton: {
        padding: 5,
      },
      profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
      },
      leftCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#393938',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20, // Space between the circle and profile container
        marginLeft: 18,
      },
      profileText: {
        color: '#ffffff',
        fontSize: 16,
      },
      profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: -3,
      },
      greeting: {
        marginTop: 20,
        alignItems: 'center',
      },
      greetingText: {
        fontSize: 25,
        fontWeight: 'normal',
        color: '#393938',
        marginRight: 220,
      },
      fab: {
       width:65,
       height:65,
        position: 'absolute',
        backgroundColor: '#393938',
        borderRadius: 100,
        bottom: 100,
        right: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
      },
      bodyText: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20, // Adjust as needed
        alignItems: 'center',
      },
      outerContainer: {
       marginTop:70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:"white",
        height:210,
        width:340,
        borderRadius:15,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        
      },
      innerContainer: {
        width: '110%',
        height: 70,
       marginTop:-80,
        backgroundColor: "#A7C7E7",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
      gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 80,
      },
      navItem: {
        alignItems: 'center',
      },
      navText: {
        fontSize: 12,
        color: '#393938',
        marginTop: 4,
      },
      editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      editText: {
        color: '#393938',
        marginLeft: 5,
        fontSize: 16,
      },
      reviewContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      reviewText: {
        fontSize: 16,
        color: '#393938',
        marginTop: 5,
      },
      principlesContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#393938',
      },
      achievementsContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      profilePageContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      profilePage: {
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      aboutPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      aboutText: {
        fontSize: 18,
        color: '#393938',
        textAlign: 'center',
        marginTop: 70,
      },
      whiteContainer: {
        width: '100%',
        height: 100,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      notesPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      notesText: {
        fontSize: 20,
        color: '#393938',
      },
      plusIcon: {
        position: 'absolute',
        left: 20,
        top: 10,
        padding: 10,
      },
      profileBio: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20, // Add padding here
        marginTop: 25,
        width: 175, // Adjust width as per your design
        marginHorizontal: 10, // Adjust margin as per your design
      },
      checklistContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      checklistItem: {
        width: 80, // Increase width to make the circle larger
        height: 40, // Keep height consistent
        borderRadius: 20, // Half of the height to make it a circle
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        margin: 10,
      },
      checklistLabel: {
        textAlign: 'center',
        marginTop: 5, // Adjust spacing between icon and label
      },
      iconContainer: {
        alignItems: 'center',
      },
      iconText: {
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
      },
      filterContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
        width: '100%',
      },
      filterInput: {
        height: 40,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
      },
    });
    