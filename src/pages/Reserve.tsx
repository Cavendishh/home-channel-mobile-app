import React, { useState, useEffect } from 'react'
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonText,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react'
import { arrowBackOutline, arrowForwardOutline, calendar } from 'ionicons/icons'
import Header from '../components/Header'
import './Reserve.css'

const Reserve: React.FC = () => {
  const today = new Date()
  const getToday = () => {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var weekday = days[today.getDay()]

    const todayIs = `${weekday + ' ' + today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`
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
      washer3: 'VACANT',
    },
    {
      time: '09:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '10:00',
      washer1: 'RESERVED',
      washer2: 'RESERVED',
      washer3: 'RESERVED',
    },
    {
      time: '11:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '12:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '13:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '14:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '15:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '16:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '17:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '18:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '19:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '20:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
    {
      time: '21:00',
      washer1: 'VACANT',
      washer2: 'VACANT',
      washer3: 'VACANT',
    },
  ])
  const [reservedDryers, setReservedDryers] = useState([
    {
      time: '08:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '09:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '10:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '11:00',
      dryer1: 'RESERVED',
      dryer2: 'RESERVED',
      dryer3: 'VACANT',
    },
    {
      time: '12:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '13:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '14:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '15:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '16:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '17:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '18:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '19:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '20:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
    {
      time: '21:00',
      dryer1: 'VACANT',
      dryer2: 'VACANT',
      dryer3: 'VACANT',
    },
  ])
  const [reservedSaunas, setReservedSaunas] = useState([
    {
      time: '16:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT',
    },
    {
      time: '17:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT',
    },
    {
      time: '18:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT',
    },
    {
      time: '19:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT',
    },
    {
      time: '20:00',
      sauna1: 'CLOSED',
      sauna2: 'RESERVED',
    },
    {
      time: '21:00',
      sauna1: 'CLOSED',
      sauna2: 'VACANT',
    },
  ])

  const increaseDate = () => setHowFarFromToday(howFarFromToday + 1)
  const decreaseDate = () => setHowFarFromToday(howFarFromToday - 1)
  const setNewDate = () => {
    const newDay = new Date(
      today.getTime() + howFarFromToday * 24 * 60 * 60 * 1000
    )
    setDate(
      `${newDay.getDate()}/${newDay.getMonth() + 1}/${newDay.getFullYear()}`
    )
  }
  useEffect(() => setNewDate(), [howFarFromToday])

  const makeReservation = (e) => {
    e.preventDefault()

    const reserveTime = e.target.id.substring(0, 5)
    const reserveAppliance = e.target.id.substring(8)
    const reservationType = reserveAppliance.split(' ')[0]

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

      const copy = reservedWashers.map((r) => {
        if (r.time === reserveTime) {
          const obj = {
            time: r.time,
            washer1: r.washer1,
            washer2: r.washer2,
            washer3: r.washer3,
          }
          if (reserveAppliance === 'Washer 1')
            obj.washer1 = obj.washer1 === 'VACANT' ? 'RESERVED' : 'VACANT'
          if (reserveAppliance === 'Washer 2')
            obj.washer2 = obj.washer2 === 'VACANT' ? 'RESERVED' : 'VACANT'
          if (reserveAppliance === 'Washer 3')
            obj.washer3 = obj.washer3 === 'VACANT' ? 'RESERVED' : 'VACANT'
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

      const copy = reservedDryers.map((r) => {
        if (r.time === reserveTime) {
          const obj = {
            time: r.time,
            dryer1: r.dryer1,
            dryer2: r.dryer2,
            dryer3: r.dryer3,
          }
          if (reserveAppliance === 'Dryer 1')
            obj.dryer1 = obj.dryer1 === 'VACANT' ? 'RESERVED' : 'VACANT'
          if (reserveAppliance === 'Dryer 2')
            obj.dryer2 = obj.dryer2 === 'VACANT' ? 'RESERVED' : 'VACANT'
          if (reserveAppliance === 'Dryer 3')
            obj.dryer3 = obj.dryer3 === 'VACANT' ? 'RESERVED' : 'VACANT'
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

      const copy = reservedSaunas.map((r) => {
        if (r.time === reserveTime) {
          const obj = {
            time: r.time,
            sauna1: r.sauna1,
            sauna2: r.sauna2,
          }
          if (reserveAppliance === 'Sauna 1')
            obj.sauna1 = obj.sauna1 === 'VACANT' ? 'RESERVED' : 'VACANT'
          if (reserveAppliance === 'Sauna 2')
            obj.sauna2 = obj.sauna2 === 'VACANT' ? 'RESERVED' : 'VACANT'
          return obj
        }
        return r
      })
      setReservedSaunas(copy)
    }
  }

  const showAppliance = (e) => {
    if (e.target.textContent === 'Washer') setShowWasher(true)
    if (e.target.textContent === 'Dryer') setShowWasher(false)
  }

  useEffect(() => {
    const todayIs = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`
    setDate(todayIs)
  }, [])

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                className='change-view-btn'
                color={showLaundry ? 'tertiary' : 'secondary'}
                expand='block'
                onClick={() => setShowLaundry(true)}
              >
                Laundry
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                className='change-view-btn'
                color={showLaundry ? 'secondary' : 'tertiary'}
                expand='block'
                onClick={() => setShowLaundry(false)}
              >
                Sauna
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className='row-margin-bottom'>
            <IonCol>
              <IonText className='text-bold'>
                Your{' '}
                {showLaundry
                  ? showLaundry && showWasher
                    ? 'Washer'
                    : 'Dryer'
                  : 'Sauna'}{' '}
                Reservations
              </IonText>
            </IonCol>
          </IonRow>

          {!showLaundry ? (
            <>
              {userReservedSaunas.map((reservation) => {
                return (
                  <IonRow key={reservation} className='row-margin-bottom-less'>
                    <IonCol>{reservation}</IonCol>
                  </IonRow>
                )
              })}
            </>
          ) : showWasher ? (
            <>
              {userReservedWashers.map((reservation) => {
                return (
                  <IonRow key={reservation} className='row-margin-bottom-less'>
                    <IonCol>{reservation}</IonCol>
                  </IonRow>
                )
              })}
            </>
          ) : (
            <>
              {userReservedDryers.map((reservation) => {
                return (
                  <IonRow key={reservation} className='row-margin-bottom-less'>
                    <IonCol>{reservation}</IonCol>
                  </IonRow>
                )
              })}
            </>
          )}

          <IonRow className='row-margin-top-bottom'>
            <IonCol size='3'>
              <IonIcon
                icon={arrowBackOutline}
                className='icon-size'
                onClick={decreaseDate}
              />
            </IonCol>
            <IonCol size='6'>
              <IonText className='date-text'>
                {date}
                <IonIcon icon={calendar} className='icon-calendar' />
              </IonText>
            </IonCol>
            <IonCol size='3'>
              <IonIcon
                icon={arrowForwardOutline}
                className='icon-size'
                onClick={increaseDate}
              />
            </IonCol>
          </IonRow>

          {!showLaundry ? (
            <>
              <IonRow className='row-margin-top'>
                <IonCol size='2' className='text-bold'>
                  Time
                </IonCol>
                <IonCol size='5' className='text-bold'>
                  Sauna 1
                </IonCol>
                <IonCol size='5' className='text-bold'>
                  Sauna 2
                </IonCol>
              </IonRow>
              {reservedSaunas.map((r) => {
                return (
                  <IonRow key={r.time}>
                    <IonCol size='2' className='text-center-point'>
                      {r.time}
                    </IonCol>
                    <IonCol size='5'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Sauna 1'}
                        color={r.sauna1 === 'CLOSED' ? 'medium' : 'secondary'}
                        disabled
                      >
                        {r.sauna1 === 'CLOSED' ? 'CLOSED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                    <IonCol size='5'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Sauna 2'}
                        color={
                          r.sauna2 === 'RESERVED' ? 'tertiary' : 'secondary'
                        }
                        onClick={makeReservation}
                      >
                        {r.sauna2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                  </IonRow>
                )
              })}
            </>
          ) : showLaundry && showWasher ? (
            <>
              <IonRow>
                <IonCol>
                  <IonButton
                    className='change-view-btn'
                    color='tertiary'
                    expand='block'
                    onClick={showAppliance}
                  >
                    Washer
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton
                    className='change-view-btn'
                    color='secondary'
                    expand='block'
                    onClick={showAppliance}
                  >
                    Dryer
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow className='row-margin-top'>
                <IonCol size='2' className='text-bold'>
                  Time
                </IonCol>
                <IonCol size='3' className='text-bold'>
                  Washer 1
                </IonCol>
                <IonCol size='3' className='text-bold'>
                  Washer 2
                </IonCol>
                <IonCol size='3' className='text-bold'>
                  Washer 3
                </IonCol>
              </IonRow>
              {reservedWashers.map((r) => {
                return (
                  <IonRow key={r.time}>
                    <IonCol size='2' className='text-center-point'>
                      {r.time}
                    </IonCol>
                    <IonCol size='3'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Washer 1'}
                        color={
                          r.washer1 === 'RESERVED' ? 'tertiary' : 'secondary'
                        }
                        onClick={makeReservation}
                      >
                        {r.washer1 === 'RESERVED' ? 'RESERVED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                    <IonCol size='3'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Washer 2'}
                        color={
                          r.washer2 === 'RESERVED' ? 'tertiary' : 'secondary'
                        }
                        onClick={makeReservation}
                      >
                        {r.washer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                    <IonCol size='3'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Washer 3'}
                        color={
                          r.washer3 === 'RESERVED' ? 'tertiary' : 'secondary'
                        }
                        onClick={makeReservation}
                      >
                        {r.washer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                  </IonRow>
                )
              })}
            </>
          ) : (
            <>
              <IonRow>
                <IonCol>
                  <IonButton
                    className='change-view-btn'
                    color='secondary'
                    expand='block'
                    onClick={showAppliance}
                  >
                    Washer
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton
                    className='change-view-btn'
                    color='tertiary'
                    expand='block'
                    onClick={showAppliance}
                  >
                    Dryer
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow className='row-margin-top'>
                <IonCol size='2' className='text-bold'>
                  Time
                </IonCol>
                <IonCol size='3' className='text-bold'>
                  Dryer 1
                </IonCol>
                <IonCol size='3' className='text-bold'>
                  Dryer 2
                </IonCol>
                <IonCol size='3' className='text-bold'>
                  Dryer 3
                </IonCol>
              </IonRow>
              {reservedDryers.map((r) => {
                return (
                  <IonRow key={r.time}>
                    <IonCol size='2' className='text-center-point'>
                      {r.time}
                    </IonCol>
                    <IonCol size='3'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Dryer 1'}
                        color={
                          r.dryer1 === 'RESERVED' ? 'tertiary' : 'secondary'
                        }
                        onClick={makeReservation}
                      >
                        {r.dryer1 === 'RESERVED' ? 'RESERVED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                    <IonCol size='3'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Dryer 2'}
                        color={
                          r.dryer2 === 'RESERVED' ? 'tertiary' : 'secondary'
                        }
                        onClick={makeReservation}
                      >
                        {r.dryer2 === 'RESERVED' ? 'RESERVED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                    <IonCol size='3'>
                      <IonButton
                        className='reserve-btn'
                        expand='block'
                        id={r.time + ' - Dryer 3'}
                        color={
                          r.dryer3 === 'RESERVED' ? 'tertiary' : 'secondary'
                        }
                        onClick={makeReservation}
                      >
                        {r.dryer3 === 'RESERVED' ? 'RESERVED' : 'VACANT'}
                      </IonButton>
                    </IonCol>
                  </IonRow>
                )
              })}
            </>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Reserve
