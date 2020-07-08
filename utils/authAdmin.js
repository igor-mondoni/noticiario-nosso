import axios from 'axios'
import Router from 'next/router'
import { Cookies } from 'react-cookie'
import serverUrl from './env'

const cookies = new Cookies()

export default async function handleAuthAdminSSR(ctx) {

    let token = null
    let user = null
    if(ctx?.req?.headers?.cookie) {
        token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    } else {
        token = cookies.get('token')
    }
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const resp = await axios.get(serverUrl + '/auths/profile', config)
        user = resp.data
        if(user.usertype == 'user'){
            alert('erro: usuário sem permissão')
            Router.push('/')
        }
    } catch (err) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
        } else {
            Router.push('/')
        }
    }

    return user
}