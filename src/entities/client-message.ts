import { Message, User } from './';

export class ClientMessage extends Message {
    constructor(from: User, content: string) {
        super(from, content);
    }
}