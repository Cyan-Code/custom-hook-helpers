// Use your environment URL firstible
// 1. Keep in mind that this functions are promises
... async ... {
const resp = await fetchSinToken('login', {email, password}, 'POST')
     ... if (resp.ok) { ... }
}
.... the default method is get .... so if you need used a renew token, you can use fetchConToken Function...
