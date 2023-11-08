import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Profileheader() {
  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerBadge}>
              {new Date('2022-12-12').toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                weekday: 'long',
              })}
            </Text>

            <Text style={styles.headerTitle}>Welcome back,</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.avatar}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.avatarImg}
              />
                </View>
          </TouchableOpacity>
        </View>

       
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginBottom: -50,
    marginTop:87
   
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBadge: {
    fontSize: 15,
    fontWeight: '400',
    color: '#a3a3a3',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fff',
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  avatar: {
    position: 'relative',
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },

});