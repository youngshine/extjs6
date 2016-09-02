Ext.define('DemoApp.store.book.Book', {
    extend: 'Ext.data.Store',

    alias: 'store.bookData',

    model: 'DemoApp.model.book.Book',

    autoLoad: true,

    pageSize : 10,
    remoteSort : false,
    remoteFilter : true,

    proxy: {
        type : 'ajax',
        url : 'api/book_ajax.php',
        reader : { // 这里的reader为数据存储组织的地方，下面的配置是为json格式的数据，例如：[{"total":50,"rows":[{"a":"3","b":"4"}]}]
            type : 'json', // 返回数据类型为json格式
            rootProperty : 'rows', // 数据
            totalProperty : 'total' // 数据总条数
        }
    },

    sorters: {
        // 排序字段。
        property : 'id',
        // 排序类型，默认为 ASC
        direction : 'ASC'
    }
});

