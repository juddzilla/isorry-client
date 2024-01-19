import Fetch from '../../fetch';
import { objectToUrlParams } from './index';

export default ({ code }) => {
    const uri =['oauth/github',objectToUrlParams({ code })].join('?');
    return Fetch.get(uri).then(res => res);
}