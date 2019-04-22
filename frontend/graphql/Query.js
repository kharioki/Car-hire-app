import gql from 'graphql-tag';
import { perPage } from '../config';

const ALL_CARS_QUERY = gql`
  query ALL_CARS_QUERY($skip: Int = 0, $first: Int = ${perPage}){
      cars(first: $first, skip: $skip, orderBy: createdAt_DESC){
        id
        make
        model
        year
        mileage
        type
        capacity
        chassisNumber
        numberPlate
        transmission
        engine
        imageURL
        hasFrontAirbags
        hasBackAirbags
        hasRadio
        trunkAvailable
        hasPassengerEntertainment
        isVerified
      }
  }
`;

export { ALL_CARS_QUERY };
