const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLObjectType
} = require('graphql');
//Imports

//Root Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTask: {
      args: {
        name: { type: GraphQLString },
        openedBy: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        isOpen: { type: GraphQLBoolean }
      },
      resolve(parent, args) {}
    },
    openTask: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {}
    },
    closeTask: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {}
    },
    changeTaskStatus: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLString }
      },
      resolve(parent, args) {}
    },
    openIssue: {
      args: {
        name: { type: GraphQLString },
        taskId: { type: GraphQLID },
        description: { type: GraphQLString },
        isOpen: { type: GraphQLBoolean }
      },
      resolve(parent, args) {}
    },
    closeIssue: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {}
    },
    clearAllTasks: { resolve(parent, args) {} }
  }
});

//Task Query
const TaskQuery = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    openedBy: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    isOpen: { type: GraphQLBoolean },
    issues: { type: new GraphQLList(IssueQuery), resolve(parent, args) {} }
  })
});

//Issue Query
const IssueQuery = new GraphQLObjectType({
  name: 'Issue',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    taskId: { type: GraphQLID },
    description: { type: GraphQLString },
    isOpen: { type: GraphQLBoolean },
    task: { type: TaskQuery, resolve(parent, args) {} }
  })
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tasks: {
      type: new GraphQLList(TaskQuery),
      resolve(parent, args) {}
    },
    task: {
      type: TaskQuery,
      args: { Id: new GraphQLNonNull(GraphQLID) },
      resolve(parent, args) {}
    },
    issues: {
      type: new GraphQLList(IssueQuery),
      resolve(parent, args) {}
    },
    issue: {
      type: IssueQuery,
      args: { id: new GraphQLNonNull(GraphQLID) },
      resolve(parent, args) {}
    }
  }
});

//Exports
module.exports = new GraphQLSchema({ query: RootQuery });
