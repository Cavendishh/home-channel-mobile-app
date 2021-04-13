import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Tab0.css";

type Inputs = {
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
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch("personalCode"));
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
            <IonItemDivider>
              Register using the personal code received from the property
              manager.
            </IonItemDivider>
            <IonRow>
              <IonCol>
                <IonInput
                  {...register("personalCode", {
                    required: true,
                    maxLength: 10,
                  })}
                  placeholder="1234-5678-9101"
                />
                {errors.personalCode && <p>This field is required</p>}
              </IonCol>
            </IonRow>
            <IonItemDivider>Email</IonItemDivider>
            <IonRow>
              <IonCol>
                <IonInput
                  {...register("email", {
                    required: "Enter your email",
                    maxLength: 40,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  type="email"
                  placeholder="abc@gmail.com"
                />
                {errors.email && (
                  <p className="error">Enter a valid email address</p>
                )}
              </IonCol>
            </IonRow>

            <IonItemDivider>Create Password</IonItemDivider>
            <IonRow>
              <IonCol>
                <IonInput
                  {...register("createPassword", {
                    required: true,
                    minLength: 8,
                  })}
                  type="password"
                  placeholder="**********"
                />
                {errors.createPassword && (
                  <p>Field required, 8 characters minimum</p>
                )}
              </IonCol>
            </IonRow>

            <IonItemDivider>Rewrite Password</IonItemDivider>
            <IonRow>
              <IonCol>
                <IonInput
                  {...register("rewritePassword", {
                    required: true,
                    minLength: 8,
                  })}
                  type="password"
                  placeholder="**********"
                />
                {errors.rewritePassword && <p>This is a required field</p>}
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