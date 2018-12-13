import EventEmitter from 'events';
import io from 'socket.io';

class Fin extends EventEmitter {
    constructor(url) {
        super();
        this._url = url;
        process.nextTick(() => {
            try {
                this._socket = this._socket || io(this._url);
                this.emit('connect', this._socket)
            } catch (err) {
                this.emit('connect-error', err);
            }
        });
    }

    socket () {
        return this._socket;
    }
}

export default Fin;
