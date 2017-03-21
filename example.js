"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var TableExample_vue_1 = require("./TableExample.vue");
new vue_1.default({
    el: '#vue-tables-options',
    render: function (h) { return h(TableExample_vue_1.default, {
        props: { propMessage: 'World' }
    }); }
});
//# sourceMappingURL=example.js.map