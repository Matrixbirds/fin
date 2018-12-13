(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('events')) :
    typeof define === 'function' && define.amd ? define(['events'], factory) :
    (global.bundle = global.bundle || {}, global.bundle.min = global.bundle.min || {}, global.bundle.min.js = factory(global.EventEmitter));
}(this, (function (EventEmitter) { 'use strict';

    EventEmitter = EventEmitter && EventEmitter.hasOwnProperty('default') ? EventEmitter['default'] : EventEmitter;

    class Fin extends EventEmitter {
        constructor(socket) {
            super();
            this._socket = socket;
        }

        socket () {
            return this._socket;
        }
    }

    return Fin;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcblxuY2xhc3MgRmluIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc29ja2V0ID0gc29ja2V0O1xuICAgIH1cblxuICAgIHNvY2tldCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb2NrZXQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaW47XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFFQSxNQUFNLEdBQUcsU0FBUyxZQUFZLENBQUM7SUFDL0IsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO0lBQ3hCLFFBQVEsS0FBSyxFQUFFLENBQUM7SUFDaEIsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUM5QixLQUFLOztJQUVMLElBQUksTUFBTSxDQUFDLEdBQUc7SUFDZCxRQUFRLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM1QixLQUFLO0lBQ0wsQ0FBQzs7Ozs7Ozs7In0=
