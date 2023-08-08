import dotenv from 'dotenv';
import { Server } from './models/server';

// Setup dotenv
dotenv.config();

const server = new Server();

server.listen();