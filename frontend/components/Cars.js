import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import { ALL_CARS_QUERY } from '../graphql/Query';
import { perPage } from '../config';
import Car from './Car';

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

class Cars extends Component {
  render() {
    return (
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
                  <Car key={car.id} car={car} />
                ))}
              </CarsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Cars;
