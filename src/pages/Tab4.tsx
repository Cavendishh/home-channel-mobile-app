import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonGrid,
  IonRow,
  IonImg,
  IonCol,
  IonFooter,
} from '@ionic/react';

import React, { useState } from 'react';
import './Tab4.css';
import { cameraOutline, image, micOutline, chevronDownCircleOutline, chevronUpCircleOutline, closeOutline} from 'ionicons/icons';
import Collapsible from 'react-collapsible';
import { CameraResultType, Camera } from "@capacitor/core";


export interface Report {
  id: number;
  text: string;
  content: string;
  masterkey: boolean;
  call: boolean
  image: any
}

function masterToggle(toggle) {
  if(toggle === true) {
    return "Enter with master key";
  } else {
    return "Do not enter with master key"
  }
}

function callToggle(toggle) {
  if(toggle === true) {
    return "Call before entering"
  } else {
    return "No need to call"
  }
}

async function takePicture()  {
  try {
    const picture = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });
    this.guestPicture = picture.base64String;
  } catch (error) {
    console.error(error);
  }
}



const Tab4: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showElement, setShowElement] = useState(true);
  const [showNotice, setShowNotice] = useState(false)
  const [text, setText] = useState<string>();
  const [content, setContent] = useState<string>();
  const [masterkey, setMasterkey] = useState(false)
  const [call, setCall] = useState(false)
  const [reports, setReports] = useState<Report[]>([]);
  const newReports = [...reports].reverse();
  const newReportsTwo=[...newReports].filter(e => e.text !== "");

  
const Mic = () => (
  <IonButton onClick={showRecord} color="secondary">
    <IonIcon slot="icon-only" icon={micOutline} size="large"></IonIcon>
  </IonButton>
)
function showRecord() {
  setShowNotice(true);
  setShowElement(false);
}

function showWrite() {
  setShowNotice(false);
  setShowElement(true);
}

const Notice =() =>(
  <IonItem lines="none" >
    <p id="notice">This feature is not available</p>
    <IonIcon icon={closeOutline} slot="end" onClick={() => setShowNotice(false)}></IonIcon>
  </IonItem>
)

const Trigger = () => (
  <IonItem>
    <IonIcon icon={chevronDownCircleOutline} slot="end"/>
  </IonItem>
);

const Trigger2 = () => (
  <IonItem>
    <IonIcon icon={chevronUpCircleOutline} slot="end"/>
  </IonItem>
);


const addReport = () => {
  const nextID = Math.random()
  const item: Report = {
    id: nextID,
    text: text,
    content: content,
    masterkey: masterkey,
    call: call,
    image: image
  };
  setReports([...reports, item]);
  setShowModal(false);
  setText('');
  setContent('');
  setMasterkey(false);
  setCall(false);
}

return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="title" color="tertiary">
        <img alt="building" src="../assets/home.jpg" />
          HOME CHANNEL
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">

      <IonGrid>
        <IonRow>
          <IonCol>
              <h5 id="subHeader">FAULT REPORTS</h5>
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol>
            <IonButton color="secondary" expand="block" onClick={() => setShowModal(true)}>Add new</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            {newReportsTwo.length > 0 && (
            <IonList lines="none">
              {newReportsTwo.map((list, i) => (
                  <IonCard key={i}>
                    <IonCardHeader id="cardHeader">
                      <IonCardTitle color="rgb(131, 131, 131)">
                        <h2>{list.text}</h2>
                      </IonCardTitle>
                    </IonCardHeader>
                    <Collapsible id="chevron" trigger={<Trigger />} triggerWhenOpen={<Trigger2/>}>

                    <IonCardContent id="cardContent">
                      <p id="report">{list.content}</p>
                      <br/>
                      <p id="reportToggle">{masterToggle(list.masterkey)}</p>
                      <p id="reportToggle">{callToggle(list.call)}</p>
                      {/*<IonImg src={list.image} />*/}
                      <IonImg src= "https://images.unsplash.com/photo-1600247250062-7bc3adb28177?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1270&q=80"/>
                      <p id="notice">Camera feature not available.<br/>
                      Example image. &copy; Hans Eiskonen</p>
                    </IonCardContent>
                    </Collapsible>
                  </IonCard>
                ))}
              </IonList>
            )}
          </IonCol>
        
        </IonRow>
      </IonGrid>          

{/*--   Modal --*/}

<IonModal isOpen={showModal}>
        <IonHeader>
            <IonToolbar>
              <IonTitle className="title" color="tertiary">
                <img alt="building" src="../assets/home.jpg" />
                HOME CHANNEL
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol>
                  <h5 id="subHeader">NEW FAULT REPORT</h5>
              </IonCol>
            </IonRow>
            <IonRow>
                <IonLabel position="stacked">
                  Title
                </IonLabel>
                <IonInput id="item" value={text} placeholder="Eg. Broken stove" onIonChange={e => setText(e.detail.value!)}>
                </IonInput>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className="writeRecord" color={showElement ? "tertiary" : "secondary"} onClick={showWrite}>Write</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="writeRecord" color={showElement ? "secondary" : "tertiary"} onClick={() => setShowElement(false)}>Record</IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="inputchoices">
              <IonCol>
                {showElement && <IonTextarea id="write" value={content} placeholder="Leave your message here" onIonChange={e => setContent(e.detail.value!)} />}
                {!showElement && <Mic />}
                {showNotice && <Notice />}
              </IonCol>
  
            </IonRow>
            <IonRow>
              <IonCol size="9">
                <h5>Add image</h5>
              </IonCol>
              <IonCol size="3">
                <IonButton color="secondary" onClick={takePicture}>
                 <IonIcon slot="icon-only" icon={cameraOutline} size="large"></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="9">
                <h5>Enter with master key?</h5>
              </IonCol>
              <IonCol size="3">
                <IonToggle color="tertiary" checked={masterkey} onIonChange={e => setMasterkey(e.detail.checked)}></IonToggle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="9">
                <h5>Call before entering?</h5>
              </IonCol>
              <IonCol size="3">
                <IonToggle color="tertiary" checked={call} onIonChange={e => setCall(e.detail.checked)}></IonToggle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton color="secondary" expand="block" onClick={addReport }>
                  Send
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>         
        </IonModal>
      </IonContent>
  
      <IonFooter className="emergency">
          <h6>Emergency contact details</h6>
          <p>In case of emergency for ex. severely leaking water pipe or dangerous elecrical fault.<br/>
          24/7</p>
          <p id="phone">+358 123 456 789</p>
      </IonFooter>
    </IonPage>
  );
};

export default Tab4;
