import { Layout, Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { GetMenu, MenuItem, navRoutes } from '../router/router';

function DefaultLayout() {
	console.log('defaultlayouttsx');
	const [collapsed, setCollapsed] = useState(true);
	const [items, setItems] = useState<MenuItem[]>([]);
	useEffect(() => {
		const items = GetMenu(navRoutes);
		setItems(items);
	}, []);
	const navigate = useNavigate();
	const onClick: MenuProps['onClick'] = (e) => {
		navigate(e.keyPath[0]);
	};
	return (
		<>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<Menu
						onClick={onClick}
						theme="dark"
						defaultSelectedKeys={[location.pathname]}
						mode="inline"
						items={items}
					/>
				</Sider>
				<Outlet />
			</Layout>
		</>
	);
}

export default DefaultLayout;
