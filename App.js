import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.title}>Rodrigo Richard</Text> 
       <Image source={{uri: 'https://portfoliorodrigo.netlify.app/images/Foto%20para%20Curr%C3%ADculo.jpg',}}
          style={styles.photo} />
      <Text style={styles.title}>Formação</Text>    
      <Text style={styles.paragraph}>
        Desenvolvedor Web e Designer
UI Interface do usuário Experiência do usuário UX. 3º período em Análise e Desenvolvimento de Sistemas, Faculdade Senac Pernambuco. 
      </Text>
      <Text style={styles.title}>Coding Skills</Text>
      <Text style={styles.paragraph}>
       Estudo Linguagens de Programação o para minha carreira.
       Javascript, Python e Java, e Linguagem de Marcação e Estilo, HML e CSS.
       Outras Skills, comunicação em equipe, visão de negócio, Inovação.
      </Text>
      <Text style={styles.title}>Habilidades Técnicas</Text>
      <Text style={styles.paragraph}>
       Frameworks e Bibliotécas; React, Django e Bootstrap.
       Banco de dados MySQL e MongoDb.
      </Text>
      <Text style={styles.title}>Estágio</Text>
       <Text style={styles.paragraph}>
       Apaixonado(a) por desenvolvimento web e buscando aprimorar minhas habilidades em HTML, CSS e JavaScript através de um estágio desafiador em sua empresa inovadora.
Com sólidos conhecimentos em Java e experiência em desenvolvimento de aplicações Android, busco um estágio em sua empresa para contribuir para o desenvolvimento de projetos mobile de alto impacto.
Entusiasta por segurança da informação e com conhecimentos em redes e criptografia, busco um estágio em sua empresa para aprimorar minhas habilidades e contribuir para a proteção de dados.
      </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width: 200, 
    height: 200,
  }
});
