import Fetch from '../../fetch';
import { objectToUrlParams } from './index';

const google = ({ access_token, scope }) => {
    const params = { token: access_token, scopes: scope };    
    const uri =['oauth/google',objectToUrlParams(params)].join('?');

    return Fetch.get(uri).then(res => res);
};

export default google;