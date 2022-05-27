import { createServer, Factory, Model } from "miragejs";
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
};


export function makeServer() {

    const server = createServer({
        //tipos de dados da app
        models: {
            user: Model.extend<Partial<User>>({})
        },


        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10)
                },
            })
        },

        seeds(server) {
            //nome do factorie, e quantidade a ser criada
            server.createList('user',10)
        },

        //quais rotas o server vai ter
        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users')
            this.post('/users')

            this.namespace = '';
            this.passthrough()
        }
    })

    return server;
}