export enum Route {
    Home = '/',
    Login = '/login',
    Register = '/register',
    List = '/list',
    Admin = '/admin-page',
}


export class RouteMethods {
    public static withoutLeadingSlash(route: Route) {
        return route.substr(1);
    }
}
