import {config} from "@keystone-6/core";
import {lists} from "./schema";
import {withAuth, session} from './auth'


export default config(withAuth({
    db: {
        provider: "sqlite",
        url: "file:./keystone.db",
    },
    lists,
    session,
    ui: {
        isAccessAllowed: (context) => !!context.session?.data
    }
}));