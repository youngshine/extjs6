Ext.define('DemoApp.view.book.Book', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.ProgressBarPager',
        'Ext.selection.CheckboxModel'
    ],

    controller: 'book',
    viewModel: {
        type: 'book'
    },

    xtype: 'progress-bar-pager',
    frame: true,

    bind: {
        title: '{title}',
        store: '{book}'
    },

    selModel: {
        selType: 'checkboxmodel'
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    fieldLabel: 'Start Date',
                    xtype : 'datefield',
                    name: 'startdt',
                    itemId: 'startdt',
                    vtype: 'daterange',
                    endDateField: 'enddt' // id of the end date field
                }, {
                    fieldLabel: 'End Date',
                    xtype : 'datefield',
                    name: 'enddt',
                    itemId: 'enddt',
                    vtype: 'daterange',
                    startDateField: 'startdt' // id of the start date field
                },'-',
                {
                    text: 'Add',
                    iconCls: 'fa fa-plus'
                },
                {
                    text: 'Edit',
                    iconCls: 'fa fa-pencil'
                },
                {
                    text: 'Delete',
                    iconCls: 'fa fa-trash'
                }
            ]
        }
    ],

    columns : [{
        text : 'ID',
        width : 65,
        dataIndex : 'id'
    },{
        text : '书名',
        flex : 1,
        dataIndex : 'bookname'
    },{
        text : '基本信息',
        columns : [{
            text : '书号',
            align : 'center',
            dataIndex : 'booknum'
        },{
            text : '作者',
            align : 'center',
            dataIndex : 'author'
        },{
            text : '类别',
            align : 'center',
            dataIndex : 'type'
        },{
            text : '有无货',
            align : 'center',
            dataIndex : 'numstock'
        }]
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 10,
        bind: {
            store: '{book}'
        },
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    }





})
