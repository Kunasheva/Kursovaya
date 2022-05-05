import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const ResultPage = ({ route, navigation }) => {
  const first = route.params.paramKey1;
  const second = route.params.paramKey2;

  if (first < 11 || first > 35 || second < 11 || second > 35) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.resicon}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/79/PNG/256/error_15261.png',
            }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#B22222',
                marginTop: 20,
              }}>
              Что-то не так с данными!
            </Text>
            <Text style={styles.textStyle}>
              Вам следует проверить введеные данные, помните, что нужно вводить
              количество ударов в течение 15 секунд, если данные верны, СРОЧНО
              обратитесь к врачу!
            </Text>
          </View>

          <View style={styles.buttonsV}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('TestPage')}>
              <Text style={styles.buttontext}>НАЗАД</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else if (first - second < 1) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          style={styles.appicon}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
          }}
        />
        <View style={styles.container}>
          <Image
            style={styles.resicon}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/dialogerror_92823.png',
            }}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#B22222',
                marginTop: 20,
              }}>
              Обратитесь к врачу!
            </Text>
            <Text style={styles.textStyle}>
              При смене положения у здорового человека должно наблюдаться
              урежение пульса, у вас патология возбудимости парасимпатического
              отдела нервной системы.
            </Text>
          </View>
          <View style={styles.buttonsV}> 
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('IntroPage')}>
              <Text style={styles.buttontext}>МЕНЮ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else if (first - second < 4) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          style={styles.appicon}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
          }}
        />
        <View style={styles.container}>
          <Image
            style={styles.resicon}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/2183/PNG/512/cardiology_disease_medical_health_medicine_illness_heart_chest_icon_133487.png',
            }}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#B22222',
                marginTop: 20,
              }}>
              Вам следует обратиться к врачу
            </Text>
            <Text style={styles.textStyle}>
              Урежение частоты пульса ниже нормы, у вас слабая возбудимость
              парасимпатического отдела нервной системы.
            </Text>
          </View>
          <View style={styles.buttonsV}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('IntroPage')}>
              <Text style={styles.buttontext}>МЕНЮ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else if (first - second < 13) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          style={styles.appicon}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
          }}
        />
        <View style={styles.container}>
          <Image
            style={styles.resicon}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/2257/PNG/512/healthy_strength_strong_health_heart_icon_140233.png',
            }}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#B22222',
                marginTop: 20,
              }}>
              Все отлично!
            </Text>
            <Text style={styles.textStyle}>
              Урежение частоты пульса в норме. Проба не выявила никаких проблем
              с парасимпатическим отделом нервной системы.
            </Text>
          </View>
          <View style={styles.buttonsV}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('IntroPage')}>
              <Text style={styles.buttontext}>МЕНЮ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else if (first - second < 21) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          style={styles.appicon}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
          }}
        />
        <View style={styles.container}>
          <Image
            style={styles.resicon}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/2183/PNG/512/headache_pain_person_migraine_problem_people_stress_head_ache_icon_133511.png',
            }}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#B22222',
                marginTop: 20,
              }}>
              Вам следует обратиться к врачу
            </Text>
            <Text style={styles.textStyle}>
              Урежение частоты пульса превышает норму, это может быть следствием
              проблем парасимпатического отдела нервной системы.
            </Text>
          </View>
          <View style={styles.buttonsV}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('IntroPage')}>
              <Text style={styles.buttontext}>МЕНЮ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else if (first - second > 20) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          style={styles.appicon}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
          }}
        />
        <View style={styles.container}>
          <Image
            style={styles.resicon}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/dialogerror_92823.png',
            }}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#B22222',
                marginTop: 20,
              }}>
              Срочно обратитесь к врачу!
            </Text>
            <Text style={styles.textStyle}>
              Урежение частоты пульса крайне большое, это свидетельствует о
              серьезных патологиях парасимпатического отдела нервной системы.
            </Text>
          </View>
          <View style={styles.buttonsV}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('IntroPage')}>
              <Text style={styles.buttontext}>МЕНЮ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.resicon}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/79/PNG/256/error_15261.png',
            }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                color: '#B22222',
                marginTop: 20,
              }}>
              Будьте внимательнее!
            </Text>
            <Text style={styles.textStyle}>
              Вам следует проверить введеные данные, возможно вы ввели не тот
              формат или забыли указать одно из значений.
            </Text>
          </View>

          <View style={styles.buttonsV}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('TestPage')}>
              <Text style={styles.buttontext}>НАЗАД</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 22,
    textAlign: 'center',
    color: '#696969',
    marginTop: 20,
  },
  appicon: {
    width: 70,
    height: 70,
  },
  resicon: {
    width: 170,
    height: 170,
    marginTop: 20,
  },
  buttonsV: {
    width: 50,
    marginEnd: 5,
    alignItems: 'center',
  },
  buttons: {
    height: 50,
    marginEnd: 10,
    backgroundColor: 'green',
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
  },
  buttontext: {
    marginVertical: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Georgia',
  },
});
