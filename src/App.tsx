import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
  business,
  calendarSharp,
  chatbubblesSharp,
  hammer,
  notifications,
} from 'ionicons/icons'
import Login from './pages/Login'
import Notifications from './pages/Notifications'
import Reserve from './pages/Reserve'
import Meetingroom from './pages/MeetingRoom'
import FaultReport from './pages/FaultReport'
import PropertyInfo from './pages/PropertyInfo'

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/notifications'>
            <Notifications />
          </Route>
          <Route exact path='/reserve'>
            <Reserve />
          </Route>
          <Route exact path='/meetingroom'>
            <Meetingroom />
          </Route>
          <Route exact path='/faultreport'>
            <FaultReport />
          </Route>
          <Route path='/propertyinfo'>
            <PropertyInfo />
          </Route>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot='bottom' id='tabBar'>
          <IonTabButton
            tab='notifications'
            href='/notifications'
            className='tab-bar-btn'
          >
            <IonIcon icon={notifications} />
            <IonLabel className='tab-bar-title'>Notifications</IonLabel>
          </IonTabButton>
          <IonTabButton tab='reserve' href='/reserve' className='tab-bar-btn'>
            <IonIcon icon={calendarSharp} />
            <IonLabel className='tab-bar-title'>Reserve</IonLabel>
          </IonTabButton>
          <IonTabButton
            tab='meetingroom'
            href='/meetingroom'
            className='tab-bar-btn'
          >
            <IonIcon icon={chatbubblesSharp} />
            <IonLabel className='tab-bar-title'>Meeting Room</IonLabel>
          </IonTabButton>
          <IonTabButton
            tab='faultreport'
            href='/faultreport'
            className='tab-bar-btn'
          >
            <IonIcon icon={hammer} />
            <IonLabel className='tab-bar-title'>Fault Report</IonLabel>
          </IonTabButton>
          <IonTabButton
            tab='propertyinfo'
            href='/propertyinfo'
            className='tab-bar-btn'
          >
            <IonIcon icon={business} />
            <IonLabel className='tab-bar-title'>Property Info</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
