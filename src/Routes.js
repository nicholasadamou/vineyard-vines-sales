import React, { lazy, Suspense } from 'react'

import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

import PageLoader from './components/PageLoader'

const MensPage = lazy(() => import('./routes/Mens'))
const WomensPage = lazy(() => import('./routes/Womens'))
const WhaleOfASalePage = lazy(() => import('./routes/WhaleOfASale'))

const Routes = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/sale-mens" />} />
				<Route exact path="/sale-mens" render={(props) => {
						return <MensPage {...props} />
					}}
				/>
				<Route exact path="/sale-womens" render={(props) => {
						return <WomensPage {...props} />
					}}
				/>
				<Route exact path="/whale-of-a-sale" render={(props) => {
						return <WhaleOfASalePage {...props} />
					}}
				/>
			</Switch>
		</Suspense>
	)
}

export default Routes
