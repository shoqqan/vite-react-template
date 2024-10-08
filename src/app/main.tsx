import Router from './router'
import '@/shared/base.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>,
)
