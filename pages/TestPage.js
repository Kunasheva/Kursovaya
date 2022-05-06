import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const TestPage = ({ navigation }) => {
  const [userfirstpulse, setfirstpulse] = useState('');
  const [usersecondpulse, setsecondpulse] = useState('');
  function typeOf(obj) {
    if (/^\d+$/.test(obj) == true) {
      return obj
    }
    else {
      return NaN
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={{ width: 70, height: 70 }}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/944/PNG/128/medical-17_icon-icons.com_73939.png',
            }}
          />
          <Text style={styles.heading}>Указания:</Text>
          <Text style={styles.textStyle}>
            1. Находитесь в положении стоя в течение 5 минут.
          </Text>
          <Text style={styles.textStyle}>
            2. Измеряйте пульс в течение 15 секунд.
          </Text>
          <TextInput
            value={userfirstpulse}
            onChangeText={(userfirstpulse) => setfirstpulse(userfirstpulse)}
            placeholder={'Введите значение пульса'}
            style={styles.inputStyle}
            
            keyboardType={'numeric'}
          />
          <Text style={styles.textStyle}>
            3. Примите положение лежа и измеряйте пульс повторно в течение 15
            секунд.
          </Text>

          <TextInput
            value={usersecondpulse}
            onChangeText={(usersecondpulse) => setsecondpulse(usersecondpulse)}
            placeholder={'Введите значение пульса'}
            style={styles.inputStyle}
            
            keyboardType={'numeric'}
          />
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() =>
                navigation.navigate('ResultPage', {
                  paramKey1: parseInt(typeOf(userfirstpulse)),
                  paramKey2: parseInt(typeOf(usersecondpulse)),
                })
              }>
              <Text style={styles.buttontext}>РЕЗУЛЬТАТ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    color: '#228B22',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
    borderRadius: 20,
  },
  buttons: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#228B22',
    
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
  },
  buttontext: {
    marginVertical: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Georgia',
  },
});
