import React, { Component } from 'react'
import axios from 'axios'

import Card from '../../components/UI/Card/Card'

class Cards extends Component {

    state={
        cards:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const cards = response.data.slice( 0, 12 );
                const updatedCards = cards.map( post => {
                    return {
                        ...cards    ,
                        author: 'Max'
                    }
                } )
                this.setState( { cards: updatedCards } );
                console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }
    render(){
        const cards = this.state.cards.map(
             card => {
                 return <Card />
             }
        )
        return(
            <div 
              style={{
                borderRadius: '50px',
                display: "flex",
                flexFlow: 'row wrap',
                justifyContent: 'center',
                width: '100%',
                margin: '0px 0px 0px 20px ',
                padding : '20px'
            }}>
                {cards}
            </div>
        )
    }

}

export default Cards