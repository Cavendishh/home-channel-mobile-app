import { IonCardContent, IonCard, IonText, IonGrid, IonIcon, IonItem, IonLabel, IonCardTitle, IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { callOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab5.css';
import 'react-router-dom';
import { Link } from 'react-router-dom';

const Tab5: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
        <IonText color="primary">
              <h2>
                <IonTitle class="title">
                  <img alt="building" src="../assets/home.jpg" />
                  HOME CHANNEL
                </IonTitle>
              </h2>
            </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Property Info</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardTitle><p>Property Info</p></IonCardTitle>
          <IonCardContent >
           <p> Fleminginkatu 21</p>
            <p>Floors: 7</p>
            <p>Apartments: 256</p>
            <p>Sauna: B (7th floor)</p>
            <p>Laundry: B (1st Floors)</p>

            <p>Property maintenance service</p>
            <p>ABC Ltd (9.00 - 16.00)</p>
            <p>+358 98764532</p>
           <p><a href="Google.com">www.service-abc fi</a></p> 
           <p> Door opening:</p>
           <p>+358 987654321</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardTitle><p>Emergency contact details</p></IonCardTitle>
          <IonCardContent >
          <IonText color="primary"><h2>24/7</h2>
            <p><IonIcon class="icon" icon={callOutline}></IonIcon> +358 987654321</p>
            </IonText>
          </IonCardContent>
        </IonCard>
       
        <Link to='/tab0' className="logout"><IonButton color="primary" expand="block">Logout</IonButton></Link>
          </IonGrid>       
      </IonContent>
      
    </IonPage>
  );
};

export default Tab5;
