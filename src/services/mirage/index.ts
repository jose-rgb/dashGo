import { createServer, Model } from "miragejs";

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