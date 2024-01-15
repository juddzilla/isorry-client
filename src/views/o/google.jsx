import React from "react";
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

const Component = () => {
    // const [searchParams, setSearchParams] = useSearchParams();

    // const myParam = searchParams.get('access_token');
    // console.log('myParam', myParam);
    async function useQuery() {
        const { hash } = useLocation();
        console.log('hash', hash);
        const parsedHash = new URLSearchParams(hash.substring(1));
        console.log('parsedHash', parsedHash);
        // const urls =  new URLSearchParams(hash)
        const token = parsedHash.get('access_token');
        const scopes = parsedHash.get('scope');
        // console.log('accessToken', accessToken);
        // console.log('scopes', scopes);
        // const { search } = useLocation();
        // const urls =  new URLSearchParams(search)
        // const code = urls.get('code');
        // const scopes = urls.get('scope');
        // console.log('code',code);
        // const uri = `http://localhost:8080/oauth/google?code=${code}&scope=${scopes}`;
        // const uri = `http://localhost:8080/oauth/google?token=${accessToken}&scope=${scopes}`;

        function objectToUrlParams(obj) {
            const params = [];
          
            for (const key in obj) {
              params.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
            }
          
            return params.join('&');
          }

        const params = { token, scopes, };
        const uri =['http://localhost:8080/oauth/google',objectToUrlParams(params)].join('?');
    

        // const res = ;
        // console.log('res', res);
        return await fetch(uri, {credentials: 'include'});

        
      
        // return React.useMemo(() => new URLSearchParams(hash), [hash]);
      }

    //   console.log('useQuery', useQuery());
    useQuery().then(res => {
        console.log("RESP", res);
    });
    return (
        <div>Googl oauth</div>
    )
};

// http://localhost:3000/o/google
// #state=pass-through
// &access_token=ya29.a0AfB_byCL07tgoJ4kxTc__PxV8XarKVFI0aR-JqZOYVes66S_hzre0PWv320cAY677XiJCZrzmwl9qL0-AzNPQkl7OFg0EthGrl2ICiNkD4v_cmSZMzfxAxkayp4GrC-R9xkJmX_u1QLOm2gaO7YmG5foM2RY05uHIQaCgYKAcISARESFQHGX2Mi2NuNPoxhAaSUF2lXQXGLfg0169
// &token_type=Bearer
// &expires_in=3599
// &scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email
// &authuser=3
// &prompt=consent


const Route = {
    element: <Component />,
    path: "/o/google",
};
  
export default Route;