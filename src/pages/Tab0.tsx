import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { warningOutline } from "ionicons/icons";
import "./Tab0.css";
import { on } from "node:events";

type FormValues = {
  personalCode: string;
  email: string;
  createPassword: string;
  rewritePassword: string;
  rememberMe: boolean;
};

const Tab0: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Channel</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <img alt="building" src="../assets/img/test.jpg" />

            <IonItemDivider>
              <IonLabel className="ion-text-wrap" color="dark">
                Register using the personal code received from the property
                manager.
              </IonLabel>
            </IonItemDivider>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    {...register("personalCode", {
                      required: true,
                      maxLength: 10,
                    })}
                    placeholder="1234-5678-9101"
                  />
                </IonItem>
                {errors.personalCode && (
                  <p id="code">
                    <IonIcon icon={warningOutline} /> This field is required
                  </p>
                )}
              </IonCol>
            </IonRow>

            <IonItemDivider>
              <IonLabel color="dark">Email</IonLabel>
            </IonItemDivider>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    {...register("email", {
                      required: "Enter your email",
                      maxLength: 40,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    type="email"
                    placeholder="abc@gmail.com"
                    autocomplete="email"
                  />
                </IonItem>
                {errors.email && (
                  <p id="email">
                    <IonIcon icon={warningOutline} /> Enter a valid email
                    address
                  </p>
                )}
              </IonCol>
            </IonRow>

            <IonItemDivider>Create Password</IonItemDivider>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    {...register("createPassword", {
                      required: true,
                      minLength: 8,
                    })}
                    type="password"
                    placeholder="**********"
                  />

                  {errors.createPassword && (
                    <p id="password">
                      <IonIcon icon={warningOutline} /> Field required, 8
                      characters minimum
                    </p>
                  )}
                </IonItem>
              </IonCol>
            </IonRow>

            <IonItemDivider>Rewrite Password</IonItemDivider>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    {...register("rewritePassword", {
                      required: true,
                      minLength: 8,
                    })}
                    type="password"
                    placeholder="**********"
                  />
                </IonItem>
                {errors.rewritePassword && (
                  <p id="rpassword">
                    <IonIcon icon={warningOutline} /> This field is required
                  </p>
                )}
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
            <IonButton type="submit" color="secondary" expand="block">
              Submit
            </IonButton>
          </form>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab0;
