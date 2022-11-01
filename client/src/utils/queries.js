import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query Query {
    users {
      _id
      username
      email
      comments {
        commentAuthor
        commentText
      }
    }
  }`;

  export const QUERY_PLANET = gql`
  query Query($name: String) {
    planet(name: $name) {
      _id
      name
      mass
      gravity
      density
      avgTemp
      bodyType
      moons
      sideralOrbit
      sideralRotation
      distanceFromSun
      yearLength
    }
  }`;

  export const QUERY_PLANETS = gql`
  query Query {
    planets {
      _id
      name
      mass
      gravity
      density
      avgTemp
      bodyType
      moons
      sideralOrbit
      sideralRotation
      distanceFromSun
      yearLength
    }
  }`;