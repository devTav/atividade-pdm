import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import Label from '../components/Label';
import { TextInputMask } from 'react-native-masked-text';

const Home = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const cadastrar = () => {
    if (!nome.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o nome.');
      return;
    }
  
    if (!telefone.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o telefone.');
      return;
    }
  
    if (telefone.length < 15) {
      Alert.alert('Atenção', 'Telefone incompleto. Use o formato (00) 00000-0000.');
      return;
    }
  
    setUsuarios([...usuarios, { nome, telefone }]);
    setNome('');
    setTelefone('');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <Label>Nome:</Label>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Label>Telefone:</Label>
      <TextInputMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="(00) 00000-0000"
        keyboardType="phone-pad"
        maxLength={15}
      />

      <View style={styles.buttonContainer}>
      <Button title="Cadastrar" onPress={cadastrar} color="#6ca0dc" />
      </View>

      <View style={styles.listaHeader}>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Telefone</Text>
      </View>

      <ScrollView style={styles.scroll}>
        {usuarios.map((usuario, index) => (
          <View key={index} style={styles.listaItem}>
            <Text>{usuario.nome}</Text>
            <Text>{usuario.telefone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  scroll: {
    marginTop: 10,
  },
  listaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  listaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default Home;