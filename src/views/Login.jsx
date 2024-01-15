
// import { google } from 'googleapis';
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

// console.log('pri', gapi);
const Component = () => {
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    function objectToUrlParams(obj) {
        const params = [];
      
        for (const key in obj) {
          params.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
        }
      
        return params.join('&');
      }

    const scope = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' ');

    const params = {
        client_id: REACT_APP_GOOGLE_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/o/google',        
        response_type: 'token',
        // access_type: 'offline',
        prompt: 'consent',
        scope,
        // 'include_granted_scopes': 'true',
        // 'state': 'pass-through'
    };

    
    const uri =[oauth2Endpoint,objectToUrlParams(params)].join('?');
    // function login() {
    //     console.log('uri', uri);
    //     return uri;
    //     // const res = await fetch(uri);
    // }

    // const oauth2Client = new google.auth.OAuth2(
    //     REACT_APP_GOOGLE_CLIENT_ID,
    //     REACT_APP_GOOGLE_SECRET,
    //     'http://localhost:3000/o/google',
    // );

    // function getGoogleAuthURL() {
    //     /*
    //      * Generate a url that asks permissions to the user's email and profile
    //      */
    //     const scopes = [
    //       'https://www.googleapis.com/auth/userinfo.profile',
    //       'https://www.googleapis.com/auth/userinfo.email',
    //     ];
      
    //     const generatedAuthUrl = oauth2Client.generateAuthUrl({
    //       access_type: 'offline',
    //       prompt: 'consent',
    //       scope: scopes, // If you only need one scope you can pass it as string
    //     });
      
    //     return generatedAuthUrl;
    //   }
    
    // console.log('googleapis',getGoogleAuthURL());
    return (
        <div>
            Login
            <a href={uri}>click</a>
            {/* <button onClick={ login }>Login</button> */}
        </div>
    )
}

const Route = {
    element: <Component />,
    path: "/login",
};
  
export default Route;