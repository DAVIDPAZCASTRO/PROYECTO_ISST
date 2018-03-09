import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title } from 'native-base'

class SignInUp extends Component {
    render () {

        return (
            <Container>
                <Body>
                <View style={{flex:1}}>
                    <View style={{flex:1, paddingTop:20}}>
                        <Text>ICONO</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Button  onPress={() => this.props.navigation.navigate('authenticationShow')}>
                            <Text>Identificarse</Text>
                        </Button>

                    </View>
                    <View style={{flex:1}}>
                        <Button onPress={() => this.props.navigation.navigate('registrationShow')}>
                            <Text>Registrarse</Text>
                        </Button>
                    </View>
                </View>
                </Body>

            </Container>
        )
    }
}
export default SignInUp