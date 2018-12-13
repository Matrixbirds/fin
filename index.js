(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('events'), require('socket.io')) :
    typeof define === 'function' && define.amd ? define(['events', 'socket.io'], factory) :
    (global.bundle = global.bundle || {}, global.bundle.min = global.bundle.min || {}, global.bundle.min.js = factory(global.EventEmitter,global.io));
}(this, (function (EventEmitter,io) { 'use strict';

    EventEmitter = EventEmitter && EventEmitter.hasOwnProperty('default') ? EventEmitter['default'] : EventEmitter;
    io = io && io.hasOwnProperty('default') ? io['default'] : io;

    class Fin extends EventEmitter {
        constructor(url) {
            super();
            this._url = url;
            process.nextTick(() => {
                try {
                    this._socket = this._socket || io(this._url);
                    this.emit('connect', this._socket);
                } catch (err) {
                    this.emit('connect-error', err);
                }
            });
        }

        socket () {
            return this._socket;
        }

        createActor(obj) {
        }
    }

    return Fin;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInNyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8nO1xuXG5jbGFzcyBGaW4gZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb2NrZXQgPSB0aGlzLl9zb2NrZXQgfHwgaW8odGhpcy5fdXJsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QnLCB0aGlzLl9zb2NrZXQpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QtZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzb2NrZXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc29ja2V0O1xuICAgIH1cblxuICAgIGNyZWF0ZUFjdG9yKG9iaikge1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmluO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUdBLE1BQU0sR0FBRyxTQUFTLFlBQVksQ0FBQztJQUMvQixJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUU7SUFDckIsUUFBUSxLQUFLLEVBQUUsQ0FBQztJQUNoQixRQUFRLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLFFBQVEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNO0lBQy9CLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDbEQsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzFCLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxhQUFhO0lBQ2IsU0FBUyxDQUFDLENBQUM7SUFDWCxLQUFLOztJQUVMLElBQUksTUFBTSxDQUFDLEdBQUc7SUFDZCxRQUFRLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM1QixLQUFLOztJQUVMLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUNyQixLQUFLO0lBQ0wsQ0FBQzs7Ozs7Ozs7In0=
