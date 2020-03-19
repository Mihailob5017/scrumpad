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
const Task = require('./mongodb/TaskSchema');
const Issue = require('./mongodb/IssueSchema');

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
    issues: {
      type: new GraphQLList(IssueQuery),
      resolve(parent, args) {
        return Issue.find({ taskId: parent.id });
      }
    }
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
    task: {
      type: new GraphQLList(TaskQuery),
      resolve(parent, args) {
        return Task.find({ _id: parent.taskId });
      }
    }
  })
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tasks: {
      type: new GraphQLList(TaskQuery),
      resolve(parent, args) {
        return Task.find();
      }
    },
    task: {
      type: TaskQuery,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Task.findById(args.id);
      }
    },
    issues: {
      type: new GraphQLList(IssueQuery),
      resolve(parent, args) {
        return Issue.find();
      }
    },
    issue: {
      type: IssueQuery,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Issue.find({ id: args.id });
      }
    }
  }
});

//Root Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //Add new Task
    openTask: {
      type: TaskQuery,
      args: {
        name: { type: GraphQLString },
        openedBy: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        isOpen: { type: GraphQLBoolean }
      },
      resolve(parent, args) {
        const { name, openedBy, status, isOpen, description } = args;
        let newTask = new Task({
          name,
          description,
          openedBy,
          isOpen,
          status
        });

        return newTask.save();
      }
    },

    //Move from one column to another
    changeTaskStatus: {
      type: TaskQuery,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return Task.updateOne(
          { _id: args.id },
          {
            $set: {
              status: args.status,
              isOpen: args.status === 'closed' ? false : true
            }
          }
        );
      }
    },
    openIssue: {
      type: IssueQuery,
      args: {
        name: { type: GraphQLString },
        taskId: { type: GraphQLString },
        description: { type: GraphQLString },
        isOpen: { type: GraphQLBoolean }
      },
      resolve(parent, args) {
        const { name, description, isOpen, taskId } = args;
        const newIssue = new Issue({
          name,
          description,
          isOpen,
          taskId
        });
        return newIssue.save();
      }
    },
    closeIssue: {
      type: IssueQuery,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Issue.findOneAndUpdate(
          { _id: args.id },
          { $set: { isOpen: false } }
        );
       
      }
    }
  }
});

//Exports
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
