import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTextarea, IonTitle, IonToolbar, IonToggle, IonGrid, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import './Tab4.css';
import { attachOutline, cameraOutline, micOutline } from 'ionicons/icons';


export interface Report {
  id: number;
  text: string;
  content: string;
  masterkey: boolean;
  call: boolean
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

const Tab4: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showElement, setShowElement] = useState(true);
  const [text, setText] = useState<string>();
  const [content, setContent] = useState<string>();
  const [masterkey, setMasterkey] = useState(false)
  const [call, setCall] = useState(false)
  const [reports, setReports] = useState<Report[]>([]);
  const newReports = [...reports].reverse();

  const addReport = () => {
    const nextID = Math.random()
    const item: Report = {
      id: nextID,
      text: text,
      content: content,
      masterkey: masterkey,
      call: call
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
          <IonTitle>Fault Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid>
          <IonRow>
            <IonButton onClick={() => setShowModal(true)}>Add new</IonButton>
          </IonRow>
          <IonRow>
          {newReports.length > 0 && (
            <IonList>
              {newReports.map((list, i) => (
                  <IonCard key={i}>
                    <IonCardTitle>
                      <h2>{list.text}</h2>
                    </IonCardTitle>
                    <IonCardContent>
                      <p>{list.content}</p>
                      <p>{masterToggle(list.masterkey)}</p>
                      <p>{callToggle(list.call)}</p>
                    </IonCardContent>
                  </IonCard>
              ))}
            </IonList>
          )}
          </IonRow>
          <IonRow>
            <div>
              <h3>Emergency contact details</h3>
              <p>In case of emergency for ex. severely leaking water pipe or dangerous elecrical fault.</p>
              <p>24/7</p>
              <p>+358 123 456 789</p>
            </div>
          </IonRow>
          <IonRow>
     
          </IonRow>
        </IonGrid>

               

{/*--   Modal --*/}

<IonModal isOpen={showModal}>
        <IonHeader>
            <IonToolbar>
              <IonTitle>New fault report</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow>
                <IonLabel position="stacked">
                  Title
                </IonLabel>
                <IonInput id="item" value={text} placeholder="Eg. Broken stove" onIonChange={e => setText(e.detail.value!)}>
                </IonInput>
            </IonRow>
            <IonRow>
            <IonButton onClick={() => setShowElement(true)}>Write message</IonButton>
            <IonButton onClick={() => setShowElement(false)}>Record message</IonButton>
            </IonRow>
            <IonRow>
              {showElement && <IonTextarea id="item" value={content} placeholder="Leave your message here" onIonChange={e => setContent(e.detail.value!)}>
              </IonTextarea>}
            </IonRow>
            <IonRow>
             {!showElement && <IonIcon icon={micOutline} size="large"></IonIcon>}
            </IonRow>
            <IonRow>
              Add image
              <IonIcon icon={attachOutline} size="large"></IonIcon>
              <IonIcon icon={cameraOutline} size="large"></IonIcon>
            </IonRow>
            <IonRow>
              Enter with master key?
              <IonToggle checked={masterkey} onIonChange={e => setMasterkey(e.detail.checked)}></IonToggle>
            </IonRow>
            <IonRow>
              Call before entering?
              <IonToggle checked={call} onIonChange={e => setCall(e.detail.checked)}></IonToggle>
            </IonRow>
            <IonRow>
              <IonButton onClick={addReport }>
              Send
              </IonButton>
            </IonRow>
          </IonGrid>         
        </IonModal>


      </IonContent>

    </IonPage>
  );
};

export default Tab4;
