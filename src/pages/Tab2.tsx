import React from 'react'
import './Tab2.css'
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonText,
  IonRow,
  IonCol
} from '@ionic/react'

const testfnc = () => {
  console.log('Test function working')
}

const Tab2: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Reserve</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton color='secondary'>Laundry</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color='secondary' >Sauna</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText>Your Reservations</IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText>Sun 14/03/2021 @ 10-11 - Washer 1</IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText>Sun 14/03/2021 @ 10-11 - Washer 2</IonText>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol>
            <IonButton color='secondary' onClick={testfnc}>Test</IonButton>
            </IonCol>
          </IonRow>


        </IonGrid>
      </IonContent>
      
    </IonPage>
  )
}

export default Tab2
