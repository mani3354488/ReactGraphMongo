import { Cat } from './models/Cat'

export const resolvers = {
    Query: {
        hello: () => "heyyyo",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({ name});
            return kitty.save();
            console.log(kitty);
            return kitty;
        }
    }
};

