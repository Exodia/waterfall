/**
 * @fileoverview 请修改组件描述
 * @author 踏风<tafeng.dxx@taobao.com>
 * @module waterfall
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 请修改组件描述
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



