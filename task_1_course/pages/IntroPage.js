import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const IntroPage = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
      }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Клиностатическая проба</Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
          }}
        />
        <Text style={styles.textStyle}>
          Для оценки состояния парасимпатического отдела вегетативной нервной
          системы.
        </Text>
      </View>

      <View style={{ flex: 2 }}>
        <View style={styles.buttonsV}>
          <TouchableOpacity
            style={styles.buttons}>
            <Text style={styles.buttontext}>НАЧАТЬ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsV}>
          <TouchableOpacity
            style={styles.buttons}>
            <Text style={styles.buttontext}>ПРАВИЛА</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsV}>
          <TouchableOpacity
            style={styles.buttons}>
            <Text style={styles.buttontext}>БОЛЬШЕ О ПРОБЕ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#228B22',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#808080',
    width: 300,
  },
  buttonsV: {
    flex: 0.1,
    width: 230,
    marginVertical: 20,
    paddingVertical: 5,
    alignItems: 'center',
  },
  buttons: {
    height: 60,
    marginTop: 20,
    backgroundColor: '#228B22',
    marginVertical: 'center',
    borderRadius: 20,
    width: 250,
    alignItems: 'center',
  },
  buttontext: {
    marginVertical: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Georgia',
  },
});
