Ext.define('DemoApp.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.dashboard',


    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],

    stores: {
        'dashboard.QGAreaStore': {
            autoLoad: true,
            model: 'DemoApp.model.DataXY',
            proxy: {
                type: 'ajax',
                url: '~api/qg/area',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }

        },
        'dashboard.QGBarStore': {
            autoLoad: true,
            model: 'DemoApp.model.DataXY',
            proxy: {
                type: 'ajax',
                url: '~api/qg/bar',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        'dashboard.QGLineStore': {
            autoLoad: true,
            model: 'DemoApp.model.DataXY',
            proxy: {
                type: 'ajax',
                url: '~api/qg/line',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        'dashboard.QGPieStore': {
            autoLoad: true,
            model: 'DemoApp.model.DataXY',
            proxy: {
                type: 'ajax',
                url: '~api/qg/pie',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }

        }
    }
});
