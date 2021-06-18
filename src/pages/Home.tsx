import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ButtonWord from '../components/Button';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">hello world</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ButtonWord/>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
