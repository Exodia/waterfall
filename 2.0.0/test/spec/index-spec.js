KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('waterfall', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/waterfall/2.0.0/']});