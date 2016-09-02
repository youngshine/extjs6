Ext.define('DemoApp.model.book.Book', {
    extend: 'Ext.data.Model',
    fields:[
        { name:'id', type: 'int' },
        { name:'booknum', type: 'string' },
        { name:'bookname', type: 'string' },
        { name:'author', type: 'string' },
        { name:'type', type: 'string' },
        { name:'numstock', type: 'string' }
    ]
});