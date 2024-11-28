import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost(){
  return (
    <View style={styles.postContainer}>
      <Image
      source={{ uri: 'https://rollingstone.com.br/media/_versions/2024/06/michael-jackson-cantor-divida-foto-dave-hogan-getty-images_widelg.jpg'}}
      style={styles.postImage}/>
      <Text style={styles.postDescription}>Este é um post exemplo em uma rede social, mostrando uma foto com uma breve descrição.</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  postContainer:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription:{
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
  },
});