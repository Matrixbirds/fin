import EventEmitter from 'events';

class Fin extends EventEmitter {
    constructor(socket) {
        super();
        this._socket = socket;
    }

    socket () {
        return this._socket;
    }
}

export default Fin;
