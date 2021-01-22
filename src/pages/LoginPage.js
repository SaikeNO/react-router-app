import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor="login">Podaj login: <input type="text"/></label> <br/>
            <label htmlFor="password">Podaj hasło: <input type="password"/></label> <br/>
            <button>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;