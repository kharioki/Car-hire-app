import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Modal from 'react-awesome-modal';

import { ALL_CARS_QUERY } from '../graphql/Query';
import { perPage } from '../config';

import Car from './Car';
import SingleCar from './SingleCar';

import getModalStyle from '../lib/utils';

const Center = styled.div`
  text-align: center;
`;

const CarsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  /* max-width: ${props => props.theme.maxWidth}; */
  max-width: 900px;
  margin: 0 auto;
`;

const ModalStyles = styled.div`
  position: absolute;
  width: 60vw;
  height: 90vh;
  background: white;
  box-shadow: ${props => props.theme.bs};
  padding: 20px;
  outline: 'none';
`;

class Cars extends Component {
  state = {
    open: false,
    _car: {}
  };

  showModal = _car => {
    this.setState(
      {
        _car
      },
      () => {
        this.setState({
          open: true
        });
      }
    );
  };

  hideModal = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Center>
          <Query
            query={ALL_CARS_QUERY}
            // fetchPolicy="cache-and-network"
            variables={{
              skip: this.props.page * perPage - perPage
            }}
          >
            {({ data, loading, error }) => {
              if (loading) return <p>Loading ...</p>;
              if (error) return <p>Error: {error.message}</p>;
              return (
                <CarsList className="carslist">
                  {data.cars.map(car => (
                    <Car key={car.id} car={car} onClick={this.showModal} />
                  ))}
                </CarsList>
              );
            }}
          </Query>
        </Center>
        <Modal
          visible={open}
          width="50%"
          height="80%"
          effect="fadeInUp"
          onClickAway={this.hideModal}
        >
          {this.state._car && <SingleCar car={this.state._car} />}
        </Modal>
      </>
    );
  }
}

export default Cars;
