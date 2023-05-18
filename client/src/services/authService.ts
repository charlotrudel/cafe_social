async function login(username: string, pw: string) {
    const user = { username: username, password: pw };

    await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem('token', data.token);
        });
}

async function getLoginStatus(onSuccess: Function, onFailure: Function) {
    fetch('/auth/getUser', {
        headers: {
            'x-access-token': sessionStorage.getItem('token') as string,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.isLoggedIn) onSuccess(data.username);
            else onFailure();
        });
}

let authService = { login, getLoginStatus };
export default authService;
