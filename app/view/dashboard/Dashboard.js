Ext.define('DemoApp.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'Ext.chart.PolarChart'
    ],

    id: 'dashboard',

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },

    layout: 'responsivecolumn',

   /* listeners: {
        hide: 'onHideView'
    },
*/
    items: [
        {
            xtype: 'dashboardhddusagepanel',
            responsiveCls: 'big-25 small-50'
        },
        {
            xtype: 'dashboardearningspanel',
            responsiveCls: 'big-25 small-50'
        },
        {
            xtype: 'dashboardsalespanel',
            responsiveCls: 'big-25 small-50'
        },
        {
            xtype: 'dashboardtopmoviepanel',
            responsiveCls: 'big-25 small-50'
        }
    ]
});
