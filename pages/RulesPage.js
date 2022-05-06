import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text, 
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const RulesPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 50, height: 50, marginTop: 25 }}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
            }}
          />
          <Text style={styles.heading}>
            Правила и Рекомендации по проведению клиностатической пробы
          </Text>
        </View>
        <ScrollView style={{ flexGrow: 1 }}>
          <Text style={styles.textStyle}>
            Клиностатическая проба может дать объективную информацию о
            функциональном состоянии организма человека, но только при
            соблюдении определенных правил:
          </Text>
          <Text style={styles.textStyle}>
            1.Перед началом тестирования необходимо выяснить, что у обследуемого
            нет противопоказаний к проведению функциональной пробы:
          </Text>
          <Text style={styles.textStyle}>1) острый период заболевания;</Text>
          <Text style={styles.textStyle}>2) повышенная температура тела;</Text>
          <Text style={styles.textStyle}>3) кровотечение;</Text>
          <Text style={styles.textStyle}>4) тяжѐлое общее состояние;</Text>
          <Text style={styles.textStyle}>
            5) выраженная недостаточность кровообращения;
          </Text>
          <Text style={styles.textStyle}>6) гипертонический криз;</Text>
          <Text style={styles.textStyle}>7) нарушение ритма сердца;</Text>
          <Text style={styles.textStyle}>
            8) быстро прогрессирующая и нестабильная стенокардия;
          </Text>
          <Text style={styles.textStyle}>9) аневризма аорты;</Text>
          <Text style={styles.textStyle}>10) острый тромбофлебит;</Text>
          <Text style={styles.textStyle}>11) аортальный стеноз;</Text>
          <Text style={styles.textStyle}>
            12) выраженная дыхательная недостаточность;
          </Text>
          <Text style={styles.textStyle}>
            13) острые психические расстройства;
          </Text>
          <Text style={styles.textStyle}>
            14) невозможность выполнения пробы (болезни нервной и нервномышечной
            систем, болезни суставов).
          </Text>
          <Text style={styles.textStyle}>
            2. Во время проведения функциональной пробы необходимо вести
            наблюдение за состоянием обследуемого. Показаниями для немедленного
            прекращения тестирования являются (по Егоровой М.А.):
          </Text>
          <Text style={styles.textStyle}>1) прогрессирующая боль в груди;</Text>
          <Text style={styles.textStyle}>2) выраженная одышка;</Text>
          <Text style={styles.textStyle}>
            3) чрезмерное повышение АД, не соответствующее возрасту и величине
            нагрузки;
          </Text>
          <Text style={styles.textStyle}>
            {' '}
            4) значительное понижение систолического давления;
          </Text>
          <Text style={styles.textStyle}>
            5) бледность или цианоз лица, холодный пот;
          </Text>
          <Text style={styles.textStyle}>
            6) нарушение координации движений;
          </Text>
          <Text style={styles.textStyle}>7) невнятная речь;</Text>
          <Text style={styles.textStyle}>
            8) отклонения на электрокардиограмме;
          </Text>
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.buttonsV}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('TestPage')}>
            <Text style={styles.buttontext}>НАЧАТЬ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RulesPage;

const styles = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
    color: '#228B22',
    width: 300,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#696969',
  },
  buttonsV: {
    flex: 0.5,
    width: 100,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttons: {
    height: 50,
    marginTop: 10,
    backgroundColor: 'green',
    marginVertical: 'center',
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
