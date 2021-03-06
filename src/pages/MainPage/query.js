import { gql } from "@apollo/client";

export const ONLOAD_QUERY = gql`
  query Query($filter: String, $latitude: Float, $longitude: Float, $page: Int, $limit: Int, $area: String, $year: String, $season: String) {
    myArea(lat: $latitude, lng: $longitude) {
      name
    }
    posts(filter: $filter, page: $page, limit: $limit, area: $area, lat: $latitude, lng: $longitude, year: $year, season: $season) {
      docs {
        _id
        author {
          _id
          imageUrl
          username
          email
        }
        content
        postImageUrl
        isAnonymous
        area
        year
        season
      }
      nextPage
      hasNextPage
    }
    loginUser {
      _id
      username
      imageUrl
      friends {
        _id
        username
        imageUrl
      }
    }
  }
`;
