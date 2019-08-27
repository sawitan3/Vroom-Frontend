export enum Route {
    Home = '/',
    Login = '/login',
    Register = '/register',
    List = '/list',
    Admin = '/admin-page',
    SuperAdmin = '/super-admin'
}


export class RouteMethods {
    public static withoutLeadingSlash(route: Route) {
        return route.substr(1);
    }
}
