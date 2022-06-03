import { createServer, Factory, Model, Response } from "miragejs";
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
            server.createList('user',200)
        },

        //quais rotas o server vai ter
        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users', function (schema, request) {
                //po padrao mostrar page 1, 10 registros por page
                const { page = 1 , per_page = 10} =  request.queryParams

                //quantos registros existem no model users
                const total = schema.all('user').length

                //page 2, registros do 10 a 20
                const  pageStart = (Number(page) - 1) * Number(per_page);  // page = 3, 3 -1 = 2, 2 * 10 = 20
                const pageEnd = pageStart + Number(per_page)                // 20 + 10 = 30, do registro 20 á 30

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

                return new Response(
                    200,
                    {'x-total-count': String(total)},
                    { users }
                )
            })

            this.post('/users')

            this.namespace = '';
            this.passthrough()
        }
    })

    return server;
}