import React, {Component} from 'react';
import './RouteItem.scss';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import { setUserInfo } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import DatabaseApi from '../../Services/dbApi';
import SimpleModal from '../Modal/SimpleModal';


class RouteItem extends Component {
  constructor (props){
    super(props);
    this.state = {
      isFavourite: false,
      displayModal: false
    };
  }
  
  componentDidMount(){     
    const {route} = this.props;
    this.isFavourite(route.id);
  }

  saveFavourite = (id)=>{
    const updateFav = async () => {
      let { user } = this.props;

      if (user.favRoutes.find(routeId => routeId === id)){
        const index = user.favRoutes.indexOf(id);
        user.favRoutes.splice(index, 1);
      } else {
        user.favRoutes.push(id);
      }

      if(user.uid){
        const updateUser = await DatabaseApi.updateDocument('user', user, user.docId);
        if(updateUser) {
        // llamo a redux para setear el estado
          this.props.setUser(user);
          this.isFavourite(id);
        } else {
          console.log('QUE HA PASADO');
        }
      }else {
        this.props.setUser(user);
        this.isFavourite(id);
      }   
     
    };
    if (!this.props.user.hasOwnProperty('favRoutes')){
      this.props.user.favRoutes = []; 
    }
    updateFav();
  } 

  isFavourite = (id) => {
    const isInFav = this.props.user.favRoutes.find((routeid) => routeid === id);
    this.setState({ isFavourite: Boolean(isInFav) });
  }

  triggerModal= () => {
    if (!this.state.displayModal) {
      this.setState({displayModal: true});
    }
  }
 
  render() {
    const {route, user} = this.props;
    const { isFavourite } = this.state;
   
    return (
      <article className="card">
        {this.state.displayModal && <SimpleModal displayModal={this.state.displayModal}>
          <div className='content-modal'>
            <div className= 'text-mod'>
              <h1 className="modal-h1">¡Atención!</h1>
              <p>Para añadir rutas a <strong>Favoritos</strong> es necesario iniciar sesión o registrarse</p>
            </div>
            <div className="btn-content">      
              <button className="modal-btn"><Link to="/login">Iniciar Sesión</Link></button>
              <button className="modal-btn"><Link to="/signup">Registrarse</Link></button>
            </div>  
          </div>
        </SimpleModal>
        }
        <CardHeader 
          user= {user}
          route={route} 
          isFavourite={isFavourite} 
          saveFavourite={this.saveFavourite} 
          title={route.name} 
          image={route.image}
          showModal={this.triggerModal}
        />
        <CardBody 
          route={route} 
          title={route.name} 
          text={route.description} 
          time={route.time}/>
      </article>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => { dispatch(setUserInfo(user)); }
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteItem));
