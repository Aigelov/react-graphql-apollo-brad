// import React, { Component, Fragment } from 'react';
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
// import User from './User';
// import Launch from './Launch';
//
// const USERS_QUERY = gql `
//   query UsersQuery {
//     users {
//       id
//       name
//       username
//       email
//       phone
//       website
//     }
//   }
// `;
//
// export class Users extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h1 className='display-4 my-3'>Posts</h1>
//         <Query query={USERS_QUERY}>
//           {
//             ({ loading, error, data }) => {
//               if (loading) return <h4>Loading...</h4>;
//               if (error) console.error(error);
//
//               return <Fragment>
//                 {
//                   data.users.map(user => (
//                     <Launch key={user.id} user={user} />
//                   ))
//                 }
//               </Fragment>;
//             }
//           }
//         </Query>
//       </Fragment>
//     )
//   }
// }
//
// export default Users;