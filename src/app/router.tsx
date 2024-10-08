import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <div>Hello to template!</div>,
		},
	])
	return <RouterProvider router={router} />
}

export default Router
