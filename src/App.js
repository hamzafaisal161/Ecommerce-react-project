import './App.css'
import * as myConstants from './constants'
import {
  Products,
  Mynavbar,
  HomeBody,
  ProductShow,
  UserProducts,
  NotFound
} from './components/'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

function App () {
  return (
    <Router>
      <div>
        <div>
          <Mynavbar />
        </div>
        <div>
          <Switch>
            <Route exact path={myConstants.HOME_PATH}>
              <HomeBody />
            </Route>
            <Route path={myConstants.PRODUCTS_PATH}>
              <Products />
            </Route>
            <Route path={myConstants.PRODUCTS_SHOW_PATH}>
              <ProductShow />
            </Route>
            <Route path={myConstants.USER_PRODUCTS_PATH}>
              <UserProducts />
            </Route>
            <Route path={myConstants.NOT_FOUND_PATH}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
