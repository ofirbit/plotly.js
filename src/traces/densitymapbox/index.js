/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

module.exports = {
    attributes: require('./attributes'),
    supplyDefaults: require('./defaults'),
    colorbar: require('../heatmap/colorbar'),
    calc: require('./calc'),
    plot: require('./plot'),
    hoverPoints: require('./hover'),
    eventData: require('./event_data'),

    moduleType: 'trace',
    name: 'densitymapbox',
    basePlotModule: require('../../plots/mapbox'),
    categories: ['mapbox', 'gl'],
    meta: {
        hr_name: 'density_mapbox',
        description: [
            'Draws a bivariate kernel density estimation with a Gaussian kernel',
            'from `lon` and `lat` coordinates and optional `z` values using a colorscale.'
        ].join(' ')
    }
};
