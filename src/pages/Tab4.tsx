import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import './Tab4.css';

const Tab4: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

   /*--   Tähän pitäisi tulla ne consteina eri toiminnot, kuten addItem. Tee uuden ilmoituksen lisääminen Modalin avulla --*/
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fault Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonButton onClick={() => setShowModal(true)}>
            Add new
      </IonButton>

        <IonModal isOpen={showModal}>
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>New fault report</IonTitle>
              </IonToolbar>
            </IonHeader>
            <p>This is the modal content.</p>
            <IonButton onClick={() => setShowModal(false)}>
              Send
            </IonButton>
          </IonPage>
      </IonModal>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Leaking waterpipe
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Tässä tulee olemaan kortteina tehdyt ilmoitukset.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Jotain
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Jotain sisältöä tässäkin kortissa
          </IonCardContent>
        </IonCard> 
        <div>
        <h3>Emergency contact details</h3>
        <p>In case of emergency for ex. severely leaking water pipe or dangerous elecrical fault.</p>
        <p>24/7</p>
        <p>+358 123 456 789</p>
      </div>
      </IonContent>

    </IonPage>
  );
};

export default Tab4;
