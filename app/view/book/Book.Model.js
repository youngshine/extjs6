Ext.define('DemoApp.view.book.BookModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.book',

    stores: {
        book: {
            type : 'bookData'
        }
    },

    data: {
        title: '图书管理列表'
    }
})