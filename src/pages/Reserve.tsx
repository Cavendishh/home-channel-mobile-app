import React, { useState, useEffect } from 'react'
import './Reserve.css'
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
  IonIcon
} from '@ionic/react'
import { arrowBackOutline, arrowForwardOutline, calendar } from 'ionicons/icons'

const Reserve: React.FC = () => {
  const today = new Date()
  const [date, setDate] = useState('')
  const [howFarFromToday, setHowFarFromToday] = useState(0)
  const [showLaundry, setShowLaundry] = useState(true)
  const [showWasher, setShowWasher] = useState(true)
  
  const [userReservedWashers, setUserReservedWashers] = useState([
    'Sun 14/03/2021 @ 10:00 - Washer 1',
    'Sun 14/03/2021 @ 10:00 - Washer 2',
    'Sun 14/03/2021 @ 10:00 - Washer 3'
  ])
  const [userReservedDryers, setUserReservedDryers] = useState([
    'Sun 14/03/2021 @ 11:00 - Dryer 1',
    'Sun 14/03/2021 @ 11:00 - Dryer 2'
  ])
  const [userReservedSaunas, setUserReservedSaunas] = useState([
    'Sun 14/03/2021 @ 20:00 - Sauna 1'
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
    {
      time: '12:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '13:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '14:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '15:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '16:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '17:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '18:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '19:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '20:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '21:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    }
  ])
  const [reservedDryers, setReservedDryers] = useState([
    {
      time: '08:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '09:00',
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
    {
      time: '12:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '13:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '14:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '15:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '16:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '17:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '18:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '19:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '20:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    },
    {
      time: '21:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT'
    }
  ])
  const [reservedSaunas, setReservedSaunas] = useState([
    {
    time: '16:00',
    sauna1: 'CLOSED',
    sauna2: 'VACANT'
    },{
      time: '17:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT'
    },
    {
      time: '18:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT'
    },
    {
      time: '19:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT'
    },
    {
      time: '20:00',
      sauna1: 'CLOSED',
      sauna2: 'RESERVED'
    },
    {
      time: '21:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT'
    },
  ])

  const increaseDate = () => setHowFarFromToday(howFarFromToday + 1)
  const decreaseDate = () => setHowFarFromToday(howFarFromToday - 1)
  const setNewDate = () => {
    const newDay = new Date(today.getTime() + (howFarFromToday * 24 * 60 * 60 * 1000))
    setDate(`${newDay.getDate()}/${newDay.getMonth() + 1}/${newDay.getFullYear()}`)
  }
  useEffect(() => setNewDate(), [howFarFromToday])



  const makeReservation = e =>{
    e.preventDefault()

    
    const isReserved = userReservedWashers.map((r, i) => {
      if (r.includes(e.target.id)) {
        const copy = [...userReservedWashers]
        copy.splice(i, 1)
        setUserReservedWashers(copy)
        return true
      }
      return false
    })

    if (!isReserved.includes(true)) {
      let copy = userReservedWashers
      setUserReservedWashers([...copy, `${getToday() + ' @ ' + e.target.id}`])
    }
    
    if (e.target.textContent === 'RESERVED') {
      e.target.textContent = 'VACANT'      
      e.target.color = 'secondary'
    } else {
      e.target.textContent = 'RESERVED'
      e.target.color = 'danger'
    }
  }

  const getToday = () => {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var weekday = days[today.getDay()]

    const todayIs = `${weekday + ' ' + today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
    return todayIs
  }
  


  const showAppliance = e => {
    if (e.target.textContent === 'Washer') {
      setShowWasher(true)
    }
    if (e.target.textContent === 'Dryer') {
      setShowWasher(false)
    }    
  }

  useEffect(() => {
    const todayIs = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
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
              <IonButton color={showLaundry ? 'danger' : 'secondary'} onClick={() => setShowLaundry(true)}>Laundry</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color={showLaundry ? 'secondary' : 'danger'} onClick={() => setShowLaundry(false)}>Sauna</IonButton>
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol>
              <IonText>Your {showLaundry ? ((showLaundry && showWasher) ? 'Washer' : 'Dryer') : 'Sauna' } Reservations</IonText>
            </IonCol>
            </IonRow>


            {!showLaundry ?
              (
                <>
                  {userReservedSaunas.map(reservation => {
                    return (
                      <IonRow key={reservation}>
                        <IonCol>
                          {reservation}
                        </IonCol>
                      </IonRow>
                      )       
                  })}
                </>
              ) : (showWasher ?
                <>
                  {userReservedWashers.map(reservation => {
                    return (
                      <IonRow key={reservation}>
                        <IonCol>
                          {reservation}
                        </IonCol>
                      </IonRow>
                      )       
                    }
                  )}
                </>
                :
                <>
                {userReservedDryers.map(reservation => {
                  return (
                    <IonRow key={reservation}>
                      <IonCol>
                        {reservation}
                      </IonCol>
                    </IonRow>
                    )       
                  }
                )}
                </>
              )
            }
         
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

          {!showLaundry ? (<>
            <IonRow>
              <IonCol>Time</IonCol>
              <IonCol>Sauna 1</IonCol>
              <IonCol>Sauna 2</IonCol>
            </IonRow>
            {reservedSaunas.map(r => {
              return (
                <IonRow key={r.time}>
                  <IonCol>{r.time}</IonCol>
                  <IonCol><IonButton color={r.sauna1 === 'CLOSED' ? 'success' : 'secondary'} disabled>{r.sauna1 === 'CLOSED' ? 'CLOSED' : 'VACANT'}</IonButton></IonCol>
                  <IonCol><IonButton color={r.sauna2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.sauna2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                </IonRow>
              )
            })}
          </>)
          :
          ((showLaundry && showWasher) ? (
            <>
              <IonRow>
                <IonCol>
                  <IonButton color='danger' onClick={showAppliance}>Washer</IonButton>
                  <IonButton color='secondary' onClick={showAppliance}>Dryer</IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Time</IonCol>
                <IonCol>Washer 1</IonCol>
                <IonCol>Washer 2</IonCol>
                <IonCol>Washer 3</IonCol>
              </IonRow>
              {reservedWashers.map(r => {
                return (
                  <IonRow key={r.time}>
                    <IonCol>{r.time}</IonCol>
                    <IonCol><IonButton id={r.time + ' - Washer 1'} color={r.washer1 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer1 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                    <IonCol><IonButton id={r.time + ' - Washer 2'} color={r.washer3 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                    <IonCol><IonButton id={r.time + ' - Washer 3'} color={r.washer2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  </IonRow>
                )
              })}
            </>
          )
          :
          (
            <>
              <IonRow>
                <IonCol>
                  <IonButton color='secondary' onClick={showAppliance}>Washer</IonButton>
                  <IonButton color='danger' onClick={showAppliance}>Dryer</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>Time</IonCol>
                <IonCol>Dryer 1</IonCol>
                <IonCol>Dryer 2</IonCol>
                <IonCol>Dryer 3</IonCol>
              </IonRow>
            {reservedDryers.map(r => {
              return (
                <IonRow key={r.time}>
                  <IonCol>{r.time}</IonCol>
                  <IonCol><IonButton color={r.dryer1 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer1 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  <IonCol><IonButton color={r.dryer2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  <IonCol><IonButton color={r.dryer3 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                </IonRow>
              )
            })}
          </>
          )
        )}
        </IonGrid>
      </IonContent>
      
    </IonPage>
  )
}

export default Reserve
