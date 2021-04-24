/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { warningOutline } from "ionicons/icons";
import "./Tab0.css";
import { Redirect } from "react-router-dom";

//To validate the input fields of the login form I used react-hook-form. Here I define the type of values
type FormValues = {
  personalCode: string;
  email: string;
  createPassword: string;
  rewritePassword: string;
  rememberMe: boolean;
};

const Tab0: React.FC = () => {
  //These hooks are to make the login after registering and validating the inputs. Without backend, one has to go around the usual way
  const [allowLogin, setAllowLogin] = useState(false);
  //react hook form components for the form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  //The eventhandler for submitting the form and moving to the next page
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setAllowLogin(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonText color="secondary">
            <h2>
              <IonTitle class="title">
                <img alt="building" src="../assets/home.jpg" />
                HOME CHANNEL
              </IonTitle>
            </h2>
          </IonText>
        </IonToolbar>
      </IonHeader>
      {/* Here redirect is used to allow login and change tab on submit */}
      {allowLogin && <Redirect push to="/tab1" />}
      <IonContent className="ion-padding">
        <IonGrid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <img alt="building" src="../assets/img/test.jpg" />

            <IonItemDivider>
              <IonLabel className="ion-text-wrap" color="dark">
                Register using the personal code received from the property
                manager*
              </IonLabel>
            </IonItemDivider>

            <IonRow>
              <IonCol>
                <IonItem lines="full">
                  <IonInput
                    {...register("personalCode", {
                      required: true,
                      maxLength: 20,
                    })}
                    id="pcode"
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
              <IonLabel color="dark">Email*</IonLabel>
            </IonItemDivider>

            <IonRow>
              <IonCol>
                <IonItem lines="full">
                  <IonInput
                    {...register("email", {
                      required: "Enter your email",
                      maxLength: 40,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    id="mail"
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

            <IonItemDivider>
            <IonLabel color="dark">Create Password*</IonLabel>
            </IonItemDivider>
            <IonRow>
              <IonCol>
                <IonItem lines="full">
                  <IonInput
                    {...register("createPassword", {
                      required: true,
                      minLength: 8,
                    })}
                    id="pword"
                    type="password"
                    placeholder="**********"
                  />
                </IonItem>

                {errors.createPassword && (
                  <p id="password">
                    <IonIcon icon={warningOutline} /> Field required, 8
                    characters minimum
                  </p>
                )}
              </IonCol>
            </IonRow>

            <IonItemDivider>
            <IonLabel color="dark">Rewrite Password*</IonLabel>
            </IonItemDivider>
            <IonRow>
              <IonCol>
                <IonItem lines="full">
                  <IonInput
                    {...register("rewritePassword", {
                      required: true,
                      minLength: 8,
                    })}
                    id="pwordtwo"
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
                <IonItem lines="full">
                  <IonCheckbox slot="start" color="secondary"></IonCheckbox>
                  Remember me
                </IonItem>
              </IonCol>
            </IonRow>
            <IonButton type="submit" color="secondary" expand="block">
              Register
            </IonButton>
           
          </form>
          <IonFooter>
            <IonToolbar>
              <IonTitle id="copy">
                Copyright ©️ 2021 Team Making Life Simpler
              </IonTitle>
            </IonToolbar>
          </IonFooter>
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab0;
