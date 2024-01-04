import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ArticleCode} from './ArticleCode';

const styles = StyleSheet.create({
  title: {
    fontSize: 24, // Taille de police grande pour un titre
    fontWeight: 'bold', // Texte en gras
  },
});

export default function ArticleInfo(): React.JSX.Element {
  return (
    <>
      <Text style={styles.title}>Article</Text>
      <ArticleCode />
    </>
  );
}
