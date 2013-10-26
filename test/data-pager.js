var Pager = require('../index'),
    assert = require('assert'),
    _ = require('lodash');

suite('data-pager', function(){
    test('Constructor with defaults', function(){
        _.times(999, function(){
            var total = _.random(0, 999), perpage = _.random(1,total), current = 1;

            var pager = new Pager( total,perpage,current);

            assert.equal( pager.total, total, 'total: value was set in constructor');
            assert.equal( pager.perpage, perpage, 'perpage: value was set in constructor');
            assert.equal( pager.last, parseInt(total/perpage)+1 );

            for ( var i = 0; i < pager.last; i++ ) {
                var page = i + 1,
                    first = ( i * perpage ),
                    last = Math.min( pager.total, page * perpage ) - 1,
                    entries = ( total - page * perpage ) >= 0 ? perpage : total % perpage;

                pager.page = page;

                assert.equal( pager.page, page );
                assert.equal( pager.firstEntry, first );
                assert.equal( pager.lastEntry, last );
                assert.equal( pager.previous, i || null );
                assert.equal( pager.next, page < pager.last ? page + 1 : null );
                assert.equal( pager.skip, i * perpage );
                assert.equal( pager.entriesOnPage, entries );
            }
        });
    });

    
});