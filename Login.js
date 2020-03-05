import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container,Header,Content,Card,CardItem,
  Text,Body,Button, Input, Item, Icon} from 'native-base';
 
class Login extends Component{
      constructor(props){
        super(props);
        this.state={usuario:'',pass:''};
      }
      state={
        showIndicator:false,
    }
    onButtonPress=()=>{
        this.setState({
            showIndicator:true
        }),
    this.props.navigation.navigate('Bienvenida',{pass:this.state.pass, usuario:this.state.usuario});
    }
    render(){
      const navegar= this.props.navigation;
    return (
    
      <Container>
     
      <Content padder contentContainerStyle = {misEstilos.content}>
        <Card>
          <CardItem header bordered>
            <Text style= {misEstilos.textCenter}>Inicio de sesión</Text>
          </CardItem>
          <CardItem bordered>
            <Body style = {misEstilos.body}>
              <Item inlineLabel>
              <Icon type= 'FontAwesome' name= 'user'></Icon>
                <Input placeholder= 'Nombre del usuario'
                           type="text" value={this.state.usuario}
                           onChangeText={(usuario)=>this.setState({usuario})}/>
              </Item>
              <Item inlineLabel last>
              <Icon type= 'FontAwesome' name= 'lock'></Icon>
                <Input placeholder= 'Contraseña'
                type='text'
                type="text" value={this.state.pass}
                onChangeText={(pass)=>this.setState({pass})}/>
              </Item>
            </Body>
          </CardItem>
          <CardItem style={misEstilos.container}>
          <Button
            onPress={() => navigation.navigate('Principal',{pass:postUser,user:postPass})}
            title="Ingresar"
          />
          </CardItem >
          <CardItem footer bordered >
          <Button primary style={misEstilos.boton1} 
            onPress={() =>{navegar.navigate('Registro',
            {titulo:'Registro usuario',
            nombre:'David'})}}><Text>Registrate</Text></Button>
              
              <Button primary style={misEstilos.boton} 
              onPress={() =>navegar.navigate('Perfil',
              {pass:this.state.pass, usuario: this.state.usuario})}><Text>Iniciar Sesión</Text></Button>
          </CardItem>
        </Card>

      </Content>
    </Container>
    
  );
 
    }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 35,
  },
  container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    boton1:{
      marginLeft:'0%'
    },
    boton:{
      marginLeft:'20%'
    },
    
});

export default Login;