/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var requiredVersion = '1.1.0';

module.exports = {
    requiredVersion: requiredVersion,

    styleUrlPrefix: 'mapbox://styles/mapbox/',
    styleUrlSuffix: 'v9',

    styleValuesMapbox: ['basic', 'streets', 'outdoors', 'light', 'dark', 'satellite', 'satellite-streets'],
    styleValueOSM: 'open-street-map',
    styleValueDflt: 'basic',

    styleOSM: {
        id: 'osm',
        version: 8,
        sources: {
            'plotly-osm-tiles': {
                type: 'raster',
                tiles: [
                    'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png'
                ],
                tileSize: 256
            }
        },
        layers: [{
            id: 'plotly-osm-tiles',
            type: 'raster',
            source: 'plotly-osm-tiles',
            minzoom: 0,
            maxzoom: 22
        }]
    },

    controlContainerClassName: 'mapboxgl-control-container',

    wrongVersionErrorMsg: [
        'Your custom plotly.js bundle is not using the correct mapbox-gl version',
        'Please install mapbox-gl@' + requiredVersion + '.'
    ].join('\n'),

    noAccessTokenErrorMsg: [
        'Missing Mapbox access token.',
        'Mapbox trace type require a Mapbox access token to be registered.',
        'For example:',
        '  Plotly.plot(gd, data, layout, { mapboxAccessToken: \'my-access-token\' });',
        'More info here: https://www.mapbox.com/help/define-access-token/'
    ].join('\n'),

    multipleTokensErrorMsg: [
        'Set multiple mapbox access token across different mapbox subplot,',
        'using first token found as mapbox-gl does not allow multiple' +
        'access tokens on the same page.'
    ].join('\n'),

    mapOnErrorMsg: 'Mapbox error.',

    // a subset of node_modules/mapbox-gl/dist/mapbox-gl.css
    styleRules: {
        map: 'overflow:hidden;position:relative;',
        'missing-css': 'display:none;',
        'canary': 'background-color:salmon;'
    }
};
