import { RouteObject } from 'react-router-dom';
import LoginPage from '../pages/login/login';
import DefaultLayout from '../layout/DefaultLayout';
import Page404 from '../pages/result/Page404';
import { UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'rc-menu';

import { lazy } from 'react';
// import Music from '../pages/Music/Music';

const Music = lazy(() => import('../pages/Music/Music'));

interface IRoute {
	path: string;
	title: string;
	icon?: any;
	children?: IRoute[];
	component?: any;
}
export const navRoutes: IRoute[] = [
	{
		path: '/music',
		title: 'Music',
		icon: <UserOutlined />,
		component: <Music />,
	},
];
const getRoutes = function (rawRoutes: IRoute[]): RouteObject[] {
	const routes: RouteObject[] = [];
	for (let i = 0; i < rawRoutes.length; i++) {
		const rawRoute = rawRoutes[i];
		if (!rawRoute.children) {
			routes.push({
				path: rawRoute.path,
				element: rawRoute.component,
			});
		} else {
			routes.push(...getRoutes(rawRoute.children));
		}
	}
	return routes;
};
const navRouters = getRoutes(navRoutes);
const browserRouters: RouteObject[] = [
	// {
	// 	path: '/login',
	// 	element: <LoginPage />,
	// 	errorElement: 'Page not found',
	// },
	{
		path: '/',
		element: <DefaultLayout />,
		errorElement: <Page404 />,
		children: navRouters,
	},
];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}
type MenuItem = Required<MenuProps>['items'][number];
function GetMenu(routes: IRoute[] | undefined): MenuItem[] {
	if (!routes) {
		return [];
	}
	const items: MenuItem[] = [];
	routes.map((route) => {
		if (!route.children) {
			items.push(getItem(route.title, route.path, route.icon));
		} else {
			const children = GetMenu(route.children);
			items.push(getItem(route.title, route.path, route.icon, children));
		}
	});
	return items;
}
export type { MenuItem };
export { GetMenu };
export default browserRouters;
