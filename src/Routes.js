import React, { lazy, Suspense } from 'react'

import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

import PageLoader from './components/PageLoader'

const MensPage = lazy(() => import('./routes/Mens'))
const WomansPage = lazy(() => import('./routes/Womans'))
const WhaleOfASalePage = lazy(() => import('./routes/Mens'))

const Routes = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/mens" />} />
				<Route exact path="/mens" render={(props) => {
						return <MensPage {...props} />
					}}
				/>
				<Route exact path="/womans" render={(props) => {
						return <WomansPage {...props} />
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
