import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import styles from './Styles/BrewStyle'
import Modal from "react-native-modal";
import ResponsiveImage from 'react-native-responsive-image'
import BeerActions from '../Redux/Reducer/BeerRedux'
import ApplicationStyle from '../Metrics/Styles'
import { Colors } from '../Metrics/index'

const fixtureData = require('../Fixtures/Beer.json')

class Brew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brewList: [],
            isModalVisible: false,
            image: '',
            description: '',
            isLoad: true
        }
    }
    componentDidMount() {
        this.props.getBeer()
    }

    componentWillReceiveProps(props) {
        if (props.beerList) {
            this.setState({
                brewList: props.beerList,
                isLoad: false
            })
        }
    }

    onPressModal(item) {
        console.log('item', item)
        this.setState({
            isModalVisible: true,
            image: item.image_url,
            description: item.description
        })
    }
    render() {
        const yummyBeer = this.state.brewList
        return (
            <View style={ApplicationStyle.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backlogo}>
                        <Text style={{ fontSize: 28, color: '#F8E0D4' }}>{'←'}</Text>
                    </TouchableOpacity>
                    <View style={styles.headerDiv}>
                        <Text style={{ fontSize: 16, color: '#F8E0D4' }}>Checkout different types of beer below!</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    {!this.state.isLoad ? this.renderList(yummyBeer) : <ActivityIndicator size={'large'} color={Colors.cream} />}
                </View>
                {this.renderModal()}
            </View>
        );
    }

    renderList(yummyBeer) {
        return (
            <FlatList
                data={yummyBeer}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={styles.cardDiv}>
                        <TouchableOpacity onPress={this.onPressModal.bind(this, item)} style={styles.card}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#B98D76' }}>{item.name}</Text>
                            <Text style={{ fontSize: 16, color: '#C27C57' }}>{item.tagline}</Text>
                            <Text style={{ fontSize: 15, color: '#F8E0D4' }}>First brewed on : {item.first_brewed}</Text>
                            <Text style={{ fontSize: 15, color: '#F8E0D4' }}>Best food pairing : {item.food_pairing[0]}</Text>
                            <Text style={{ fontSize: 15, color: '#F8E0D4' }}>Yeast : {item.ingredients.yeast}</Text>
                            <Text style={{ fontSize: 15, color: '#F8E0D4' }}>ph : {item.ph}</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        )
    }

    renderModal() {
        return (
            <Modal
                isVisible={this.state.isModalVisible}
                onBackdropPress={() => (this.setState({ isModalVisible: false }))}
            >
                <View style={styles.modal}>
                    <View style={styles.modaldiv}>
                        <ResponsiveImage
                            source={{ uri: this.state.image }}
                            initWidth="100"
                            initHeight="400" />
                        <View style={{ width: '70%', paddingRight: 10 }}>
                            <Text numberOfLines={10}>{this.state.description}</Text>
                        </View>
                    </View>
                </View>

            </Modal>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        beerList: state.beer.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBeer: () => dispatch(BeerActions.requestBeer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brew)