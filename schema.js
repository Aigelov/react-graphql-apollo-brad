const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
const axios = require('axios');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  })
});

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    website: { type: GraphQLString }
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      async resolve(parent, args) {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await axios.get(url);
        return response.data;
      }
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLInt }
      },
      async resolve(parent, args) {
        const url = `https://jsonplaceholder.typicode.com/posts/${args.id}`;
        const response = await axios.get(url);
        return response.data;
      }
    },
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await axios.get(url);
        return response.data;
      }
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt }
      },
      async resolve(parent, args) {
        const url = `https://jsonplaceholder.typicode.com/users/${args.id}`;
        const response = await axios.get(url);
        return response.data;
      }
    },
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const url = 'https://api.spacexdata.com/v3/launches';
        const response = await axios.get(url);
        return response.data;
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      async resolve(parent, args) {
        const url = `https://api.spacexdata.com/v3/launches/${args.flight_number}`;
        const response = await axios.get(url);
        return response.data;
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      async resolve(parent, args) {
        const url = 'https://api.spacexdata.com/v3/rockets';
        const response = await axios.get(url);
        return response.data;
      }
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLInt }
      },
      async resolve(parent, args) {
        const url = `https://api.spacexdata.com/v3/rockets/${args.rocket_id}`;
        const response = await axios.get(url);
        return response.data;
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
