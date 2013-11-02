data-pager
==========
### Hommage to Data::Pager

[![Build Status](https://travis-ci.org/mvhenten/data-pager.png)](https://travis-ci.org/mvhenten/data-pager.png)

`data-pager` is a simple data pager based on [Data::Page](http://search.cpan.org/~lbrocard/DataPage2.02/lib/Data/Page.pm)
, written for the exact same reasons:

> When searching through large amounts of data, it is often the case that a result set is returned that is larger than we want to display on one page. This results in wanting to page through various pages of data. The maths behind this is unfortunately fiddly, hence this module.
>
> The main concept is that you pass in the number of total entries, the number of entries per page, and the current page number. You can then call methods to find out how many pages of information there are, and what number the first and last entries on the current page really are.
>
> For example, say we wished to page through the integers from 1 to 100 with 20 entries per page. The first page would consist of 120, the second page from 2140, the third page from 4160, the fourth page from 6180 and the fifth page from 81100. This module would help you work this out.

I'd also like to refer to that joke about _off by one errors_.

### Changelog

* 27/10/2013 initial release
* 02/11/2013 off-by-one error in "pager.last" logic

### Installation

    npm install data-pager

### Example

```javascript

    var Pager = require('data-pager'),
        assert = require('assert');

    var total = 10,
        perpage = 3,
        current = 1;

    var pager = new Pager(total, perpage, current);

    assert.equal(pager.total, total, 'total: value was set in constructor');
    assert.equal(pager.perpage, perpage, 'perpage: value was set in constructor');
    assert.equal(pager.last, 4);

    // sets the page to page 4
    pager.page = 4;

    assert.equal( pager.page, 4 );

    assert.equal( pager.page,  4);
    assert.equal( pager.first,  9);
    assert.equal( pager.last,  9);
    assert.equal( pager.entries,  1);
    assert.equal( pager.skip,  9);
    assert.equal( pager.previous,  3);
    assert.equal( pager.next,  null);
    assert.equal( pager.nextPages(),  []);
    assert.equal( pager.previousPages(),  [2, 3]);

```


Methods
=======

#### total

Sets or gets the total entries in this set

```javascript
    pager.total = 42;
    assert.equal( pager.perpage, 42 );
```

**Returns**

*Number*,  value Total entries in this set

#### perpage

Sets or gets the entries perpage

```javascript
    pager.perpage = 5;
    assert.equal( pager.perpage, 5 );
```
**Returns**

*Number*,  entries Total entries per page

#### page

Sets or gets the current page

**Returns**

*Number*,  page Current page

#### entriesOnPage

**Returns**

*Number*,  entries Number of entries on this page

#### first

**Returns**

*Number*,  first First page (always 1)

#### last

**Returns**

*Number*,  last Last page

#### previous

**Returns**

*Number*,  prev Previous page, or null if this is the first page

#### next

**Returns**

*Number*,  next Next page, or null if this is the last page

#### skip

**Returns**

*Number*,  skip Number of entries to skip from the database

#### firstEntry

**Returns**

*Number*,  entry Number of the first entry on the current page

#### lastEntry

**Returns**

*Number*,  entry Number of the last entry on the current page

#### previousPages

List n previous pages before this page

**Returns**

*Array*,  pages Array with page numbers

#### nextPages

List n previous pages after this page, excluding the last page

**Returns**

*Array*,  pages Array with page numbers
