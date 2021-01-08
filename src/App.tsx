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
import Tabs from './components/screens/teacher/Tabs'
import Auth from './components/screens/auth/Auth'
import Error from './components/Error'
import IntroSlides from './components/screens/intro/IntroSlides'

const App: React.FC = () => {
  return (
    <IonApp>
      <IonRouterOutlet>
        <Route path='/auth' component={Auth} />
        <Route path='/tabs' component={Tabs} />
        <Route exact path='/' component={IntroSlides} />
        <Route component={Error} />
        {/* <Route exact path='/' render={() =>  } /> */}
        {/* <Route exact path='/intro' component={IntroSlides} /> */}
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
