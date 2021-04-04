import React, { useState, useEffect } from 'react'
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
  IonCol,
  IonIcon,

} from '@ionic/react'
import { arrowBackOutline, arrowForwardOutline, calendar } from 'ionicons/icons'

const testfnc = () => console.log('Test fnc is working!')

const Tab2: React.FC = () => {
  const [date, setDate] = useState('')
  const [howFarFromToday, setHowFarFromToday] = useState(1)

  const today = new Date()

  const increaseDate = () => {
    setHowFarFromToday(howFarFromToday + 1)
    setNewDate()
  }

  const decreaseDate = () => {
    setHowFarFromToday(howFarFromToday - 1)
    setNewDate()
  }

  const setNewDate = () => {
    const newDay = new Date(today.getTime() + (howFarFromToday * 24 * 60 * 60 * 1000))
    setDate(`${newDay.getDate()}/${newDay.getMonth()}/${newDay.getFullYear()}`)
  } 

  useEffect(() => {
    const todayIs = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`
    setDate(todayIs)
  }, [])

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
            <IonButton color='secondary' onClick={decreaseDate}>-</IonButton>
            <IonIcon icon={arrowBackOutline} />
            <IonText>{date}</IonText>
            <IonIcon icon={calendar} />
            <IonIcon icon={arrowForwardOutline} />
            <IonButton color='secondary' onClick={increaseDate}>+</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonButton color='secondary' onClick={testfnc}>Washer</IonButton>
            <IonButton color='secondary' onClick={testfnc}>Dryer</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className='div1'>Time</IonCol>
            <IonCol className='div2'>Washer 1</IonCol>
            <IonCol className='div1'>Washer 2</IonCol>
            <IonCol className='div2'>Washer 3</IonCol>
          </IonRow>


        </IonGrid>
      </IonContent>
      
    </IonPage>
  )
}

export default Tab2
