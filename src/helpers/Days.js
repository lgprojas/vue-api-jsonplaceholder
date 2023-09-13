import moment from 'moment/moment'
import 'moment/locale/es';

export function Days(fchPublicacion) {


    if(fchPublicacion){
        moment.locale('es');
        const days = moment(fchPublicacion, 'DD/MM/YYYY').fromNow();
        return days
    }else{
        return "0"
    }
}