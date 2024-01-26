import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    marginTop: 15
  },
  header: {
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'orange',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    backgroundColor: 'black',
    
  },
  sectionHeader: {
    padding: 8,
    paddingLeft: 12,
    marginTop: -30
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#adadad',
    textTransform: 'uppercase',
  
  },
  sectionBody: {
  
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },
  profile: {
    padding: 12,
   
   borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 22,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 0,
    marginBottom: 12,
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowBody: {
   marginBottom:-10,

  },
  rowWrapper: {
    paddingBottom: -12,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
   
  },
  rowLabel: {
    fontSize: 17,
    color: 'orange',
    fontWeight: '600',
  },
  secondabel:{
    color: '#858585',
},
  rowValue: {
    fontSize: 17,
    color: '#ababab',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginBottom: 32
  },
});

export default styles;
