/**
 * @fileoverview
 * @author
 * @module waterfall
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Waterfall
     * @constructor
     * @extends Base
     */
    function Waterfall(comConfig) {
        var self = this;
        //调用父类构造函数
        Waterfall.superclass.constructor.call(self, comConfig);
    }
    S.extend(Waterfall, Base, /** @lends Waterfall.prototype*/{

    }, {ATTRS : /** @lends Waterfall*/{

    }});
    return Waterfall;
}, {requires:['node', 'base']});



