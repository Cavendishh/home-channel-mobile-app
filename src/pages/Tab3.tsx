import { IonContent, IonHeader, IonPage, IonIcon, IonCardHeader, IonCardTitle, IonTitle, IonToolbar, IonPopover, IonButton, IonCard, IonCardContent,  IonTextarea, IonItem, IonLabel, IonItemDivider} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import { personOutline } from 'ionicons/icons';
import './Tab3.css';

  
const Tab3: React.FC = () => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meeting Room</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meeting Room</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonPopover
        cssClass='my-custom-class'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <IonItemDivider>Your message</IonItemDivider>          
          <IonItem>
            <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonButton>Send</IonButton>
      </IonPopover>
      <IonButton onClick={
        (e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e })
        }}
      >
        Add new
      </IonButton>
      <IonCard>
        <IonIcon icon={personOutline}></IonIcon>
        <IonCardHeader>
            <IonCardTitle>Mike Simons</IonCardTitle>
          </IonCardHeader>
        <IonCardContent>
            A table for sale
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonItem className="ion-activated">
        <IonIcon icon={personOutline}></IonIcon>
        <IonCardHeader>
            <IonCardTitle>Mike Simons</IonCardTitle>
          </IonCardHeader>
        <IonCardContent>
            A table for sale
        </IonCardContent>
            
        </IonItem>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
