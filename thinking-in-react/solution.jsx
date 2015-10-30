import React from 'react';


export const FilterableProductTable = React.createClass({

    render ()
    {
        "use strict";

        return (
            <div></div>
        );
    }

});


export const SearchBar = React.createClass({

    render ()
    {
        "use strict";

        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }

});

