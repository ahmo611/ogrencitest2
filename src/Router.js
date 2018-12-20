import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';
import StudentCreate from './components/StudentCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main">

      <Scene 
        onRight={() => Actions.StudentCreate()}
        rightTitle="Yeni"
        key="studentsList" 
        component={StudentsList} 
        title="Öğrenci Liste" />
        
        <Scene
        key="StudentCreate"
        component={StudentCreate}
        title="Öğrenci Kaydet"
        />

        <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />
<<<<<<< HEAD
          
=======
      
        <Scene 
        onRight={() => console.log('tıklandı')}
        rightTitle="Yeni"       
        key="studentsList" 
        component={StudentsList} 
        title="Öğrenci Liste" />
>>>>>>> Navigation
      </Scene>
      
    </Router>
  );
};
export default RouterComponent;