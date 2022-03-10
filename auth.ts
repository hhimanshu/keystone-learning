import {createAuth} from "@keystone-6/auth";
import {statelessSessions} from "@keystone-6/core/session";

const {withAuth} = createAuth({
    listKey: 'User',
    identityField: 'email',
    sessionData: 'name',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password']
    }
})

const sessionSecret = '-- DEV COOKIE FRAGILE SECRET; CHANGE ME --'
const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days
const session = statelessSessions({
    secret: sessionSecret,
    maxAge: sessionMaxAge
})

export {withAuth, session}