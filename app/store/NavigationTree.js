Ext.define('DemoApp.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [
            {
                text:   'Dashboard',
                view:   'dashboard.Dashboard',
                leaf:   true,
                iconCls: 'right-icon new-icon x-fa fa-desktop',
                routeId: 'dashboard'
            },
            {
                text:   'Books',
                view:   'book.Book',
                iconCls: 'right-icon hot-icon x-fa fa-send ',
                leaf:   true,
                routeId: 'book'

            },
            {
                text: 'Pages',
                expanded: false,
                selectable: false,
                iconCls: 'x-fa fa-leanpub',
                routeId : 'pages-parent',
                id:       'pages-parent',
                children: [
                    {
                        text: 'Blank Page',
                        view: 'pages.BlankPage',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'pages.blank'
                    },

                    {
                        text: '404 Error',
                        view: 'pages.Error404Window',
                        leaf: true,
                        iconCls: 'x-fa fa-exclamation-triangle',
                        routeId:'pages.404'
                    },
                    {
                        text: '500 Error',
                        view: 'pages.Error500Window',
                        leaf: true,
                        iconCls: 'x-fa fa-times-circle',
                        routeId:'pages.500'
                    },
                    {
                        text: 'Lock Screen',
                        view: 'authentication.LockScreen',
                        leaf: true,
                        iconCls: 'x-fa fa-lock',
                        routeId:'authentication.lockscreen'
                    },

                    {
                        text: 'Login',
                        view: 'authentication.Login',
                        leaf: true,
                        iconCls: 'x-fa fa-check',
                        routeId:'authentication.login'
                    },
                    {
                        text: 'Register',
                        view: 'authentication.Register',
                        leaf: true,
                        iconCls: 'x-fa fa-pencil-square-o',
                        routeId:'authentication.register'
                    },
                    {
                        text: 'Password Reset',
                        view: 'authentication.PasswordReset',
                        leaf: true,
                        iconCls: 'x-fa fa-lightbulb-o',
                        routeId:'authentication.passwordreset'
                    }
                ]
            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
