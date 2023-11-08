import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const items = [
  {
    img: require('../../assets/images/salary.png'),
    name: 'Princpal',
    amount: 10,
    pname:"Profit",
    price: 1,
  },
  {
    img: require('../../assets/images/salary1.png'),
    name: 'Princpal',
    amount: 20,
    pname:"Profit",
    price: 2,
  },
  {
    img: require('../../assets/images/salary2.png'),
    name: 'Princpal',
    amount: 30,
    pname:"Profit",
    price: 3,
  },
  {
    img: require('../../assets/images/salary3.png'),
    name: 'Princpal',
    amount: 40,
    pname:"Profit",
    price: 4,
  },
];

export default function PopularTask() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
    <View style={styles.header}>
      <Text style={styles.title}>Popular Tasks</Text>
      <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.listAction}>
              <Text style={styles.listActionText}>View All</Text>

             
            </TouchableOpacity>
    </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      

        {items.map(
          ({ img, name, amount, pname, price }, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // Handle onPress
                }}
              >
                <View style={styles.card}>
                  <Image
                    alt=""
                    resizeMode="cover"
                    source={ img }
                    style={styles.cardImg}
                  />

                  <View style={styles.cardBody}>
                    <Text>
                      <Text style={styles.cardTitle}>{name}</Text>{' '}
                      <Text style={styles.cardAirport}>₵{amount} </Text>
                    </Text>


                    

                    <Text style={styles.cardPrice}>
                      <Text style={styles.cardPriceValue}>
                        {pname}
                      ₵{price.toLocaleString('en-GH')}{' '}
                      </Text>
                      {/* <Text style={styles.cardPriceCurrency}>USD</Text> */}
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        // Handle onPress
                      }}
                    >
                      <View style={styles.btn}>
                        <Text style={styles.btnText}>Play</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </ScrollView>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -40,
    flex:1
   
  },
  scrollContainer: {
    padding: 24,
  paddingBottom: 50, // Add a bottom padding to prevent the last item from being obscured
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fff',
  
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardImg: {
    width: 110,
    height: 144,
    borderRadius: 12,
    // backgroundColor:"orange"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  listAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listActionText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#fff',
    marginRight: 2,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#173153',
    marginRight: 8,
  },
  cardAirport: {
    fontSize: 22,
    fontWeight: '600',
    color: '#5f697d',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    flexWrap: 'wrap',
  },
  cardRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  cardRowItemText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPriceValue: {
    fontSize: 21,
    fontWeight: '700',
    color: '#173153',
  },
  cardPriceCurrency: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6f61c4',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 58,
    backgroundColor: "orange"
  },

  btnText: {
    fontSize: 15,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});