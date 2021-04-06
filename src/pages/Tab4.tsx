import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTextarea, IonTitle, IonToolbar, IonToggle, IonGrid, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import './Tab4.css';
import { attachOutline, cameraOutline, micOutline } from 'ionicons/icons';

const Tab4: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [boolean, setBoolean] = useState(true);
  const [text, setText] = useState<string>();


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

{/*--   Modal - how to change visibility on "write message" and "record message"? Toggles are not defined??  --*/}

        <IonModal isOpen={showModal}>
        <IonHeader>
            <IonToolbar>
              <IonTitle>New fault report</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow>
                <IonLabel position="stacked">
                  Title
                </IonLabel>
                <IonInput value={text} placeholder="Eg. Broken stove" onIonChange={e => setText(e.detail.value!)}>
                </IonInput>
            </IonRow>
            <IonRow>
            <IonButton onClick={() => setBoolean(true)}>Write message</IonButton>
            <IonButton onClick={() => setBoolean(false)}>Record message</IonButton>
            </IonRow>
            <IonRow>
              {boolean && <IonTextarea placeholder="Leave your message here">
              </IonTextarea>}
            </IonRow>
            <IonRow>
             {!boolean && <IonIcon icon={micOutline} size="large"></IonIcon>}
            </IonRow>
            <IonRow>
              Add image
              <IonIcon icon={attachOutline} size="large"></IonIcon>
              <IonIcon icon={cameraOutline} size="large"></IonIcon>
            </IonRow>
            <IonRow>
              Enter with master key?
              <IonToggle></IonToggle>
            </IonRow>
            <IonRow>
              Call before entering?
              <IonToggle></IonToggle>
            </IonRow>
            <IonRow>
              <IonButton onClick={() => setShowModal(false)}>
              Send
              </IonButton>
            </IonRow>
          </IonGrid>         
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
