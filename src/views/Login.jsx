
import { Link } from 'react-router-dom';
const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GITHUB_CLIENT_ID } = process.env;

const Component = () => {
  function objectToUrlParams(obj) {
    const params = [];

    for (const key in obj) {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }

    return params.join('&');
  }

  function github() {
    const oauth2Endpoint = 'https://github.com/login/oauth/authorize';

    const scope = [
      'read:email',
      'read:user',
    ].join(' ');

    const params = {
      client_id: REACT_APP_GITHUB_CLIENT_ID,
    redirect_uri: 'http://localhost:3000/sorries?provider=github',    
      allow_signup: false,    
      response_type: 'token',
      prompt: 'consent',
      scope,
    };
    return [oauth2Endpoint,objectToUrlParams(params)].join('?');
  }

  function google() {
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    const scope = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' ');

    const params = {
        client_id: REACT_APP_GOOGLE_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/sorries?provider=google',        
        response_type: 'token',
        prompt: 'consent',
        scope,
    };

    return [oauth2Endpoint,objectToUrlParams(params)].join('?');
  }

    
    return (
        <div className="flex flex-col flex-1">
            <div className="bg-gray-900 px-6 py-16 sm:py-24 lg:px-8">
              <div className="mx-auto max-w-2xl text-white text-center">
                <p className="text-base font-semibold leading-7 text-primary  ">iSorry.lol</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">Log In</h2>
                <p className="mt-6 text-lg leading-8">
                  Use a social account to login with OAuth2.  
                </p>
              </div>
            </div>
            {/* <a href={uri}>click</a> */}
            <div className="bg-white py-24">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                  <div className="mx-auto w-full max-w-xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Seamless Social Login Experience with OAuth Integration</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Elevate your login process by effortlessly connecting with your favorite social accounts. Our OAuth integration ensures a smooth and secure authentication experience. Log in with ease, and enjoy the convenience of using your preferred social identity to access our platform. Enhance user engagement and simplify registration with our seamless social login solution.
                    </p>                    
                  </div>
                  <div className="mx-auto grid w-full max-w-xl flex flex-col items-center justify-center lg:max-w-none lg:pl-8">                    
                    <Link to={google()} className="gsi-material-button mb-4">
                      <div className="gsi-material-button-state"></div>
                      <div className="gsi-material-button-content-wrapper">
                        <div className="gsi-material-button-icon">
                          <svg viewBox="0 0 48 48" style={{display: 'block'}}>
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                          </svg>
                        </div>
                        <span className="gsi-material-button-contents">Sign in with Google</span>
                        <span style={{display: 'none'}}>Sign in with Google</span>
                      </div>
                    </Link>
                    {/* <img
                      className="max-h-12 w-full object-contain object-left"
                      src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                      alt="Reform"
                      width={104}
                      height={48}
                    /> */}
                    <Link to={github()} type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-1" viewBox="0 0 1792 1792">
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                      </svg>
                      Sign in with GitHub
                    </Link>
                    {/* <button type="button" style={{backgroundColor: '#ff4500'}} className="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                      <svg id="Layer_1" viewBox="0 0 256 256" className='h-6 w-6 mr-1'>
                        <rect class="cls-2" x="0" y="0" width="256" height="256"/>
                        <path class="cls-1" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                      </svg>
                      Sign in with Reddit
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

const Route = {
    element: <Component />,
    path: "/login",
};
  
export default Route;