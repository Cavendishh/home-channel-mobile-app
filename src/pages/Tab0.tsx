import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonCheckbox,
  IonButton,
  IonItemDivider,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab0.css";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

const Tab0: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Home Channel</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
        <img src="../assets/img/test.jpg"/>
          <IonRow>
            <IonCol>
              <IonItemDivider>
                <IonLabel className="ion-text-wrap" color="dark">
                  Register using the personal code received from the property
                  manager.
                </IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput type="text" placeholder="Personal Code"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonItemDivider>
            <IonLabel color="dark">Email</IonLabel>
          </IonItemDivider>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput type="email" placeholder="abc@gmail.com"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonItemDivider>
            <IonLabel color="dark">Create Password</IonLabel>
          </IonItemDivider>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  type="password"
                  placeholder="*************"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonItemDivider>
            <IonLabel color="dark">Rewrite Password</IonLabel>
          </IonItemDivider>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  type="password"
                  placeholder="*************"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonCheckbox slot="start" color="secondary"></IonCheckbox>
                Remember me
              </IonItem>
            </IonCol>
          </IonRow>
          <IonButton color="secondary" expand="block">
            Register
          </IonButton>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab0;
