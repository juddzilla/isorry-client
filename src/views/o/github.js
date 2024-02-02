import Fetch from '../../fetch';
import { objectToUrlParams } from './index';

const github = ({ code }) => {
    const uri =['oauth/github',objectToUrlParams({ code })].join('?');
    return Fetch.get(uri).then(res => res);
};

export default github;