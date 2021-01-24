import React from 'react'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
/* Components */
import { Teacher } from './components/screens/teacher'
import { Auth } from './components/screens/auth'
// import { Home } from './components/screens/landingPage'
import { Admin } from './components/screens/admin'
import Error from './components/Error'

const App: React.FC = () => {
  return (
    <IonApp>
      <IonRouterOutlet>
        <Route path='/auth' component={Auth} />
        <Route path='/admin' component={Admin} />
        <Route path='/teacher' component={Teacher} />
        <Route path='/' component={Auth} exact />
        <Route component={Error} />
      </IonRouterOutlet>
    </IonApp>
  )
}

export default App

// import { useDispatch, useSelector } from 'react-redux'
// import { intro_success } from './Redux/Intro/Actions'
// import { ReduxState } from './types/redux'
// const { Storage } = Plugins
// const IntroState = useSelector<ReduxState>(state => state.Intro.introWatched)
// const dispatch = useDispatch()
// useEffect(() => {
//   ;(async function CheckLocalStorageIntro() {
//     const ret = await Storage.get({ key: 'intro' })
//     console.log(ret)
//     if (ret) dispatch(intro_success)
//     if (!ret) return <Redirect to='/intro' />
//   })()
// }, [])
