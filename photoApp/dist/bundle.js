!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Item=class{constructor(t,e){this._id=t,this._title=e}get id(){return this._id}get title(){return this._title}set title(t){this._title=t}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.Landscape=0]="Landscape",t[t.Portrait=1]="Portrait",t[t.Square=2]="Square",t[t.Panorama=3]="Panorama"}(e.PhotoOrientation||(e.PhotoOrientation={}))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(3),i=r(4),o=r(5),u=r(1),s=new n.User(1,"Ruben","Morodo",!0),a=new i.Album(1,"Cosas que Contarte"),c=new o.Picture(1,"Gran Vía",u.PhotoOrientation.Landscape);s.addAlbum(a),a.addPicture(c),console.log("user",s),s.removeAlbum(a),console.log("Sin album en el array",s)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.User=class{constructor(t,e,r,n){this.id=t,this.username=e,this.firtsName=r,this.isPro=n,this.album=[]}addAlbum(t){this.album.push(t)}removeAlbum(t){const e=this.album.findIndex(e=>e.id===t.id);let r;return e>=0&&(r=this.album[e],this.album.splice(e,1)),r}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(0);class i extends n.Item{constructor(t,e){super(t,e),this.pictures=[]}addPicture(t){this.pictures.push(t)}}e.Album=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(0),i=r(1);class o extends n.Item{constructor(t,e,r){super(t,e),this._orientation=r}get orientation(){return this._orientation}set orientation(t){this.orientation=t}toString(){return`[id: ${this._id}, \n            title: ${this._title}, \n            orientation: ${this._orientation}]`}}e.Picture=o,o.photoOrientation=i.PhotoOrientation}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLW9yaWVudGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGJ1bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGljdHVyZS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkl0ZW0iLCJpZCIsInRpdGxlIiwidGhpcyIsIl9pZCIsIl90aXRsZSIsIlBob3RvT3JpZW50YXRpb24iLCJ1c2VyXzEiLCJhbGJ1bV8xIiwicGljdHVyZV8xIiwicGhvdG9fb3JpZW50YXRpb25fMSIsInVzZXIiLCJVc2VyIiwiYWxidW0iLCJBbGJ1bSIsInBpY3R1cmUiLCJQaWN0dXJlIiwiTGFuZHNjYXBlIiwiYWRkQWxidW0iLCJhZGRQaWN0dXJlIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsYnVtIiwidXNlcm5hbWUiLCJmaXJ0c05hbWUiLCJpc1BybyIsInB1c2giLCJpbmRleCIsImZpbmRJbmRleCIsImEiLCJkZWxldGVBbGJ1bSIsInNwbGljZSIsIml0ZW1fMSIsInN1cGVyIiwicGlj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QUFNK0MsRUFBUyxFQUFRLEdBQ2pCdEIsRUFBc0IsRUFBUSxHQUNwQyxNQUFNTSxVQUFnQmdCLEVBQU9oQyxLQUN6QixZQUFZQyxFQUFJQyxFQUFPaUMsR0FDbkJGLE1BQU1oQyxFQUFJQyxHQUNWQyxLQUFLaUMsYUFBZUQsRUFHeEIsa0JBQ0ksT0FBT2hDLEtBQUtpQyxhQUVoQixnQkFBZ0JELEdBQ1poQyxLQUFLZ0MsWUFBY0EsRUFHdkIsV0FDSSxNQUFPLFFBQVFoQyxLQUFLQyw2QkFDUEQsS0FBS0Usc0NBQ0NGLEtBQUtpQyxpQkFHaEN0RSxFQUFRa0QsUUFBVUEsRUFDbEJBLEVBQVFxQixpQkFBbUIzQixFQUFvQkoiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBTdXBlcmNsYXNzXG5jbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgLy8gZ2V0dGVycyAmIHNldHRlcnNcbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgLy8gc2V0IGlkKGlkOiBudW1iZXIpIHtcbiAgICAvLyAgIHRoaXMuX2lkID0gaWQ7XG4gICAgLy8gfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB9XG59XG5leHBvcnRzLkl0ZW0gPSBJdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUGhvdG9PcmllbnRhdGlvbjtcbihmdW5jdGlvbiAoUGhvdG9PcmllbnRhdGlvbikge1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIkxhbmRzY2FwZVwiXSA9IDBdID0gXCJMYW5kc2NhcGVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQb3J0cmFpdFwiXSA9IDFdID0gXCJQb3J0cmFpdFwiO1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlNxdWFyZVwiXSA9IDJdID0gXCJTcXVhcmVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQYW5vcmFtYVwiXSA9IDNdID0gXCJQYW5vcmFtYVwiO1xufSkoUGhvdG9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiB8fCAoZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gaW1wb3J0IHtVc2VyLCBBbGJ1bSwgUGljdHVyZSwgUGhvdG9PcmllbnRhdGlvbn0gZnJvbSAnLi9waG90by1hcHAnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmNvbnN0IGFsYnVtXzEgPSByZXF1aXJlKFwiLi9hbGJ1bVwiKTtcbmNvbnN0IHBpY3R1cmVfMSA9IHJlcXVpcmUoXCIuL3BpY3R1cmVcIik7XG5jb25zdCBwaG90b19vcmllbnRhdGlvbl8xID0gcmVxdWlyZShcIi4vcGhvdG8tb3JpZW50YXRpb25cIik7XG5jb25zdCB1c2VyID0gbmV3IHVzZXJfMS5Vc2VyKDEsICdSdWJlbicsICdNb3JvZG8nLCB0cnVlKTtcbmNvbnN0IGFsYnVtID0gbmV3IGFsYnVtXzEuQWxidW0oMSwgJ0Nvc2FzIHF1ZSBDb250YXJ0ZScpO1xuY29uc3QgcGljdHVyZSA9IG5ldyBwaWN0dXJlXzEuUGljdHVyZSgxLCAnR3JhbiBWw61hJywgcGhvdG9fb3JpZW50YXRpb25fMS5QaG90b09yaWVudGF0aW9uLkxhbmRzY2FwZSk7XG4vLyBDcmVxYW1vcyByZWxhY2lvbmVzXG51c2VyLmFkZEFsYnVtKGFsYnVtKTtcbmFsYnVtLmFkZFBpY3R1cmUocGljdHVyZSk7XG5jb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuLy8gQm9ycmFtb3MgQWxidW1cbnVzZXIucmVtb3ZlQWxidW0oYWxidW0pO1xuY29uc29sZS5sb2coJ1NpbiBhbGJ1bSBlbiBlbCBhcnJheScsIHVzZXIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcm5hbWUsIGZpcnRzTmFtZSwgaXNQcm8pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMuZmlydHNOYW1lID0gZmlydHNOYW1lO1xuICAgICAgICB0aGlzLmlzUHJvID0gaXNQcm87XG4gICAgICAgIHRoaXMuYWxidW0gPSBbXTtcbiAgICB9XG4gICAgYWRkQWxidW0oYWxidW0pIHtcbiAgICAgICAgdGhpcy5hbGJ1bS5wdXNoKGFsYnVtKTtcbiAgICB9XG4gICAgcmVtb3ZlQWxidW0oYWxidW0pIHtcbiAgICAgICAgLy8gQnVzY2FyIEFsYnVtXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGJ1bS5maW5kSW5kZXgoKGEpID0+IGEuaWQgPT09IGFsYnVtLmlkKTtcbiAgICAgICAgbGV0IGRlbGV0ZUFsYnVtO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZGVsZXRlQWxidW0gPSB0aGlzLmFsYnVtW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuYWxidW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZXRlQWxidW07XG4gICAgfVxufVxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcbmNsYXNzIEFsYnVtIGV4dGVuZHMgaXRlbV8xLkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICBzdXBlcihpZCwgdGl0bGUpO1xuICAgICAgICB0aGlzLnBpY3R1cmVzID0gW107XG4gICAgfVxuICAgIGFkZFBpY3R1cmUocGljdHVyZSkge1xuICAgICAgICB0aGlzLnBpY3R1cmVzLnB1c2gocGljdHVyZSk7XG4gICAgfVxufVxuZXhwb3J0cy5BbGJ1bSA9IEFsYnVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xuY29uc3QgcGhvdG9fb3JpZW50YXRpb25fMSA9IHJlcXVpcmUoXCIuL3Bob3RvLW9yaWVudGF0aW9uXCIpO1xuY2xhc3MgUGljdHVyZSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgfVxuICAgIC8vIGdldHRlcnMgJiBzZXR0ZXJzXG4gICAgZ2V0IG9yaWVudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XG4gICAgfVxuICAgIHNldCBvcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgfVxuICAgIC8vIENvbXBvcnRhbWllbnRvIGRlIGxhIGNsYXNlXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgW2lkOiAke3RoaXMuX2lkfSwgXG4gICAgICAgICAgICB0aXRsZTogJHt0aGlzLl90aXRsZX0sIFxuICAgICAgICAgICAgb3JpZW50YXRpb246ICR7dGhpcy5fb3JpZW50YXRpb259XWA7XG4gICAgfVxufVxuZXhwb3J0cy5QaWN0dXJlID0gUGljdHVyZTtcblBpY3R1cmUucGhvdG9PcmllbnRhdGlvbiA9IHBob3RvX29yaWVudGF0aW9uXzEuUGhvdG9PcmllbnRhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=