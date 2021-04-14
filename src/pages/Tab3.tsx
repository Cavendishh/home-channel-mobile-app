import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonTitle,
  IonToolbar,
  IonPopover,
  IonButton,
  IonCard,
  IonList,
  IonCardContent,
  IonTextarea,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonText
  
} from "@ionic/react";

import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { personOutline } from "ionicons/icons";
import "./Tab3.css";

export interface Item {
  id: number;
  name: string;
  title: string;
  text: string;
}

const Tab3: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });


  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle]= useState('')
  const [items, setItems] = useState<Item[]>([]);
  const [state, setState]=useState({
    })

    const addItem = () => {
      const nextId = Math.random()
      const item: Item = {
        id: nextId,
        name,
        title,
        text
      };
      setItems([item,...items]);
      setName('');
      setTitle('');
      setText('');
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonText color="primary">
          <h2>
        <IonTitle class="title"><img alt="building" src="../assets/home.jpg" />HOME CHANNEL</IonTitle>
        </h2>
        </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meeting Room</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonPopover
          cssClass="my-custom-class"
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() =>
            setShowPopover({ showPopover: false, event: undefined })
          }
        >
          
          <IonItemDivider>Your message</IonItemDivider>
          
          <IonItem>
            <IonLabel position={"floating"}>Your name</IonLabel>
            <IonInput value={name} onIonChange={e => setName(e.detail.value!)} ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position={"floating"}>Title</IonLabel>
            <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)}  ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position={"floating"}>Add your text</IonLabel>
            <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)} ></IonTextarea>
          </IonItem>
          <IonButton expand="block" 
          onClick={(e: any) => {
            addItem();
            setShowPopover({ showPopover: false, event: e });
          }}
           >Send</IonButton> 

        </IonPopover>
        <IonButton
          expand="block"
          onClick={(e: any) => {
            e.persist();
            setShowPopover({ showPopover: true, event: e });
          }}
        >
          Add new
        </IonButton>

        <IonList>
            
              {items.map((item, i) => (
                
                   <IonCard class="card" key={i}>
                     
                    <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon class="icon" icon={personOutline}></IonIcon>{item.name}
                    </IonCardTitle>
                    <IonCardSubtitle> 
                    {item.title}
                  </IonCardSubtitle>
                  
                  </IonCardHeader>
          <Collapsible id="a" trigger="Read more...">
            <IonCardContent>
              {item.text}
            </IonCardContent>
          </Collapsible>
             
        </IonCard>
              ))}
            </IonList>

        <IonCard class="card">
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon class="icon" icon={personOutline}></IonIcon> Mike Simons
            </IonCardTitle>
            <IonCardSubtitle>A table for sale</IonCardSubtitle>
          </IonCardHeader>
          <Collapsible id="a" trigger="Read more...">
            <IonCardContent>
              A table for sale. Almost new table 80x120. 10 eur. Ask more by
              message 04000040404
            </IonCardContent>
          </Collapsible>
        </IonCard>

        <IonCard class="card">
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon class="icon" icon={personOutline}></IonIcon> Mike Simons
            </IonCardTitle>
            <IonCardSubtitle>A table for sale</IonCardSubtitle>
          </IonCardHeader>
          <Collapsible id="a" trigger="Read more...">
            <IonCardContent>
              A table for sale. Almost new table 80x120. 10 eur. Ask more by
              message 04000040404
            </IonCardContent>
          </Collapsible>
        </IonCard>
        <IonCard class="card">
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon class="icon" icon={personOutline}></IonIcon> Mike Simons
            </IonCardTitle>
            <IonCardSubtitle>A table for sale</IonCardSubtitle>
          </IonCardHeader>
          <Collapsible id="a" trigger="Read more...">
            <IonCardContent>
              A table for sale. Almost new table 80x120. 10 eur. Ask more by
              message 04000040404
            </IonCardContent>
          </Collapsible>
        </IonCard>
        <IonCard class="card">
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon class="icon" icon={personOutline}></IonIcon> Mike Simons
            </IonCardTitle>
            <IonCardSubtitle>A table for sale</IonCardSubtitle>
          </IonCardHeader>
          <Collapsible id="a" trigger="Read more...">
            <IonCardContent>
              A table for sale. Almost new table 80x120. 10 eur. Ask more by
              message 04000040404
            </IonCardContent>
          </Collapsible>
        </IonCard>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3