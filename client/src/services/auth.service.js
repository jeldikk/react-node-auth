export async function loginUser(username, password){
    // const {username, password} = userDetails;
    try{
        const res = await fetch("/api/v1/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username, password})
        });
        
        const body = await res.json();

        return {
            status: res.ok,
            body
        }
    }
    catch(err){
        throw err;
    }
  
}

export async function logoutUser(){
    try{
        const res = await fetch("/api/v1/auth/logout", {
            method: 'POST',
        });

        const body = await res.json();
        return {
            status: res.ok,
            body
        }
    }
    catch(err){
        throw err;
    }
}

export async function registerUser(details){
    const {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword
    } = details;
    try{
        const res = await fetch("/api/v1/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                email,
                password,
                confirmPassword
            })
        });

        const body = await res.json();

        return {
            status: res.ok,
            body
        }

    }
    catch(err){
        throw err;
    }
}

export async function validateUser(){
    // here we will send a request to /auth/validate on load
    // and see if token is valid
}