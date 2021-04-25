import { IonHeader, IonText, IonTitle, IonToolbar, IonImg } from '@ionic/react'
import icon from '../assets/home-channel-icon.jpg'

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonText color='secondary'>
          <IonImg
            src={icon}
            alt='home channel icon'
            className='imgIcon alignCenter'
          />
          <IonTitle class='title'>Home Channel</IonTitle>
        </IonText>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
