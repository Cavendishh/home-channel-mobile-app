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
import { business, calendarSharp, chatbubblesSharp, hammer, key, notifications } from 'ionicons/icons'
import Tab0 from './pages/Tab0'
import Tab1 from './pages/Tab1'
import Reserve from './pages/Reserve'
import Tab3 from './pages/Tab3'
import Tab4 from './pages/Tab4'
import Tab5 from './pages/Tab5'

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
        <Route exact path="/tab0">
            <Tab0 />
          </Route>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/reserve">
            <Reserve />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/tab5">
            <Tab5 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab0" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab0" href="/tab0">
            <IonIcon icon={key} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={notifications} />
            <IonLabel>Notifications</IonLabel>
          </IonTabButton>
          <IonTabButton tab="reserve" href="/reserve">
            <IonIcon icon={calendarSharp} />
            <IonLabel>Reserve</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={chatbubblesSharp} />
            <IonLabel>Meeting Room</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={hammer} />
            <IonLabel>Fault Report</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={business} />
            <IonLabel>Property Info</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
