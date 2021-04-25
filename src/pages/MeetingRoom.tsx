import React, { useState } from 'react'
import {
  IonContent,
  IonInput,
  IonPage,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonPopover,
  IonButton,
  IonCard,
  IonList,
  IonCardContent,
  IonTextarea,
  IonItem,
  IonLabel,
  IonItemDivider,
} from '@ionic/react'
import {
  personOutline,
  chevronDownCircleOutline,
  chevronUpCircleOutline,
} from 'ionicons/icons'
import Header from '../components/Header'
import Collapsible from 'react-collapsible'
import './MeetingRoom.css'

export interface Item {
  id: number
  name: string
  title: string
  text: string
}

const MeetingRoom: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  })

  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [items, setItems] = useState<Item[]>([])
  const [state, setState] = useState({})
  const [showError, setShowError] = useState(false)

  const addItem = () => {
    const nextId = Math.random()
    const item: Item = {
      id: nextId,
      name,
      title,
      text,
    }
    setItems([item, ...items])
    setName('')
    setTitle('')
    setText('')
  }

  return (
    <IonPage>
      <IonContent>
        <Header />

        <IonPopover
          cssClass='my-custom-class'
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() =>
            setShowPopover({ showPopover: false, event: undefined })
          }
        >
          <IonItemDivider>New post</IonItemDivider>

          <IonItem>
            <IonLabel position={'floating'}>Name</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Title</IonLabel>
            <IonInput
              value={title}
              onIonChange={(e) => setTitle(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Message</IonLabel>
            <IonTextarea
              value={text}
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          {showError && <div className='error'>All fields are required</div>}
          <IonButton
            expand='block'
            onClick={(e: any) => {
              if (name === '' || title === '' || text === '') {
                setShowError(true)
              } else {
                addItem()
                setShowPopover({ showPopover: false, event: e })
              }
            }}
          >
            Add post
          </IonButton>
        </IonPopover>
        <IonGrid>
          <IonButton
            expand='block'
            onClick={(e: any) => {
              e.persist()
              setShowPopover({ showPopover: true, event: e })
            }}
            color='secondary'
          >
            Add a new post
          </IonButton>
        </IonGrid>
        <IonList>
          {items.map((item, i) => (
            <IonGrid>
              <IonCard class='card' key={i}>
                <IonRow>
                  <IonCardHeader>
                    <IonCardTitle>
                      <IonCol>
                        <IonIcon class='icon' icon={personOutline}></IonIcon>
                      </IonCol>
                      <IonCol>{item.name}</IonCol>
                    </IonCardTitle>
                  </IonCardHeader>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <Collapsible
                      slot='end'
                      id='a'
                      trigger={
                        <IonRow>
                          <IonCol>
                            <IonCardSubtitle className='subtitle'>
                              {item.title}
                            </IonCardSubtitle>
                          </IonCol>
                          <IonCol size='1'>
                            <IonIcon
                              id='chevron'
                              icon={chevronDownCircleOutline}
                            ></IonIcon>
                          </IonCol>
                        </IonRow>
                      }
                      triggerWhenOpen={
                        <IonRow>
                          <IonCol>
                            <IonCardSubtitle className='subtitle'>
                              {item.title}
                            </IonCardSubtitle>
                          </IonCol>
                          <IonCol size='1'>
                            <IonIcon
                              id='chevron'
                              icon={chevronUpCircleOutline}
                            ></IonIcon>
                          </IonCol>
                        </IonRow>
                      }
                    >
                      <IonCardContent>{item.text}</IonCardContent>
                    </Collapsible>
                  </IonCol>
                </IonRow>
              </IonCard>
            </IonGrid>
          ))}
        </IonList>

        <IonGrid>
          <IonCard class='card'>
            <IonRow>
              <IonCardHeader>
                <IonCardTitle>
                  <IonCol>
                    <IonIcon class='icon' icon={personOutline}></IonIcon>
                  </IonCol>
                  <IonCol>Mike Simons</IonCol>
                </IonCardTitle>
              </IonCardHeader>
            </IonRow>
            <IonRow>
              <IonCol>
                <Collapsible
                  trigger={
                    <IonRow>
                      <IonCol>
                        <IonCardSubtitle className='subtitle'>
                          A table for sale{' '}
                        </IonCardSubtitle>
                      </IonCol>
                      <IonCol size='1'>
                        <IonIcon
                          id='chevron'
                          icon={chevronDownCircleOutline}
                        ></IonIcon>
                      </IonCol>
                    </IonRow>
                  }
                  triggerWhenOpen={
                    <IonRow>
                      <IonCol>
                        <IonCardSubtitle className='subtitle'>
                          A table for sale{' '}
                        </IonCardSubtitle>
                      </IonCol>
                      <IonCol size='1'>
                        <IonIcon
                          id='chevron'
                          icon={chevronUpCircleOutline}
                        ></IonIcon>
                      </IonCol>
                    </IonRow>
                  }
                >
                  <IonCardContent>
                    A table for sale. Almost new table 80x120. 10 eur. Ask more
                    by message 04000040404
                  </IonCardContent>
                </Collapsible>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard class='card'>
            <IonRow>
              <IonCardHeader>
                <IonCardTitle>
                  <IonCol>
                    <IonIcon class='icon' icon={personOutline}></IonIcon>
                  </IonCol>
                  <IonCol>Anna Kivinen</IonCol>
                </IonCardTitle>
              </IonCardHeader>
            </IonRow>
            <IonRow>
              <IonCol>
                <Collapsible
                  trigger={
                    <IonRow>
                      <IonCol>
                        <IonCardSubtitle className='subtitle'>
                          Having party this saturday
                        </IonCardSubtitle>
                      </IonCol>
                      <IonCol size='1'>
                        <IonIcon
                          id='chevron'
                          icon={chevronDownCircleOutline}
                        ></IonIcon>
                      </IonCol>
                    </IonRow>
                  }
                  triggerWhenOpen={
                    <IonRow>
                      <IonCol>
                        <IonCardSubtitle className='subtitle'>
                          A table for sale{' '}
                        </IonCardSubtitle>
                      </IonCol>
                      <IonCol size='1'>
                        <IonIcon
                          id='chevron'
                          icon={chevronUpCircleOutline}
                        ></IonIcon>
                      </IonCol>
                    </IonRow>
                  }
                >
                  <IonCardContent>
                    There will ba a birthday party in apartment A34 this
                    Saturday till 9 PM. Apologies for any inconvenience
                  </IonCardContent>
                </Collapsible>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard class='card'>
            <IonRow>
              <IonCardHeader>
                <IonCardTitle>
                  <IonCol>
                    <IonIcon class='icon' icon={personOutline}></IonIcon>
                  </IonCol>
                  <IonCol>Monica Daves</IonCol>
                </IonCardTitle>
              </IonCardHeader>
            </IonRow>
            <IonRow>
              <IonCol>
                <Collapsible
                  trigger={
                    <IonRow>
                      <IonCol size='11'>
                        <IonCardSubtitle className='subtitle'>
                          Dog sitter{' '}
                        </IonCardSubtitle>
                      </IonCol>
                      <IonCol size='1'>
                        <IonIcon
                          id='chevron'
                          icon={chevronDownCircleOutline}
                        ></IonIcon>
                      </IonCol>
                    </IonRow>
                  }
                  triggerWhenOpen={
                    <IonRow>
                      <IonCol>
                        <IonCardSubtitle className='subtitle'>
                          A table for sale{' '}
                        </IonCardSubtitle>
                      </IonCol>
                      <IonCol size='1'>
                        <IonIcon
                          id='chevron'
                          icon={chevronUpCircleOutline}
                        ></IonIcon>
                      </IonCol>
                    </IonRow>
                  }
                >
                  <IonCardContent>
                    I can take your dog for a walk every workday after 2 PM.
                    Leave your message 040067895 and ask more
                  </IonCardContent>
                </Collapsible>
              </IonCol>
            </IonRow>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default MeetingRoom
