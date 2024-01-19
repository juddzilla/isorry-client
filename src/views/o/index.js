import Github from './github';
import Google from './google';

export default (params) => {
    if (!Object.hasOwn(params, 'provider')) {
        return null;
    }

    const providers = {
        github: Github,
        google: Google,
    };

    if (!providers[params.provider]) {
        return null;
    }

    return providers[params.provider](params);
}

export const objectToUrlParams = (obj) => {
    const params = [];
  
    for (const key in obj) {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  
    return params.join('&');
}