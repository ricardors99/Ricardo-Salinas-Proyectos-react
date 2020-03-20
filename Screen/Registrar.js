import React,{ Component } from 'react';
import { Container,Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import api from '../api';

class Registro extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      user: '',
      pass: ''
    }
  }
  

  register = () => api.registerData(this.state.email, this.state.user, this.state.pass);
   
  
  render(){
        const navegar = this.props.navigation;
        return(
            <Container>
              <Content padder contentContainerStyle = {misEstilos.content}>
                <Card>
                  <CardItem header bordered>
                    <Text>Página de Inicio</Text>
                  </CardItem>
                  <CardItem>
                    <Text>Logueate con tu red social o Email</Text>
                  </CardItem>
                  <CardItem bordered>
                  <Body style = {misEstilos.content}>
                      <Item inlineLabel>
                        <Button primary style ={misEstilos.content}>
                        <Icon type = 'Entypo' name = 'facebook'></Icon>
                        </Button>
                        <Button danger style ={misEstilos.content}>
                        <Icon type = 'AntDesign' name = 'google'></Icon>
                        </Button>
                      </Item>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Text style = {misEstilos.content}>                                        OR </Text>
                </CardItem>
                <CardItem bordered>
                  <Body style = {misEstilos.content}>
                      <Item inlineLabel>
                        <Icon type = 'MaterialIcons' name = 'email'></Icon>
                          <Input placeholder='Email'
                            onChangeText = {(email) => this.setState({email})}/>
                      </Item>
                      <Item inlineLabel>
                        <Icon type = 'AntDesign' name = 'user'></Icon>
                        <Input placeholder='Nombre de usuario' 
                        onChangeText = {(user) => this.setState({user})}/>
                      </Item>
                      <Item inlineLabel>
                        <Icon type = 'AntDesign' name = 'lock'></Icon>
                        <Input placeholder='password'
                          onChangeText = {(pass) => this.setState({pass})}
                        />
                        <Button><Icon type = 'Feather' name = 'eye' ></Icon></Button>
                      </Item>
                    <CardItem footer bordered>
                        <Button primary onPress={() => navegar.navigate('Login')}>
                          <Text> Login </Text>
                        </Button>
                        <Button success style = {misEstilos.content} 
                        onPress = {this.register}>
                          <Text> Guardar </Text>
                        </Button>
                    </CardItem>
                    </Body>
                </CardItem>
              </Card>
            </Content>
            </Container>
    );
    }
};