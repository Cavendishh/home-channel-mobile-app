import {
  IonCardContent,
  IonCard,
  IonText,
  IonGrid,
  IonIcon,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { callOutline } from 'ionicons/icons'
import './PropertyInfo.css'
import 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const PropertyInfo: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Property Info</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardTitle>
              <p>Property Info</p>
            </IonCardTitle>
            <IonCardContent>
              <p> Fleminginkatu 21</p>
              <p>Floors: 7</p>
              <p>Apartments: 256</p>
              <p>Sauna: B (7th floor)</p>
              <p>Laundry: B (1st Floors)</p>

              <p>Property maintenance service</p>
              <p>ABC Ltd (9.00 - 16.00)</p>
              <p>+358 98764532</p>
              <p>www.service-abc fi</p>
              <p> Door opening:</p>
              <p>+358 987654321</p>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardTitle>
              <p>Emergency contact details</p>
            </IonCardTitle>
            <IonCardContent>
              <IonText>
                <h2>24/7</h2>{' '}
              </IonText>
              <IonText color='secondary'>
                {' '}
                <p>
                  <IonIcon class='icon' icon={callOutline}></IonIcon> +358
                  987654321
                </p>
              </IonText>
            </IonCardContent>
          </IonCard>

          <Link to='/login' className='logout'>
            <IonButton id='logout' color='secondary' expand='block'>
              Logout
            </IonButton>
          </Link>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default PropertyInfo
