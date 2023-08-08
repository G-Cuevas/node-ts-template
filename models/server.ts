import express, { Application } from 'express';
import userRoutes from '../routes/users-routes';


export class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '1324';

        // Start methods
        this.middlewares();
        this.routes();

    }


    middlewares() {

        // CORS
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') );
    }


    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });

    }

}