import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Switch,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './Me.style';

const SECTIONS = [
  {
    header: '',
    items: [
      { label: 'Your account', secondlabel:'See information about your account',  type: 'input' },
      {  label: 'Make deposit', secondlabel:'Deposit and win big', type: 'input' },
      { label: 'Withdraw Cash', secondlabel:'Chop your money', type: 'input' },
      {  label: 'Customer Service', secondlabel:'Not satisfied reach out', type: 'input' },
      {label: 'Transaction Histroy', secondlabel:'Your recent transactions', type: 'input' },
      {  label: 'About', secondlabel:'About Cashwave', type: 'input' },
      {  label: 'log out', secondlabel:'Come back have fun', type: 'input' },
    ],
  },


];

function SectionRow({ label, secondlabel, type, index, onPress }) {
  return (
    <View style={[{ marginLeft: 12 }, index !== 0 && styles.splitline]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionBodyRow}>
          <Text style={styles.sectionBodyRowLabel}>{label}</Text>
          <View style={styles.spacer} />
          {type === 'input' && (
            <Text style={styles.sectionBodyRowValue}>{value}</Text>
          )}
          {type === 'boolean' && <Switch value={value} />}
          {(type === 'input' || type === 'link') && (
            <FeatherIcon
              style={{ marginLeft: 6 }}
              name="chevron-right"
              size={24}
              color="#ababab"
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function Example() {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        {/* <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Account</Text>
        </View> */}
        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />

          <View style={styles.profileBody}>
            <Text style={styles.profileName}>John Doe</Text>

            <Text style={styles.profileHandle}>john.doe@mail.com</Text>
          </View>

    
        </View>
      </View>

      {SECTIONS.map(({ header, items }) => (
        <View style={styles.section} key={header}>
          <View style={styles.sectionHeader}>
            {/* <Text style={styles.sectionHeaderText}>{header}</Text> */}
          </View>
          <View style={styles.sectionBody}>
            {items.map(({ label, type, secondlabel }, index) => {
              const isFirst = index === 0;
              const isLast = index === items.length - 1;
              return (
                <View
                  key={index}
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                    isFirst && styles.rowFirst,
                    isLast && styles.rowLast,
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}>
                    <View style={styles.row}>
                      <View style={styles.rowBody}>
                        <Text style={styles.rowLabel}>{label}</Text>
                        <Text style={styles.secondabel}>{secondlabel}</Text>
                      </View>
                     

                      <View style={styles.rowSpacer} />
                      

                      {/* {type === 'input' && (
                        <Text style={styles.rowValue}>{value}</Text>
                      )} */}

                      {type === 'boolean' && <Switch value={value} />}

                      {(type === 'input' || type === 'link') && (
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                        />
                      )}

                       {/* <Text style={styles.rowLabel}>{label}</Text> */}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </View>
    </View>
  );
}

