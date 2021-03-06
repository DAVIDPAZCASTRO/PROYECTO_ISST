import React, { Component } from 'react'
import { View, Text, BackHandler, Alert } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer } from 'native-base'
import SignInUp from "./SignInUp"

class Authentication extends Component {

    render () {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body>
                    <Text style={{fontSize:20, color: 'white'}}>Inicio de sesión</Text>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Usuario o correo electrónico</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Contraseña</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <Button transparent onPress={() => this.props.navigation.navigate('navigatorStack')}>
                        <Text style={{color: 'white'}}>IDENTIFICARSE</Text>
                    </Button>
                </Footer>

            </Container>
        );
    }
}

export default Authentication