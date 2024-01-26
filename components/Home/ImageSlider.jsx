import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function ImageSlider() {
  return (
  
      <View style={styles.container}>
        {/* <Text style={styles.title}>Restaurant Menu</Text> */}

        <View style={styles.list}>
            <ScrollView contentContainerStyle={styles.listContent} horizontal={true} showsHorizontalScrollIndicator={false}>
            {[
              {
                img: require('../../assets/images/img01.png'),
               },
              {
                img: require('../../assets/images/img02.png'),
               
              },
              {
                img: require('../../assets/images/img03.png'),
               
              },
              {
                img: require('../../assets/images/img04.png'),
               
              },
            
            ].map(({ img}, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={[styles.card,]}>
                  <Image source={img} style={styles.cardImg} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  card: {
    width: 222, // Set the card width to match your design width
    height: 217, // Set the card height to match your design height
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 12, // Reduce the space between cards
    marginRight: -41, // Adjust this to control the space between the cards
  
  },
  cardImg: {
    width: '100%', // Make the image width 100% of the card width
    height: '100%', // Make the image height 100% of the card height
    marginBottom: 12,
  },
  
  

  list: {
    marginBottom: 24,
  },
});
