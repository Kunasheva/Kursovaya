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

const MoreClinPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <View style={styles.container}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://cdn.icon-icons.com/icons2/944/PNG/512/medical-60_icon-icons.com_73946.png',
              }}
            />
          </View>
          <Text style={styles.heading}>Клиностатическая проба</Text>
          <Image
            style={{ width: 330, height: 250 }}
            source={{
              uri: 'https://medica24.ru/uploads/klinostatich-proba.jpg',
            }}
          />
          <Text style={styles.textStyle}>
            В нервной системе человека есть особый отдел - его называют
            вегетативным. Он управляет волей человека, направляя сигналы от
            мозга к телу, но помимо этого он командует работой всех внутренних
            органов.
          </Text>
          <Text style={styles.textStyle}>
            Весь спектр жизненных ситуаций и душевных состояний, с которыми
            ежедневно сталкивается человек, можно разделить на две большие
            группы:
          </Text>
          <Text style={styles.textStyleBig}>
            «Всё в порядке, я спокоен, можно расслабиться»
          </Text>
          <Text style={styles.textStyle}>
            - в этом состоянии организмом управляет отдел нервной системы,
            который называется ПАРАСИМПАТИЧЕСКИМ
          </Text>
          <Text style={styles.textStyleBig}>
            «Опасность! Сражаться! Бежать! Стресс!»
          </Text>
          <Text style={styles.textStyle}>
            - главные компетенции симпатического отдела вегетативной нервной
            системы.
          </Text>
          <Text style={styles.textStyle}>
            В итоге, работа симпатической и парасимпатической нервной системы -
            это постоянная борьба противоположностей. Функция всех органов
            перестраивается в зависимости от того, какой отдел преобладает. Не
            остается в стороне и сердце.
          </Text>
          <Image
            style={{ width: 310, height: 240 }}
            source={{
              uri: 'https://ds05.infourok.ru/uploads/ex/0f02/000e5359-69fe8fd5/hello_html_66de3f55.jpg',
            }}
          />
          <Text style={styles.textStyleBig}>
            Как вегетативная нервная система влияет на сердце?
          </Text>
          <Text style={styles.textStyle}>
            Вообще-то у сердца есть собственная нервная система. Она сама
            генерирует и распространяет по органу импульсы, энергия которых
            переходит в сокращения сердечной мышцы. Вегетативная нервная система
            лишь обеспечивает подстройку под внешние условия:
          </Text>
          <Text style={styles.textStyle}>
            Симпатический отдел - заставляет сердце сокращаться сильнее и чаще.
          </Text>
          <Text style={styles.textStyle}>
            Парасимпатический отдел - уменьшает силу и частоту сердечных
            сокращений.
          </Text>
          <Text style={styles.textStyle}>
            Вот только не всегда два отдела работают правильно и согласованно.
            Спокойно - к инфаркту это не приводит! Но может повлиять на
            переносимость физических нагрузок и вызывать некоторые неприятные
            симптомы.
          </Text>
          <Text style={styles.textStyleBig}>Как проводится тест?</Text>
          <Text style={styles.textStyle}>
            Тест проводится очень просто. Для начала пациенту нужно всего лишь
            спокойно постоять примерно 5 минут. После этого врач подсчитывает
            пульс. Затем пациента просят лечь - это должно привести к
            возбуждению парасимпатической нервной системы. Сразу же подсчитывают
            пульс в положении лежа. Его частота должна уменьшиться - но не
            сильно, в норме на 4-12 ударов в минуту. Если эта цифра больше -
            возбудимость парасимпатического отдела вегетативной нервной системы
            повышена
          </Text>
          <Text style={styles.textStyle}>
            Этот показатель важен для спортсменов, имеет он значение и в
            диагностике некоторых заболеваний, например, вегетососудистой
            дистонии. Часто клиностатическую пробу проводят вместе с
            ортостатической - она помогает проверить возбудимость симпатической
            нервной системы. Удар молоточном по коленке - не единственный метод
            в арсенале невролога. Существуют и многие другие тесты, сложные и не
            очень - они помогают проверить состояние разных отделов нервной
            системы, диагностировать различные заболевания
          </Text>
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.buttonsV}>
          <TouchableOpacity
            style={styles.buttons}>
            <Text style={styles.buttontext}>НАЧАТЬ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoreClinPage;

const styles = StyleSheet.create({
  container: {
    flex: 7,
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
    fontSize: 16,
    marginVertical: 5,
    color: '#696969',
  },

  textStyleBig: {
    textAlign: 'center',
    fontSize: 17,
    marginVertical: 5,
    color: '#228B22',
  },
  buttonsV: {
    flex: 0.5,
    width: 100,
    marginVertical: 5,
    alignItems: 'center',
    marginEnd: 5,
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
