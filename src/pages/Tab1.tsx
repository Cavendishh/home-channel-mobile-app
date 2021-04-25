import React from 'react'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonPage,
} from '@ionic/react'
import Collapsible from 'react-collapsible'
import './Tab1.css'
import {
  chevronDownCircleOutline,
  chevronUpCircleOutline,
} from 'ionicons/icons'

import Header from '../components/Header'

const Tab1: React.FC = () => {
  const Trigger1 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronDownCircleOutline} id='chevron' slot='end' />
      <IonCardTitle>
        <h2 className='window-text'>Window Inspection</h2>
      </IonCardTitle>
    </IonItem>
  )

  const Open1 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronUpCircleOutline} id='chevron' slot='end' />
      <IonCardTitle>
        <h2 className='window-text'>Window Inspection</h2>
      </IonCardTitle>
    </IonItem>
  )

  const Trigger2 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronDownCircleOutline} slot='end' />
      <IonCardTitle>
        <h2>Sauna 1 Closed</h2>
      </IonCardTitle>
    </IonItem>
  )

  const Open2 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronUpCircleOutline} slot='end' />
      <IonCardTitle>
        <h2>Sauna 1 Closed</h2>
      </IonCardTitle>
    </IonItem>
  )

  const Trigger3 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronDownCircleOutline} slot='end' />
      <IonCardTitle>
        <h2>Water Cut</h2>
      </IonCardTitle>
    </IonItem>
  )

  const Open3 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronUpCircleOutline} slot='end' />
      <IonCardTitle>
        <h2>Water Cut</h2>
      </IonCardTitle>
    </IonItem>
  )

  const Trigger4 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronDownCircleOutline} slot='end' />
      <IonCardTitle>
        <h2>Yard Work Gathering</h2>
      </IonCardTitle>
    </IonItem>
  )

  const Open4 = () => (
    <IonItem lines='none'>
      <IonIcon icon={chevronUpCircleOutline} slot='end' />
      <IonCardTitle>
        <h2>Yard Work Gathering</h2>
      </IonCardTitle>
    </IonItem>
  )

  return (
    <IonPage>
      <Header />
      <IonContent className='ion-padding'>
        <IonGrid>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle color='danger'>Important</IonCardSubtitle>
              <IonCardSubtitle>Week 16 / 2021</IonCardSubtitle>
            </IonCardHeader>
            <Collapsible trigger={<Trigger1 />} triggerWhenOpen={<Open1 />}>
              <IonCardContent>
                <p>
                  Maintenance will enter every apartment in the building during
                  week 12. This is due to the upcoming window repairs.
                </p>
                <br />
                <p>
                  All residents will get more information about the schedule
                  later on. Let the maintenance staff know beforehand if there
                  are pets in the apartment or if you wish to be present during
                  the inspection.
                </p>
              </IonCardContent>
            </Collapsible>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Week 17 - Week 20 / 2021</IonCardSubtitle>
            </IonCardHeader>
            <Collapsible trigger={<Trigger2 />} triggerWhenOpen={<Open2 />}>
              <IonCardContent>
                <p>
                  Sauna 1 will be going through renovation during the end of
                  April and the month of May. The renovation scheduled to start
                  on Monday the 26th of April and finish on Friday the 21st of
                  May.
                </p>
                <br />
                <p>
                  During the renovations the residents will not be able to make
                  a sauna reservation for Sauna 1, as it is out of service.
                  Possible changes of renovation and reservation schedule will
                  be announced on the notifications board.
                </p>
              </IonCardContent>
            </Collapsible>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle color='warning'>Important</IonCardSubtitle>
              <IonCardSubtitle>26/4/2021, 15:00 - 17:00</IonCardSubtitle>
            </IonCardHeader>
            <Collapsible trigger={<Trigger3 />} triggerWhenOpen={<Open3 />}>
              <IonCardContent>
                <p>
                  There will be maintenance on water systems which will affect
                  the flow and heat of water. During the time mentioned in this
                  notification, the water might cut out entirely for a moment as
                  well. Sorry for the inconvenience.
                </p>
              </IonCardContent>
            </Collapsible>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>8/5/2021, 12:00 - 17:00</IonCardSubtitle>
            </IonCardHeader>
            <Collapsible trigger={<Trigger4 />} triggerWhenOpen={<Open4 />}>
              <IonCardContent>
                <p>
                  Residents of the building are welcome to participate to
                  communal yard work on Saturday the 8th of May. The purpose is
                  to clean the communal yard of the building, do garden work,
                  and prepare the area for the upcoming summer season.
                </p>
                <br />
                <p>
                  The building board is offering snacks and refreshments for all
                  the participants. Welcome!
                </p>
              </IonCardContent>
            </Collapsible>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
