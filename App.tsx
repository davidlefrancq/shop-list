import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import QRCode from './src/components/QRCode';
import {QRCodeProvider} from './src/contexts/QRCodeContext';
import ArticleInfo from './src/components/ArticleInfo';

// Définissez vos styles ici
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    // Stylisation pour le titre et la description
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    // Stylisation pour les colonnes
  },
  title: {
    // Stylisation pour le titre
  },
  qrCodeContainer: {
    aspectRatio: 1, // Assurez-vous que la largeur et la hauteur sont toujours égales
    maxWidth: 200, // La largeur maximale que vous souhaitez pour votre QRCode
    maxHeight: 200, // La hauteur maximale que vous souhaitez pour votre QRCode
    flex: 1, // Prend l'espace disponible tout en respectant les contraintes max
    // Ajoutez des marges ou du padding selon besoin
  },
});

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <QRCode />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

const App = (): React.JSX.Element => {
  return (
    <QRCodeProvider>
      <View style={styles.container}>
        {/* Zone du titre et de la description */}
        <View style={styles.header}>
          {/* <Text style={styles.title}>Titre</Text> */}
          {/* <Text>Description</Text> */}
        </View>

        {/* Deux colonnes */}
        <View style={styles.content}>
          {/* Colonne 1 - Infos de l'article */}
          <View style={styles.column}>
            <ArticleInfo />
          </View>

          {/* Colonne 2 - Scan de QRCode */}
          <View style={styles.column}>
            {/* Intégrez votre scanner de QRCode ici */}
            <QRCode />
          </View>
        </View>
      </View>
    </QRCodeProvider>
  );
};

export default App;
