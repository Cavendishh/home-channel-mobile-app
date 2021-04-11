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
import { render } from 'react-dom'

const Tab2: React.FC = () => {
  const today = new Date()
  const [date, setDate] = useState('')
  const [howFarFromToday, setHowFarFromToday] = useState(0)
  const [showLaundry, setShowLaundry] = useState(true)
  const [showWasher, setShowWasher] = useState(true)
  const [userReservedWashers, setUserReservedWashers] = useState([
    'Sun 14/03/2021 @ 10-11 - Washer 1',
    'Sun 14/03/2021 @ 10-11 - Washer 2',
    'Sun 14/03/2021 @ 10-11 - Washer 3'
  ])
  const [userReservedDryers, setUserReservedDryers] = useState([
    'Sun 14/03/2021 @ 11-12 - Dryer 1',
    'Sun 14/03/2021 @ 11-12 - Dryer 2'
  ])
  const [reservedWashers, setReservedWashers] = useState([
    {
      time: '8:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '9:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '10:00',
      washer1: 'RESERVED',
      washer2: 'RESERVED',
      washer3: 'RESERVED'
    },
    {
      time: '11:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
  ])
  const [reservedDryers, setReservedDryers] = useState([
    {
      time: '8:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '9:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '10:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '11:00',
      dryer1: 'RESERVED',
      dryer2: 'RESERVED',
      dryer3: 'VACANT'
    },
  ])
  
  // useEffect(() => {
  //   console.log('. . .')
  //   washerReservations.map(r => {
  //     if 
      
  //   })
  //   console.log('. . .')
  // }, [])

  const increaseDate = () => setHowFarFromToday(howFarFromToday + 1)
  const decreaseDate = () => setHowFarFromToday(howFarFromToday - 1)
  const setNewDate = () => {
    const newDay = new Date(today.getTime() + (howFarFromToday * 24 * 60 * 60 * 1000))
    setDate(`${newDay.getDate()}/${newDay.getMonth()}/${newDay.getFullYear()}`)
  }

  useEffect(() => {
    setNewDate()
  }, [howFarFromToday])


  useEffect(() => {
    console.log('. . . Button clicked . . .')
    // console.log('washers', reservedWashers)
    const obj = {
      time: '10:00',
      washer1: 'RESERVED',
      washer2: 'RESERVED',
      washer3: 'RESERVED'
    }

    let copy = [...reservedWashers]
    let edited = copy.map(timeslot => {
      if (timeslot.time === obj.time) {
        timeslot = obj
      }
      return timeslot
    })
    setReservedWashers(edited)
    console.log(reservedWashers);
    
    
    // let copy = [...reservedWashers, reservedWashers[1], {washer1: 'asd' }]
    // let test = copy[0], { washer1: 'dsa' }
    // let asd = [...reservedWashers, { washer1: 'asd' }]

    // copy = copy[1] = obj
    // const line = reservedWashers[1].washer1


    // console.log(copy);
    // console.log(asd);
    
    
    // setReservedWashers(copy)
    // console.log('washers', reservedWashers)
    // console.log('dryers', reservedDryers)
    
  }, [showWasher])

  const testfnc = () => console.log('It works!')

  const makeReservation = e =>{
    e.preventDefault()

    if (e.target.textContent === 'RESERVED') {
      e.target.textContent = 'VACANT'
      e.target.color = 'secondary'
    } else {
      e.target.textContent = 'RESERVED'
      e.target.color = 'danger'
    }
  }
  
  const showView = e => {
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
    console.log('Appliance')
    
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
              <IonButton color='danger' onClick={showView} href='/reservewasher'>laundry</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color='secondary' onClick={showView} href='/reservesauna'>sauna</IonButton>
              
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol>
              <IonText>Your Reservations</IonText>
            </IonCol>
          </IonRow>

          {/* {(showLaundry && showWasher) && (
            userReservedWashers.map(reservation => {
              return (
                <IonRow key={reservation}>
                  <IonCol>
                    <IonText>{reservation}</IonText>
                  </IonCol>
                </IonRow>
              )
            })
          )} */}
          

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
            <IonButton color='danger' onClick={showAppliance} href='reservewasher'>Washer</IonButton>
            <IonButton color='secondary' onClick={showAppliance} href='reservedryer'>Dryer</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className='div1'>Time</IonCol>
            <IonCol className='div2'>Washer 1</IonCol>
            <IonCol className='div1'>Washer 2</IonCol>
            <IonCol className='div1'>Washer 3</IonCol>
          </IonRow>

            <IonButton color={showWasher ? 'success' : 'primary'} onClick={() => setShowWasher(!showWasher) }>{showWasher ? 'Dryer' : 'Washer'}</IonButton>

          {/* {useEffect(() => {
            return (<p>asd</p>)
          })} */}
          {(showLaundry && showWasher) ? (
            reservedWashers.map(r => {
              return (
                <IonRow key={r.time}>
                  <IonCol>{r.time}</IonCol>
                  <IonCol><IonButton color={r.washer1 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer1 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  <IonCol><IonButton color={r.washer2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  <IonCol><IonButton color={r.washer3 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                </IonRow>
              )
            })
          ) : (
            reservedDryers.map(r => {
              return (
                <IonRow key={r.time}>
                  <IonCol>{r.time}</IonCol>
                  <IonCol><IonButton color={r.dryer1 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer1 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  <IonCol><IonButton color={r.dryer2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  <IonCol><IonButton color={r.dryer3 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                </IonRow>
              )
            })
          )
        }
        </IonGrid>
      </IonContent>
      
    </IonPage>
  )
}

export default Tab2
