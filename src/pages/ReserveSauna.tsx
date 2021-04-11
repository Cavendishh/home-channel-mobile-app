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
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/react'
import { arrowBackOutline, arrowForwardOutline, calendar } from 'ionicons/icons'
import Button from '../components/Button'

const Tab21: React.FC = () => {
  const [date, setDate] = useState('')
  const [howFarFromToday, setHowFarFromToday] = useState(1)
  const [showLaundry, setShowLaundry] = useState(true)
  const [showWasher, setShowWasher] = useState(true)

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

  const testfnc = () => console.log('It works!')

  const makeReservation = (e: any) =>{
    e.preventDefault()

    if (e.target.textContent === 'RESERVED') {
      e.target.textContent = 'VACANT'
      e.target.color = 'secondary'
    } else {
      e.target.textContent = 'RESERVED'
      e.target.color = 'danger'
    }
  }
  
  const showView = (e: any) => {
    const show = e.target.textContent
    console.log(e.target.textContent)
    if (show === 'laundry') {
      setShowLaundry(true)
    }
    if (show === 'sauna') {
      setShowLaundry(false)      
    }
    
  }

  const showAppliance = () => {
    console.log('Appliance');
    
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
              <IonButton color='secondary' onClick={showView} href='/reservewasher'>laundry</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color='danger' onClick={showView} href='/reservesauna'>sauna</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText>Your Reservations</IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText>Wed 17/03/2021 @ 21-22 - Sauna B</IonText>
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
            <IonCol className='div1'>Time</IonCol>
            <IonCol className='div2'>Sauna A</IonCol>
            <IonCol className='div1'>Sauna B</IonCol>
          </IonRow>

          <IonRow>
            <IonCol>18.00</IonCol>
            <IonCol><IonButton color='light' onClick={makeReservation} disabled>RENOVATION</IonButton></IonCol>
            <IonCol><IonButton color='secondary' onClick={makeReservation}>VACANT</IonButton></IonCol>
          </IonRow>

          <IonRow>
            <IonCol>19.00</IonCol>
            <IonCol><IonButton color='light' onClick={makeReservation} disabled>RENOVATION</IonButton></IonCol>
            <IonCol><IonButton color='secondary' onClick={makeReservation}>VACANT</IonButton></IonCol>
          </IonRow>

          <IonRow>
            <IonCol>20.00</IonCol>
            <IonCol><IonButton color='light' onClick={makeReservation} disabled>RENOVATION</IonButton></IonCol>
            <IonCol><IonButton color='secondary' onClick={makeReservation}>VACANT</IonButton></IonCol>
          </IonRow>

          <IonRow>
            <IonCol>21.00</IonCol>
            <IonCol><IonButton color='light' onClick={makeReservation} disabled>RENOVATION</IonButton></IonCol>
            <IonCol><IonButton color='danger' onClick={makeReservation}>RESERVED</IonButton></IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
      
    </IonPage>
  )
}

export default Tab21
