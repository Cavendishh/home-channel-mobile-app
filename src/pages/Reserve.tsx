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
  const getToday = () => {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var weekday = days[today.getDay()]

    const todayIs = `${weekday + ' ' + today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
    return todayIs
  }

  const [date, setDate] = useState('')
  const [howFarFromToday, setHowFarFromToday] = useState(0)
  const [showLaundry, setShowLaundry] = useState(true)
  const [showWasher, setShowWasher] = useState(true)
  
  
  const [userReservedWashers, setUserReservedWashers] = useState([
    `${getToday()} @ 10:00 - Washer 1`,
    `${getToday()} @ 10:00 - Washer 2`,
    `${getToday()} @ 10:00 - Washer 3`,
  ])
  const [userReservedDryers, setUserReservedDryers] = useState([
    `${getToday()} @ 11:00 - Dryer 1`,
    `${getToday()} @ 11:00 - Dryer 2`,
  ])
  const [userReservedSaunas, setUserReservedSaunas] = useState([
    `${getToday()} @ 20:00 - Sauna 2`,
  ])
  const [reservedWashers, setReservedWashers] = useState([
    {
      time: '08:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT'
    },
    {
      time: '09:00',
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
    
    const reserveTime = e.target.id.substring(0, 5)
    const reserveAppliance = e.target.id.substring(8)
    const reservationType = reserveAppliance.split(' ')[0]
    console.log(reservationType);
    
    if (reservationType === 'Washer') {
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
        const copy = userReservedWashers
        setUserReservedWashers([...copy, `${getToday() + ' @ ' + e.target.id}`])
      }
  
      const copy = reservedWashers.map(r => {
        if (r.time === reserveTime) {
          const obj = {
            time: r.time,
            washer1: r.washer1,
            washer2: r.washer2,
            washer3: r.washer3
          }        
          if (reserveAppliance === 'Washer 1') obj.washer1 = (obj.washer1 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          if (reserveAppliance === 'Washer 2') obj.washer2 = (obj.washer2 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          if (reserveAppliance === 'Washer 3') obj.washer3 = (obj.washer3 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          return obj
        }
        return r
      })
      setReservedWashers(copy)
    }

    if (reservationType === 'Dryer') {
      const isReserved = userReservedDryers.map((r, i) => {
        if (r.includes(e.target.id)) {
          const copy = [...userReservedDryers]
          copy.splice(i, 1)
          setUserReservedDryers(copy)
          return true
        }
        return false
      })
  
      if (!isReserved.includes(true)) {
        const copy = userReservedDryers
        setUserReservedDryers([...copy, `${getToday() + ' @ ' + e.target.id}`])
      }
  
      const copy = reservedDryers.map(r => {
        if (r.time === reserveTime) {
          const obj = {
            time: r.time,
            dryer1: r.dryer1,
            dryer2: r.dryer2,
            dryer3: r.dryer3
          }        
          if (reserveAppliance === 'Dryer 1') obj.dryer1 = (obj.dryer1 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          if (reserveAppliance === 'Dryer 2') obj.dryer2 = (obj.dryer2 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          if (reserveAppliance === 'Dryer 3') obj.dryer3 = (obj.dryer3 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          return obj
        }
        return r
      })
      setReservedDryers(copy)
    }

    if (reservationType === 'Sauna') {
      const isReserved = userReservedSaunas.map((r, i) => {
        if (r.includes(e.target.id)) {
          const copy = [...userReservedSaunas]
          copy.splice(i, 1)
          setUserReservedSaunas(copy)
          return true
        }
        return false
      })
  
      if (!isReserved.includes(true)) {
        const copy = userReservedSaunas
        setUserReservedSaunas([...copy, `${getToday() + ' @ ' + e.target.id}`])
      }
  
      const copy = reservedSaunas.map(r => {
        if (r.time === reserveTime) {
          const obj = {
            time: r.time,
            sauna1: r.sauna1,
            sauna2: r.sauna2,
          }        
          if (reserveAppliance === 'Sauna 1') obj.sauna1 = (obj.sauna1 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          if (reserveAppliance === 'Sauna 2') obj.sauna2 = (obj.sauna2 === 'VACANT') ? 'RESERVED' : 'VACANT' 
          return obj
        }
        return r
      })
      setReservedSaunas(copy)
    }
  }
  
  const showAppliance = e => {
    if (e.target.textContent === 'Washer') setShowWasher(true)
    if (e.target.textContent === 'Dryer') setShowWasher(false)    
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
            <IonIcon icon={arrowBackOutline} onClick={decreaseDate} />
            <IonText>{date}</IonText>
            <IonIcon icon={calendar} />
            <IonIcon icon={arrowForwardOutline} onClick={increaseDate}/>
            </IonCol>
          </IonRow>

          {!showLaundry ?
            <>
              <IonRow>
                <IonCol>Time</IonCol>
                <IonCol>Sauna 1</IonCol>
                <IonCol>Sauna 2</IonCol>
              </IonRow>
              {reservedSaunas.map(r => {
                return (
                  <IonRow key={r.time}>
                    <IonCol>{r.time}</IonCol>
                    <IonCol><IonButton  id={r.time + ' - Sauna 1'}color={r.sauna1 === 'CLOSED' ? 'success' : 'secondary'} disabled>{r.sauna1 === 'CLOSED' ? 'CLOSED' : 'VACANT'}</IonButton></IonCol>
                    <IonCol><IonButton  id={r.time + ' - Sauna 2'}color={r.sauna2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.sauna2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                  </IonRow>
                )
              })}
            </>
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
                    <IonCol><IonButton id={r.time + ' - Washer 2'} color={r.washer2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                    <IonCol><IonButton id={r.time + ' - Washer 3'} color={r.washer3 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.washer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
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
                    <IonCol><IonButton id={r.time + ' - Dryer 1'} color={r.dryer1 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer1 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                    <IonCol><IonButton id={r.time + ' - Dryer 2'} color={r.dryer2 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
                    <IonCol><IonButton id={r.time + ' - Dryer 3'} color={r.dryer3 === 'RESERVED' ? 'danger' : 'secondary'} onClick={makeReservation}>{r.dryer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}</IonButton></IonCol>
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
