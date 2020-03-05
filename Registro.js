import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import  {Font} from 'expo-font';

import {Container,Header,Content,Card,CardItem,Text,Body,Button, Input, Item, Icon} from 'native-base';

class Registro extends Component{
  render(){
    const navegar= this.props.navigation;
  return (
    <Container>
        
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Llena los siguientes campos</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'Correo'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Confirmar contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
             <Button  style= {misEstilos.container} onPress={() => navegar.navigate                   ('Login')}>
            <Text>Registrar</Text>
             </Button> 
            </CardItem>
          </Card>
          <Button full>
            <Icon type= 'AntDesign' name= 'facebook-square'></Icon>

          </Button>
        </Content>
        
      </Container>
  );
  }
}

const misEstilos = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',

  },
  contents:{
    flex:3,
    justifyContent:'center',

  },
  textCenter:{
    textAlign:'center',
    width:'100%',

  },
  imgCenter:{
    textAlign:'center',
    width:'80%',

  },
  boton:{
    marginLeft:'60%'
  },
  body:{
    paddingVertical:35,
  },
  boton2:{
    flex:2
  }
});

export default Registro;